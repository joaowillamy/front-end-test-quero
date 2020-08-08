export const getStorageValue = (key, initialState = "") => {
  try {
    const storageValue = localStorage.getItem(key);

    return storageValue ? JSON.parse(storageValue) : initialState;
  } catch (error) {
    console.error("error: ", error);
  }
};

export const setStorageValue = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("error: ", error);
  }
};
