import classNames from "classnames";
import model from "./Model";
import { useTheme } from "@/hooks";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "@/components";
import Avatar from "avataaars";

export enum GuestState {
  Pending,
  Confirmed,
  Rejected,
  Errored,
}

export type GuestCardProps = Props<{
  guest: model.Guest;
  onStateUpdate: (state: GuestState) => void;
}>;

export function GuestCard({ className, guest, onStateUpdate }: GuestCardProps) {
  const [{ fonts }] = useTheme();
  const intoleranceInput = useRef<Nullable<HTMLInputElement>>(null);
  const [intolerance, setIntolerance] = useState<string>("");
  const [state, setState] = useState<GuestState>(GuestState.Pending);
  useEffect(() => onStateUpdate(state), [onStateUpdate, state]);

  function sendReply(confirmed: boolean) {
    // build and send the reply to your backend
    console.info(
      `Reply sent! guest:${guest.name} confirmed:${confirmed} intolerance:${
        intolerance || "none"
      }`,
    );
    setState(confirmed ? GuestState.Confirmed : GuestState.Rejected);
  }

  function onIntoleranceChange(e: FormEvent<HTMLInputElement>) {
    setIntolerance((e.target as HTMLInputElement).value.trim());
    setState(GuestState.Pending);
  }

  const avatarProps = useMemo(
    () =>
      guest.avatar &&
      model.Avatar.toObject(guest.avatar as model.Avatar, { enums: String }),
    [guest],
  );

  return (
    <div
      className={classNames(
        "h-full flex flex-col px-4 pt-2 pb-10 text-foreground",
        className,
      )}
    >
      {state === GuestState.Errored && (
        <div className="grow text-center mt-2 bg-red-600 text-red-50">
          Error!
        </div>
      )}

      <div
        className={classNames(
          "grow flex flex-col justify-center text-center text-2xl text-primary",
          fonts.heading,
        )}
      >
        {guest.name}
      </div>

      {guest.avatar && (
        <Avatar
          className="w-24 h-24 self-center"
          avatarStyle="Transparent"
          {...avatarProps}
        />
      )}

      <label className="my-2 text-center">Food intolerance?</label>
      <input
        ref={intoleranceInput}
        type="text"
        onChange={onIntoleranceChange}
        value={intolerance}
        className="outline outline-1 outline-gray-500 focus:outline-primary caret-primary rounded py-1 px-2"
        placeholder="eg. blue milk intolerant..."
      />

      <label className="mt-4 mb-2 text-center">Will you join?</label>
      <div className="flex justify-around">
        <RejectButton
          checked={state === GuestState.Rejected}
          onClick={() => sendReply(false)}
        />

        <ConfirmButton
          checked={state === GuestState.Confirmed}
          onClick={() => sendReply(true)}
        />
      </div>
    </div>
  );
}

type ConfirmButtonProps = Props<{
  checked: boolean;
  onClick: () => void;
}>;

function ConfirmButton({ checked, onClick }: ConfirmButtonProps): JSX.Element {
  return (
    <button
      className="h-10 w-10 p-0.5 fill-green-700"
      disabled={checked}
      onClick={onClick}
      aria-label="Confirm"
    >
      {checked ? <Icon.CheckFill /> : <Icon.Check />}
    </button>
  );
}

type RejectButtonProps = Props<{
  checked: boolean;
  onClick: () => void;
}>;

function RejectButton({ checked, onClick }: RejectButtonProps): JSX.Element {
  return (
    <button
      className="h-10 w-10 p-0.5 fill-red-700"
      disabled={checked}
      onClick={onClick}
      aria-label="Reject"
    >
      {checked ? <Icon.CancelFill /> : <Icon.Cancel />}
    </button>
  );
}
