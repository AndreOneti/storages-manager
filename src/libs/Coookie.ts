export function getAllCookies(): string | null {
  if (document === undefined || document === null) {
    return null;
  }
  return document.cookie;
}

export function getCookie(key: string): string | null {
  if (document === undefined || document === null) {
    return null;
  }
  var nameEQ = `${key}=`;
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function setCookie(key: string, value: string): boolean | null {
  if (document === undefined || document === null) {
    return null;
  }
  document.cookie = `${key}=${value || ""}; path=/`;
  return true;
}

export function deleteCookie(key: string): boolean | null {
  if (document === undefined || document === null) {
    return null;
  }
  document.cookie = `${key}=; Max-Age=-99999999;`;
  return true;
}

export function deleteAllCookies(): void {
  var res = document.cookie;
  var multiple = res.split(";");
  for (var i = 0; i < multiple.length; i++) {
    var [key, value] = multiple[i].split("=");
    document.cookie = `${key}=${value}; expires = Thu, 01 Jan 1970 00:00:00 UTC`;
  }
}

export function checkCookie(key: string): boolean {
  if (document === undefined || document === null) {
    return false;
  }
  if (getCookie(key) == '' || getCookie(key) == null) return false;
  return true;
}
