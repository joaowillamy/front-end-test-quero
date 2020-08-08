import { useState, useEffect } from "react";

import { getStorageValue, setStorageValue } from "../utils/storage";

export const usePersistedState = (key, initialState = []) => {
  const [state, setState] = useState(() => getStorageValue(key, initialState));

  useEffect(() => {
    setStorageValue(key, state);
  }, [key, state]);

  return [state, setState];
};
