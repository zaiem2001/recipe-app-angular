export const saveToLocalStorage = (storageData: {
  key: string;
  value: any;
}) => {
  const { key, value } = storageData;
  localStorage.setItem(key, JSON.stringify(value));
};

export const getDataFromLocalStorage = (key: string) =>
  JSON.parse(localStorage.getItem(key));

export const removeDataFromLocalStorage = (key: string) =>
  localStorage.removeItem(key);
