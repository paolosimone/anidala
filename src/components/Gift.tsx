import { useReactiveRef, useTheme } from "@/hooks";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Icon } from ".";
import styles from "./Gift.module.css";

export type GiftProps = Props<{
  id: string;
}>;

export function Gift({ id }: GiftProps): JSX.Element {
  const [{ fonts }] = useTheme();

  return (
    <div id={id} className="flex flex-col items-center">
      <h1 className={classNames("text-4xl text-primary", fonts.heading)}>
        <b>Wedding Registry</b>
      </h1>

      <p className={classNames("mx-8 mt-4 text-center", fonts.paragraph)}>
        Your presence is the most cherished gift we could ever hope for.
        However, if you feel inclined to make a gesture, we would be grateful
        for credits to fund our honeymoon.
      </p>

      <Iban className="mt-4" />
    </div>
  );
}

enum SpaceshipState {
  Home,
  TakeOff,
  Landing,
}

type IbanProps = BaseProps;

function Iban({ className }: IbanProps): JSX.Element {
  const [{ fonts }] = useTheme();

  const [airplane, airplaneRef] = useReactiveRef<HTMLDivElement>();
  const [state, setState] = useState(SpaceshipState.Home);

  const airplaneAnimation = {
    "cursor-pointer": state === SpaceshipState.Home,
    [styles["take-off"]]: state === SpaceshipState.TakeOff,
    [styles["landing"]]: state === SpaceshipState.Landing,
  };

  useEffect(() => {
    const onAnimationEnd = () => {
      if (state === SpaceshipState.Landing) {
        setState(SpaceshipState.Home);
      }
    };

    airplane?.addEventListener("animationend", onAnimationEnd);
    return () => airplane?.removeEventListener("animationend", onAnimationEnd);
  }, [airplane, state]);

  return (
    <div
      className={classNames(
        "flex flex-col justify-center items-center relative w-72 h-72 m-2 rounded-xl shadow-md",
        className,
      )}
    >
      <div className="flex flex-col justify-center items-center grow">
        <p className={classNames("text-primary text-lg", fonts.heading)}>
          Holder
        </p>
        <p className={classNames("text-base", fonts.paragraph)}>
          Anakin Skywalker
        </p>
        <p className={classNames("text-base", fonts.paragraph)}>
          Padmé Amidala
        </p>
        <p className={classNames("text-primary text-lg mt-2", fonts.heading)}>
          Account Number
        </p>
        <span className={classNames("text-base", fonts.paragraph)}>
          d̶͔̘͑̆à̶̯ṯ̶̒̕a̵̺̼͒ ̷̲͘͝b̴̖̱̓à̷̺̱͆n̶̳̖̔̔k̴̭̏ ̸͍̀c̵̱̒̌o̴̳̓̔r̵͖̄ŗ̶̖̏u̷̢͒̓p̷̝̌͒t̷̗̐̾e̵̢̞̋d̸̴̞̥͇̽̌
        </span>
      </div>

      <HomeButton onClick={() => setState(SpaceshipState.Landing)} />

      <div
        ref={airplaneRef}
        className={classNames(
          "absolute flex flex-col items-center z-10 w-full h-full p-4 bg-background fill-primary rounded-xl",
          airplaneAnimation,
        )}
        onClick={() =>
          state === SpaceshipState.Home && setState(SpaceshipState.TakeOff)
        }
      >
        <Spaceship
          className={classNames("grow max-w-full", {
            "animate-expand": state === SpaceshipState.Home,
          })}
        />

        <div className={classNames("h-8 text-primary", fonts.paragraph)}>
          {state === SpaceshipState.Home && "Make the spaceship take off!"}
        </div>
      </div>
    </div>
  );
}

