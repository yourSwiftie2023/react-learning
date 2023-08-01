import type { useEffect, useLayoutEffect } from "react";

type HookType = typeof useEffect | typeof useLayoutEffect;

const record = new WeakSet();

const useOnceEffect: (hook: HookType) => HookType =
  (hook) => (effect, deps) => {
    hook(() => {
      if (!record.has(effect)) {
        record.add(effect);
        effect();
      }
    }, deps);
  };

export default useOnceEffect;
