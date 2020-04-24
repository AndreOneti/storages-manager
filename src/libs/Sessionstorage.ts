export function sessionGet(key: string): string | null {
  if (sessionStorage === undefined || sessionStorage === null) {
    return '';
  }
  return sessionStorage.getItem(key);
}

export function sessionSet(key: string, value: string): void {
  if (sessionStorage === undefined || sessionStorage === null) {
    return;
  }
  sessionStorage.setItem(key, value);
}

export function sessionClear(): void {
  if (sessionStorage === undefined || sessionStorage === null) {
    return;
  }
  sessionStorage.clear();
}

export function sessionRemove(key: string): void {
  if (sessionStorage === undefined || sessionStorage === null) {
    return;
  }
  sessionStorage.removeItem(key);
}

export function sessionKey(index: number): string | null {
  if (sessionStorage === undefined || sessionStorage === null) {
    return null;
  }
  return sessionStorage.key(index);
}
