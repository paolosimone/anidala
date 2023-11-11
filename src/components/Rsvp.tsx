import { useTheme, useBrowser, Browser } from "@/hooks";
import classNames from "classnames";
import { Invite } from "./Invite";

export type RsvpProps = Props<{
  id: string;
}>;

export function Rsvp({ id }: RsvpProps): JSX.Element {
  const [{ fonts }] = useTheme();
  const browser = useBrowser();
  return (
    <div
      id={id}
      className={classNames(
        "h-screen bg-cover bg-right bg-no-repeat relative",
        browser == Browser.Safari ? "bg-scroll" : "bg-fixed",
      )}
      style={{ backgroundImage: "url(images/rsvp.jpg)" }}
    >
      <div className="absolute bg-black/30 h-full w-full flex flex-col place-items-center text-overlay">
        <h1 className={classNames("self-center text-4xl mt-4", fonts.heading)}>
          <b>RSVP</b>
        </h1>

        <div className={classNames("flex flex-col mx-8 mt-4", fonts.paragraph)}>
          <p className="text-center">You will join, right?</p>
        </div>

        <Invite className="grow" />
      </div>
    </div>
  );
}
