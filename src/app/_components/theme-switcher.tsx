"use client";

import styles from "./switch.module.css";
import { memo, useEffect, useState } from "react";

declare global {
  var updateDOM: () => void;
}

type ColorSchemePreference = "system" | "dark" | "light";

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes: ColorSchemePreference[] = ["system", "dark", "light"];

/** function to be injected in script tag for avoiding FOUC (Flash of Unstyled Content) */
export const NoFOUCScript = (storageKey: string) => {
  /* can not use outside constants or function as this script will be injected in a different context */
  const [SYSTEM, DARK, LIGHT] = ["system", "dark", "light"];

  /** Modify transition globally to avoid patched transitions */
  const modifyTransition = () => {
    const css = document.createElement("style");
    css.textContent = "*,*:after,*:before{transition:none !important;}";
    document.head.appendChild(css);

    return () => {
      /* Force restyle */
      getComputedStyle(document.body);
      /* Wait for next tick before removing */
      setTimeout(() => document.head.removeChild(css), 1);
    };
  };

  const media = matchMedia(`(prefers-color-scheme: ${DARK})`);

  /** function to add remove dark class */
  window.updateDOM = () => {
    const restoreTransitions = modifyTransition();
    const mode = localStorage.getItem(storageKey) ?? SYSTEM;
    const systemMode = media.matches ? DARK : LIGHT;
    const resolvedMode = mode === SYSTEM ? systemMode : mode;
    const classList = document.documentElement.classList;
    if (resolvedMode === DARK) classList.add(DARK);
    else classList.remove(DARK);
    // Only set data-mode after React has hydrated to avoid mismatch
    if (window.ReactHydrated) {
      document.documentElement.setAttribute("data-mode", mode);
    }
    restoreTransitions();
  };
  
  // Don't run updateDOM immediately - wait for React
  media.addEventListener("change", window.updateDOM);
};

let updateDOM: () => void;

/**
 * Switch button to quickly toggle user preference.
 */
const Switch = () => {
  // Get initial mode from localStorage if available, otherwise "system"
  const getInitialMode = (): ColorSchemePreference => {
    if (typeof window === "undefined") return "system";
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored && modes.includes(stored as ColorSchemePreference)) 
      ? (stored as ColorSchemePreference) 
      : "system";
  };

  const [mode, setMode] = useState<ColorSchemePreference>(getInitialMode);

  useEffect(() => {
    // Mark that React has hydrated
    window.ReactHydrated = true;
    
    // store global functions to local variables to avoid any interference
    updateDOM = window.updateDOM;
    
    // Now it's safe to run updateDOM and set data-mode
    updateDOM();
    
    /** Sync the tabs */
    const handleStorageChange = (e: StorageEvent): void => {
      if (e.key === STORAGE_KEY && e.newValue) {
        setMode(e.newValue as ColorSchemePreference);
      }
    };
    
    addEventListener("storage", handleStorageChange);
    
    return () => {
      removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, mode);
      updateDOM && updateDOM();
    }
  }, [mode]);

  /** toggle mode */
  const handleModeSwitch = () => {
    const index = modes.indexOf(mode);
    setMode(modes[(index + 1) % modes.length]);
  };

  return (
    <button
      suppressHydrationWarning
      className={styles.switch}
      onClick={handleModeSwitch}
    />
  );
};

const Script = memo(() => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')`,
    }}
  />
));

/**
 * This component which applies classes and transitions.
 */
export const ThemeSwitcher = () => {
  return (
    <>
      <Script />
      <Switch />
    </>
  );
};

// Add global type declaration
declare global {
  var ReactHydrated: boolean;
}