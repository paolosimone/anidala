import { useTheme, useBrowser, Browser } from "@/hooks";
import classNames from "classnames";
import { Icon } from "@/components";
import { Countdown } from "./Countdown";
import { NavBar, NavItem } from "./NavBar";

const WEDDING_DATE = new Date(
  new Date().setDate(new Date().getDate() + 1_000_000),
);

export type CoverProps = Props<{
  id: string;
  scrollToRef: string;
  navBarItems: NavItem[];
}>;

export function Cover({
  id,
  scrollToRef,
  navBarItems,
}: CoverProps): JSX.Element {
  const [{ fonts }] = useTheme();
  const browser = useBrowser();
  return (
    <div
      id={id}
      className={classNames(
        "bg-cover bg-left bg-no-repeat h-screen relative",
        browser == Browser.Safari ? "bg-scroll" : "bg-fixed",
      )}
      style={{ backgroundImage: "url(images/cover.jpg)" }}
    >
      <iframe
        className="absolute left-0 top-0 z-10 p-2"
        src="https://ghbtns.com/github-btn.html?user=paolosimone&repo=anidala&type=star&size=large"
        title="GitHub"
      />

      <NavBar className="absolute right-0 top-0 z-10" items={navBarItems} />

      <div className="absolute bg-black/20 h-full w-full flex flex-col items-center">
        <div className="grow flex flex-col items-center justify-around lg:justify-start lg:mt-20">
          <div
            className={classNames(
              "flex flex-col items-center mb-20 lg:mb-0 text-overlay",
              fonts.heading,
            )}
          >
            <h1 className="text-4xl my-2">Padmé & Anakin</h1>
            <h3 className="text-2xl">A long time ago</h3>
            <h2 className="text-xl">in a galaxy far far away...</h2>
          </div>

          <Countdown className="mt-8 min-h-[4rem]" target={WEDDING_DATE} />
        </div>
        <a
          href={scrollToRef}
          className="h-12 w-14 mb-12 fill-overlay animate-bounce"
          aria-label="Scroll"
        >
          <Icon.Expand />
        </a>
      </div>
    </div>
  );
}
