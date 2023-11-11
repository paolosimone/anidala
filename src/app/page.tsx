"use client";

import { Cover, NavItem, Honeymoon, Location, Gift, Rsvp } from "@/components";
import classNames from "classnames";
import { ThemeContextProvider, useTheme } from "@/hooks";

const NAV_ITEMS: NavItem[] = [
  { id: "location", label: "Location" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "gift", label: "Wedding Registry" },
  { id: "rsvp", label: "RSVP" },
];

export default function Home() {
  return (
    <ThemeContextProvider>
      <Main>
        <Cover id="" scrollToRef="#location" navBarItems={NAV_ITEMS} />
        <Location id="location" />
        <Honeymoon id="honeymoon" />
        <Gift id="gift" />
        <Rsvp id="rsvp" />
        <Footer />
      </Main>
    </ThemeContextProvider>
  );
}

function Main(props: BaseProps): JSX.Element {
  const [{ fonts }] = useTheme();
  return (
    <main
      className={classNames(
        "flex flex-col gap-8 bg-background text-foreground text-lg overflow-hidden",
        fonts.paragraph,
      )}
    >
      {props.children}
    </main>
  );
}

function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col items-center -mt-7 mb-1">
      <small>Made with &#128154; by Anakin&Padmé &copy; 7955 C.R.C.</small>
    </footer>
  );
}
