export const getFromLS = <T>(key: string) => {
  const data = localStorage.getItem(key);
  const items = data ? JSON.parse(data) : [];

  return items as T;
};
