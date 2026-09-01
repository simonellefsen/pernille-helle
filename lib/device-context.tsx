"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { PHONE_MEDIA } from "./device";

const DeviceContext = createContext({ isPhone: false });

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(PHONE_MEDIA);
    const apply = () => {
      const on = query.matches;
      setIsPhone(on);
      document.documentElement.dataset.device = on ? "phone" : "desktop";
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return <DeviceContext.Provider value={{ isPhone }}>{children}</DeviceContext.Provider>;
}

export function useIsPhone() {
  return useContext(DeviceContext).isPhone;
}
