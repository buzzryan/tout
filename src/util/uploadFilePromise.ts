import { RefObject } from "react";

// onFileInput is an async function that watches the file input event on the input element (fileInputRef).
export function onFileInput(
  fileInputRef: RefObject<HTMLInputElement>,
): Promise<File | null> {
  return new Promise<File | null>((resolve) => {
    if (!fileInputRef.current) {
      return resolve(null);
    }
    fileInputRef.current.click();
    fileInputRef.current.onchange = (event: Event) => {
      const files = (event.target as HTMLInputElement)?.files;
      return !!files && files.length > 0 ? resolve(files[0]) : resolve(null);
    };
  });
}
