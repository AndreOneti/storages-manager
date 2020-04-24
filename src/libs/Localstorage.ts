export function localGet(key: string): string | null {
  if (localStorage === undefined || localStorage === null) {
    return '';
  }
  return localStorage.getItem(key);
}

export function localSet(key: string, value: string): void {
  if (localStorage === undefined || localStorage === null) {
    return;
  }
  localStorage.setItem(key, value);
}

export function localClear(): void {
  if (localStorage === undefined || localStorage === null) {
    return;
  }
  localStorage.clear();
}

export function localRemove(key: string): void {
  if (localStorage === undefined || localStorage === null) {
    return;
  }
  localStorage.removeItem(key);
}

export function localKey(index: number): string | null {
  if (localStorage === undefined || localStorage === null) {
    return null;
  }
  return localStorage.key(index);
}
