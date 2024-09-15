export const saveInLS = <T>(items: T, key: string) => {
  const json = JSON.stringify(items);
  localStorage.setItem(key, json);
};
