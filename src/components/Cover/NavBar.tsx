import { useState } from "react";
import classNames from "classnames";
import { Icon } from "@/components";
import { useTheme } from "@/hooks";

export type NavItem = {
  id: string;
  label: string;
};

export type NavBarProps = Props<{
  items: NavItem[];
}>;

export function NavBar({ className, items }: NavBarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [{ fonts }] = useTheme();

  return (
    <div
      className={classNames(
        "flex flex-col items-stretch p-2 text-overlay rounded-bl-md",
        { "bg-primary/80": isOpen },
        className,
      )}
    >
      <button
        className="self-end w-8 h-8 p-0.5 fill-overlay"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? <Icon.Close /> : <Icon.Menu />}
      </button>

      {isOpen &&
        items.map((item) => (
          <NavBarButton
            className={classNames("my-0.5 text-lg", fonts.heading)}
            key={item.id}
            item={item}
            onNavigated={() => setIsOpen(false)}
          />
        ))}
    </div>
  );
}

type NavBarButtonProps = Props<{
  item: NavItem;
  onNavigated: () => void;
}>;

function NavBarButton({
  className,
  item,
  onNavigated,
}: NavBarButtonProps): JSX.Element {
  return (
    <button
      className={className}
      onClick={() => {
        goToAnchor(item.id);
        onNavigated();
      }}
      aria-label={item.label}
    >
      {item.label}
    </button>
  );
}

function goToAnchor(id: string) {
  const hash = `#${id}`;

  if (window.location.hash == hash) {
    // url already set, trigger scroll manually
    document.getElementById(id)?.scrollIntoView();
    return;
  }

  // set url
  window.location.hash = hash;
}
