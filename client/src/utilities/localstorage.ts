export function clearStorage() {
  localStorage.clear();
}

export function getItemFromStorage(key: string) {
  if (!key && !key.trim().length) {
    return false;
  }

  try {
    JSON.parse(localStorage.getItem(key));
    return true;
  } catch (err) {
    console.error(`Error getting item ${key} from localstorage`, err);
    return false;
  }
}

export function storeItem(key: string, item: object) {
  if (!key && !key.trim().length) {
    return false;
  }

  try {
    localStorage.setItem(key, JSON.stringify(item));
    return true;
  } catch (err) {
    console.error(`Error storing item ${key} to localStorage`, err);
    return false;
  }
}

export function removeItemFromStorage(key: string) {
  if (!key && !key.trim().length) {
    return false;
  }

  try {
    localStorage.removeItem(key);
    return true;
  } catch (err) {
    console.error(`Error removing item ${key} from localstorage`, err);
    return false;
  }
}
