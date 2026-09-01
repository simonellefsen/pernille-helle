"""Render a cinematic mitochondrial DNA helix for Pernille's story."""

from __future__ import annotations

import math
from pathlib import Path

import bpy
from mathutils import Vector

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "helix.png"
OUT.parent.mkdir(parents=True, exist_ok=True)

bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene


def nuke():
    for coll in (bpy.data.objects, bpy.data.meshes, bpy.data.curves, bpy.data.materials, bpy.data.cameras, bpy.data.lights, bpy.data.worlds):
        for block in list(coll):
            coll.remove(block)


nuke()


def emission_mat(name: str, color: tuple[float, float, float], strength: float) -> bpy.types.Material:
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    emit = nt.nodes.new("ShaderNodeEmission")
    emit.inputs["Color"].default_value = (*color, 1)
    emit.inputs["Strength"].default_value = strength
    nt.links.new(emit.outputs[0], out.inputs["Surface"])
    return mat


def helix(radius: float, turns: float, height: float, phase: float, n: int = 480) -> list[Vector]:
    pts = []
    for i in range(n):
        t = i / (n - 1)
        ang = t * turns * math.tau + phase
        pts.append(Vector((radius * math.cos(ang), radius * math.sin(ang), (t - 0.5) * height)))
    return pts


def make_tube(name: str, points: list[Vector], radius: float, mat: bpy.types.Material) -> bpy.types.Object:
    curve = bpy.data.curves.new(name, "CURVE")
    curve.dimensions = "3D"
    curve.bevel_depth = radius
    curve.bevel_resolution = 8
    curve.resolution_u = 12
    curve.fill_mode = "FULL"
    spline = curve.splines.new("POLY")
    spline.points.add(len(points) - 1)
    for i, p in enumerate(points):
        spline.points[i].co = (p.x, p.y, p.z, 1)
    obj = bpy.data.objects.new(name, curve)
    scene.collection.objects.link(obj)
    obj.data.materials.append(mat)
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    bpy.ops.object.convert(target="MESH")
    obj = bpy.context.active_object
    bpy.ops.object.shade_smooth()
    obj.select_set(False)
    return obj


amber = emission_mat("Amber", (1.0, 0.62, 0.22), 18)
teal = emission_mat("Teal", (0.25, 0.85, 0.78), 16)
rung_mat = emission_mat("Rung", (0.98, 0.90, 0.78), 8)

turns, height, radius = 4.6, 8.2, 1.05
make_tube("StrandA", helix(radius, turns, height, 0), 0.07, amber)
make_tube("StrandB", helix(radius, turns, height, math.pi), 0.07, teal)

for i in range(32):
    t = (i + 0.5) / 32
    ang = t * turns * math.tau
    z = (t - 0.5) * height
    a = Vector((radius * math.cos(ang), radius * math.sin(ang), z))
    b = Vector((radius * math.cos(ang + math.pi), radius * math.sin(ang + math.pi), z))
    mid = (a + b) / 2
    bpy.ops.mesh.primitive_cylinder_add(vertices=16, radius=0.032, depth=(a - b).length * 0.92, location=mid)
    cyl = bpy.context.active_object
    cyl.name = f"Rung{i:02d}"
    cyl.rotation_mode = "QUATERNION"
    cyl.rotation_quaternion = (b - a).to_track_quat("Z", "Y")
    cyl.data.materials.append(rung_mat)
    bpy.ops.object.shade_smooth()

cam = bpy.data.cameras.new("Cam")
cam.lens = 45
cam.dof.use_dof = True
cam.dof.focus_distance = 8.4
cam.dof.aperture_fstop = 2.0
cam_obj = bpy.data.objects.new("Cam", cam)
scene.collection.objects.link(cam_obj)
scene.camera = cam_obj
cam_obj.location = (5.4, -7.6, 1.8)
cam_obj.rotation_euler = (math.radians(74), math.radians(3), math.radians(34))

for loc, color, energy, size in (
    ((4.0, -3.2, 3.4), (1.0, 0.7, 0.32), 400, 2.4),
    ((-3.4, 3.6, -1.6), (0.2, 0.9, 0.8), 320, 2.8),
    ((0.4, -5.5, 0.2), (1.0, 0.95, 0.88), 90, 4.0),
):
    light = bpy.data.lights.new(name=f"L{energy}", type="AREA")
    light.energy = energy
    light.color = color
    light.size = size
    obj = bpy.data.objects.new(light.name, light)
    obj.location = loc
    scene.collection.objects.link(obj)

world = bpy.data.worlds.new("World")
scene.world = world
world.use_nodes = True
bg = world.node_tree.nodes["Background"]
bg.inputs[0].default_value = (0.004, 0.006, 0.012, 1)
bg.inputs[1].default_value = 0.2

scene.render.engine = "BLENDER_EEVEE"
scene.render.film_transparent = True
scene.render.resolution_x = 1920
scene.render.resolution_y = 1080
scene.render.filepath = str(OUT)
scene.render.image_settings.file_format = "PNG"
scene.render.image_settings.color_mode = "RGBA"
if hasattr(scene, "eevee"):
    scene.eevee.taa_render_samples = 96

scene.use_nodes = True
tree = scene.node_tree
tree.nodes.clear()
rl = tree.nodes.new("CompositorNodeRLayers")
glare = tree.nodes.new("CompositorNodeGlare")
glare.glare_type = "FOG_GLOW"
if hasattr(glare, "quality"):
    glare.quality = "HIGH"
if "threshold" in glare.inputs:
    glare.inputs["threshold"].default_value = 0.4
comp = tree.nodes.new("CompositorNodeComposite")
tree.links.new(rl.outputs["Image"], glare.inputs["Image"])
tree.links.new(glare.outputs["Image"], comp.inputs["Image"])

bpy.ops.render.render(write_still=True)
print(f"Wrote {OUT}")
