export function copyToClipBoard(text: string): boolean | null {
  if (document === undefined || document === null) return null;

  let isOk = false;

  let textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    let successful = document.execCommand('copy');
    let msg = successful ? 'successful' : 'unsuccessful';
    isOk = successful ? true : false;
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    isOk = false;
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
  return isOk;
}
