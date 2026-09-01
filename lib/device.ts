/** Portrait phones, plus landscape phones (short coarse-pointer screens). */
export const PHONE_MEDIA =
  "(max-width: 767px), (hover: none) and (pointer: coarse) and (max-height: 520px)";

export const DEVICE_BOOT = `(function(){try{var q=window.matchMedia(${JSON.stringify(PHONE_MEDIA)});var apply=function(){document.documentElement.dataset.device=q.matches?"phone":"desktop"};apply();q.addEventListener("change",apply);}catch(e){}})();`;

export function matchPhone(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(PHONE_MEDIA).matches;
}
