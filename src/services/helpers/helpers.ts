export const retrieveLocalStorageData = <T>(key: string) => {
  const pairJSON = localStorage.getItem(key) || "";

  const pair = JSON.parse(pairJSON);

  if (!pair) {
    return {} as T;
  }

  return pair as T;
};
