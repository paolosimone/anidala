import { useEffect, useState } from "react";

export enum Browser {
  Chrome,
  Edge,
  Firefox,
  Opera,
  Safari,
  Unknown,
}

export function useBrowser(): Optional<Browser> {
  const [browser, setBrowser] = useState<Optional<Browser>>(undefined);
  useEffect(() => setBrowser(detectBrowser()), []);
  return browser;
}

// https://stackoverflow.com/a/26358856
function detectBrowser(): Browser {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    return Browser.Opera;
  }
  if (navigator.userAgent.indexOf("Edg") != -1) {
    return Browser.Edge;
  }
  if (navigator.userAgent.indexOf("Chrome") != -1) {
    return Browser.Chrome;
  }
  if (navigator.userAgent.indexOf("Safari") != -1) {
    return Browser.Safari;
  }
  if (navigator.userAgent.indexOf("Firefox") != -1) {
    return Browser.Firefox;
  }
  return Browser.Unknown;
}
