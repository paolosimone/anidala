import classNames from "classnames";
import { useReactiveRef } from "@/hooks";
import { BrowserQRCodeReader } from "@zxing/browser";
import { DecodeHintType, BarcodeFormat } from "@zxing/library";
import { useEffect, useState } from "react";
import { Icon } from "@/components";

export type QrCodeScannerProps = Props<{
  id?: string;
  onSuccess: (payload: string) => void;
  onFailure: (error: string) => void;
}>;

export function QrCodeScanner({
  id,
  className,
  onSuccess,
  onFailure,
}: QrCodeScannerProps) {
  // simplified: should use a file input instead
  const [qrcodeInput, ref] = useReactiveRef<HTMLButtonElement>();
  const [isScanning, setIsScanning] = useState<boolean>(false);

  useEffect(() => {
    if (!qrcodeInput) {
      return;
    }

    const hints = new Map([
      [DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.QR_CODE]],
    ]);
    const scanner = new BrowserQRCodeReader(hints);

    function onQrcodeUpload(_: Event) {
      if (!qrcodeInput) {
        return;
      }

      // mock invite for showcase
      const imageUrl = "invites/jedi.png";
      // const imageUrl = window.URL.createObjectURL(qrcodeInput.files[0]);

      setIsScanning(true);

      scanner
        .decodeFromImageUrl(imageUrl)
        .then((result) => onSuccess(result.getText()))
        .catch(onFailure)
        .finally(() => {
          window.URL.revokeObjectURL(imageUrl);
          qrcodeInput.value = "";
          setIsScanning(false);
        });
    }

    qrcodeInput?.addEventListener("click", onQrcodeUpload);
    return () => qrcodeInput.removeEventListener("click", onQrcodeUpload);
  }, [qrcodeInput, onSuccess, onFailure]);

  return (
    <div
      id={id}
      className={classNames("flex p-2 bg-background fill-primary", className)}
    >
      <label
        className={classNames("grow cursor-pointer", {
          "animate-pulse": !isScanning,
        })}
        htmlFor={`qrcode-scanner-input-${id}`}
      >
        <Icon.QrCodeScanner />
      </label>
      <button
        id={`qrcode-scanner-input-${id}`}
        style={{ display: "none" }}
        ref={ref}
      />
    </div>
  );
}
