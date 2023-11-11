import classNames from "classnames";
import { useMemo, useState } from "react";
import model from "./Model";
import { QrCodeScanner } from "./QrcodeScanner";
import { Viewer } from "./Viewer";

export type InviteProps = BaseProps;

export function Invite({ className }: InviteProps): JSX.Element {
  const [invite, setInvite] = useState<Nullable<model.Invite>>(null);
  const [state, setState] = useState<ReaderState>(ReaderState.Empty);

  const scannerProps = useMemo(
    () => ({
      onSuccess: (payload: string) => {
        try {
          const bytes = Buffer.from(payload, "base64").valueOf();
          setInvite(model.Invite.decode(bytes));
        } catch (e) {
          console.error(e);
          setState(ReaderState.Errored);
        }
      },
      onFailure: (error: string) => {
        console.error(error);
        setState(ReaderState.Errored);
      },
    }),
    [],
  );

  return (
    <div className={classNames("flex flex-col justify-center", className)}>
      {!invite && (
        <div className="flex flex-col w-64 bg-background rounded-lg shadow shadow-white/60 ">
          <QrCodeScanner
            className="h-64 p-2 bg-background fill-primary rounded-t-lg"
            {...scannerProps}
          />
          <div className="bg-background text-primary rounded-b-lg pb-2 text-center">
            {STATE_MESSAGE[state]}
          </div>
        </div>
      )}

      {invite && (
        <Viewer
          className="w-72"
          invite={invite}
          onAllReplied={() => {
            setInvite(null);
            setState(ReaderState.Done);
          }}
        />
      )}
    </div>
  );
}

enum ReaderState {
  Empty,
  Errored,
  Showing,
  Done,
}

const STATE_MESSAGE = {
  [ReaderState.Empty]: "Upload your invite!",
  [ReaderState.Errored]: "Error!",
  [ReaderState.Showing]: "...",
  [ReaderState.Done]: "Thanks for answering!",
};