function Spaceship({ className }: BaseProps): JSX.Element {
  return (
    <svg
      className={className}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 640"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g transform="translate(1280,640) scale(-0.1,-0.1) " stroke="none">
        <path d="M11120 5115 c0 -8 -4 -15 -10 -15 -5 0 -10 5 -10 10 0 15 -383 13 -398 -2 -7 -7 -12 -8 -12 -2 0 12 -251 -1 -392 -21 -110 -16 -168 -31 -168 -45 0 -14 480 -75 543 -69 12 1 32 -2 45 -7 20 -9 -5 -24 -194 -117 -213 -106 -218 -108 -271 -102 -42 4 -55 2 -59 -10 -8 -21 -94 -21 -94 0 0 13 -32 15 -227 15 -221 0 -294 -7 -316 -29 -18 -18 -3 -23 95 -31 84 -6 75 -7 -89 -9 -101 0 -183 3 -183 7 0 4 -18 8 -41 7 -25 -1 -43 4 -46 12 -6 15 -70 18 -75 3 -1 -5 -39 -14 -83 -20 -44 -6 -88 -13 -97 -16 -30 -9 -20 -24 16 -24 35 0 35 0 24 -31 -7 -22 -7 -37 1 -55 10 -23 9 -24 -24 -24 -19 0 -35 -4 -35 -9 0 -12 88 -31 140 -31 21 0 45 -7 54 -15 20 -20 76 -20 76 1 0 12 9 15 45 11 25 -2 48 0 51 5 3 4 87 8 187 8 l182 0 -44 -21 c-52 -23 -46 -36 21 -41 l46 -3 -166 -97 c-92 -53 -262 -155 -378 -226 -209 -128 -212 -129 -285 -136 -324 -30 -438 -47 -440 -69 0 -7 0 -35 1 -63 1 -51 1 -52 -32 -58 -18 -3 -206 -31 -418 -61 -239 -35 -393 -61 -407 -71 -20 -12 -23 -23 -23 -73 l0 -59 -92 -6 c-51 -3 -189 -7 -307 -9 -184 -4 -216 -7 -226 -21 -11 -14 -49 -16 -353 -16 -445 0 -614 -22 -876 -112 -136 -46 -299 -125 -290 -139 4 -8 3 -9 -4 -5 -14 8 -21 5 -184 -92 -71 -42 -125 -79 -121 -85 3 -6 1 -7 -5 -3 -7 4 -20 2 -29 -4 -16 -10 -16 -11 -1 -6 9 3 18 0 21 -7 2 -8 45 9 121 46 65 31 125 57 134 57 9 -1 1 -7 -18 -14 -19 -7 -78 -34 -131 -60 -80 -39 -99 -45 -121 -37 -18 7 -198 -3 -614 -34 -324 -25 -922 -70 -1329 -100 -3275 -245 -3125 -233 -3164 -253 -35 -19 -36 -20 -39 -86 -3 -65 -1 -70 34 -116 45 -59 124 -120 208 -160 78 -37 261 -90 312 -90 87 0 142 -12 147 -31 4 -17 15 -19 81 -19 59 0 78 3 82 15 10 24 100 20 121 -5 15 -17 30 -20 95 -20 52 0 78 4 78 12 0 8 48 9 187 4 568 -20 830 -27 1433 -41 l665 -15 35 -24 c52 -34 289 -265 306 -297 29 -57 51 -61 369 -69 274 -8 1483 0 2468 16 l448 7 -12 -27 c-9 -19 -20 -26 -41 -26 -15 0 -28 -4 -28 -10 0 -5 15 -10 34 -10 19 0 38 -4 41 -10 4 -6 -7 -10 -25 -10 -21 0 -30 -4 -28 -12 3 -8 42 -19 94 -27 51 -8 92 -20 97 -28 11 -18 67 -17 67 1 0 21 10 22 194 25 l170 3 26 -32 26 -31 227 1 228 1 77 -43 77 -43 -90 -6 c-49 -4 -135 -7 -190 -8 -55 -1 -110 -4 -122 -7 -32 -9 -28 -33 6 -40 21 -5 27 -11 24 -24 -3 -12 2 -20 14 -23 77 -22 372 -36 956 -47 l518 -9 45 21 c36 18 44 27 44 50 0 15 -4 28 -8 28 -5 0 -16 6 -26 13 -16 12 -11 26 67 188 68 142 89 177 108 182 13 4 86 7 161 7 176 0 459 24 668 56 270 41 527 100 995 227 156 42 160 44 177 78 28 54 25 59 -44 60 l-63 2 80 8 c421 45 425 45 425 68 0 13 23 21 111 38 62 11 115 26 118 32 4 6 37 20 73 31 49 15 73 28 87 49 12 16 21 34 21 40 0 6 9 11 20 11 15 0 20 7 20 25 0 17 -6 25 -17 25 -20 0 -50 53 -33 58 5 2 10 14 10 27 0 14 7 25 20 28 16 4 20 14 20 46 0 34 -3 41 -20 41 -15 0 -20 7 -20 29 0 16 -5 31 -10 33 -17 5 13 58 33 58 11 0 17 8 17 25 0 18 -5 25 -20 25 -11 0 -20 6 -20 14 0 26 -66 73 -121 86 -30 7 -57 18 -61 24 -4 6 -40 18 -80 26 -49 10 -74 20 -76 31 -2 13 21 17 145 26 114 9 150 15 159 27 9 13 40 18 155 23 l143 6 38 38 c36 36 50 69 28 69 -5 0 -10 6 -10 14 0 8 -6 17 -12 20 -10 5 -10 7 0 12 6 3 12 12 12 20 0 8 7 14 15 14 10 0 15 11 15 35 0 24 -5 35 -15 35 -8 0 -15 7 -15 15 0 8 -4 15 -10 15 -17 0 -11 25 10 40 24 17 26 39 4 54 -12 9 -13 17 -5 39 18 47 13 75 -33 172 -58 121 -67 126 -298 159 -156 23 -515 66 -545 66 -7 0 -13 6 -13 14 0 9 -17 16 -52 20 -104 12 -394 36 -445 36 -29 0 -53 3 -53 6 0 18 522 717 708 949 l104 130 -213 3 c-147 2 -215 -1 -219 -9 -5 -7 -9 -5 -13 5 -6 14 -41 16 -292 16 -247 0 -285 -2 -285 -15z m-1900 -475 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m0 -90 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-2777 -1087 c-23 -2 -64 -2 -90 0 -26 2 -7 3 42 3 50 0 71 -1 48 -3z m546 -20 c-2 -24 -2 -25 -6 -6 -4 22 -8 23 -166 26 l-162 3 168 2 167 2 -1 -27z m-741 10 c-10 -2 -26 -2 -35 0 -10 3 -2 5 17 5 19 0 27 -2 18 -5z m-70 -10 c-10 -2 -26 -2 -35 0 -10 3 -2 5 17 5 19 0 27 -2 18 -5z m-75 -10 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m840 0 c-34 -4 -32 1 -47 -123 -2 -19 -3 -3 -2 36 2 39 6 76 10 83 4 6 22 10 39 9 l32 -1 -32 -4z m-890 -10 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-68 -13 c-11 -5 -29 -8 -40 -8 -16 0 -15 2 5 8 34 11 60 11 35 0z m-80 -20 c-11 -5 -27 -9 -35 -9 -9 0 -8 4 5 9 11 5 27 9 35 9 9 0 8 -4 -5 -9z m-70 -20 c-27 -12 -43 -12 -25 0 8 5 22 9 30 9 10 0 8 -3 -5 -9z m-55 -20 c-8 -5 -22 -9 -30 -9 -10 0 -8 3 5 9 27 12 43 12 25 0z m-60 -20 c-8 -5 -19 -10 -25 -10 -5 0 -3 5 5 10 8 5 20 10 25 10 6 0 3 -5 -5 -10z m-50 -20 c-8 -5 -19 -10 -25 -10 -5 0 -3 5 5 10 8 5 20 10 25 10 6 0 3 -5 -5 -10z m-45 -20 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12 23 12 15 0z m-36 -14 c-10 -9 -89 -46 -89 -41 0 6 72 44 84 45 5 0 7 -2 5 -4z m1296 -113 c-3 -20 -15 -37 -28 -43 -21 -11 -21 -11 -2 5 14 11 20 32 24 83 5 52 6 58 9 27 2 -21 1 -54 -3 -72z m-1420 49 c-16 -15 -125 -74 -125 -68 0 5 120 76 130 76 2 0 0 -4 -5 -8z m-150 -88 c-24 -18 -83 -50 -73 -39 10 10 81 54 88 54 3 0 -4 -7 -15 -15z m125 -18 c0 -3 -19 -26 -42 -53 l-41 -48 624 -3 c404 -1 641 1 673 8 27 6 51 9 53 6 2 -2 -19 -9 -47 -15 -36 -8 -256 -11 -682 -11 -346 0 -634 -3 -641 -7 -12 -7 3 13 63 85 35 41 40 46 40 38z m-210 -31 c0 -2 -10 -9 -22 -15 -22 -11 -22 -10 -4 4 21 17 26 19 26 11z m1590 -9 c0 -14 -86 -54 -95 -44 -3 3 13 10 35 17 23 7 44 19 47 27 7 18 13 18 13 0z" />
      </g>
    </svg>
  );
}

type HomeButtonProps = Props<{
  onClick: () => void;
}>;

function HomeButton({ onClick }: HomeButtonProps): JSX.Element {
  return (
    <button
      className="h-8 w-8 p-0.5 fill-primary"
      onClick={onClick}
      aria-label="Home"
    >
      <Icon.Home />
    </button>
  );
}
