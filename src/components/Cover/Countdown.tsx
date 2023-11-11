import { useTheme } from "@/hooks";
import { useEffect, useState } from "react";
import classNames from "classnames";

export type CountdownProps = Props<{
  target: Date;
}>;

export function Countdown(props: CountdownProps): JSX.Element {
  // first refresh is done in client to prevent mismatch with SSR
  // See: https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
  const [remaining, setRemaining] = useState(ZERO_COUNTDOWN_REMAINING);

  useEffect(() => {
    const refresh = () =>
      setRemaining(computeRemaining(props.target, new Date()));

    // first refresh on load
    refresh();

    // schedule refresh every second
    const timeout = setInterval(refresh, 1000);
    return () => clearInterval(timeout);
  }, [props.target, setRemaining]);

  return (
    <div
      className={classNames(
        "flex justify-center gap-3 opacity-90",
        props.className,
      )}
    >
      <CountdownDisplay
        value={remaining.days}
        unit={remaining.days == 1 ? "day" : "days"}
      />
      <CountdownDisplay
        value={remaining.hours}
        unit={remaining.hours == 1 ? "hour" : "hours"}
      />
      <CountdownDisplay
        value={remaining.minutes}
        unit={remaining.minutes == 1 ? "minute" : "minutes"}
      />
    </div>
  );
}

type CountdownDisplayProps = Props<{
  value: number;
  unit: string;
}>;

function CountdownDisplay(props: CountdownDisplayProps): JSX.Element {
  const [{ fonts }] = useTheme();
  return (
    <div
      className={classNames(
        "flex flex-col items-center h-full w-auto aspect-square rounded-full p-5 bg-primary text-overlay shadow shadow-primary/60",
        props.className,
      )}
    >
      <span className={classNames("my-auto text-md", fonts.paragraph)}>
        {props.value}
      </span>
      <span className={classNames("text-sm", fonts.heading)}>{props.unit}</span>
    </div>
  );
}

type CountdownRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ZERO_COUNTDOWN_REMAINING: CountdownRemaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;

function computeRemaining(from: Date, to: Date): CountdownRemaining {
  var remaining = Math.max(from.getTime() - to.getTime(), 0) / 1000;

  const dstOffset =
    (to.getTimezoneOffset() - from.getTimezoneOffset()) * SECONDS_IN_MINUTE;
  remaining += dstOffset;

  var [days, remaining] = [
    Math.floor(remaining / SECONDS_IN_DAY),
    remaining % SECONDS_IN_DAY,
  ];
  var [hours, remaining] = [
    Math.floor(remaining / SECONDS_IN_HOUR),
    remaining % SECONDS_IN_HOUR,
  ];
  var [minutes, seconds] = [
    Math.floor(remaining / SECONDS_IN_MINUTE),
    Math.floor(remaining % SECONDS_IN_MINUTE),
  ];

  return { days, hours, minutes, seconds };
}
