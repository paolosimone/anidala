import { Audiowide, Exo_2 } from "next/font/google";
import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import tinycolor from "tinycolor2";

/* Color */

export type Color = string;

export type Palette = {
  background: Color;
  foreground: Color;
  overlay: Color;
  primary: Color;
};

// palette keys can be used in tailwind classes
export type PaletteKey = keyof Palette;

export const LightPalette: Palette = {
  background: "#fafafa",
  foreground: "#404040",
  overlay: "#e5e5e5",
  primary: "#1b6111",
};

/* Text */

export type Classname = string;

export type Typography = {
  heading: Classname;
  paragraph: Classname;
};

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });
const exo2 = Exo_2({ weight: "400", subsets: ["latin"] });

export const HandwrittenTypography: Typography = {
  heading: audiowide.className,
  paragraph: exo2.className,
};

/* Theme */

export type Theme = {
  colors: Palette;
  fonts: Typography;
};

export const WeddingTheme: Theme = {
  colors: LightPalette,
  fonts: HandwrittenTypography,
};

type ThemeState = {
  theme: Theme;
  setTheme: Dispatch<Theme>;
};

const ThemeContext = createContext<ThemeState>({
  theme: WeddingTheme,
  setTheme: (_: Theme) => {},
});

export function ThemeContextProvider(props: BaseProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(WeddingTheme);

  // apply theme on first render and every time it's updated
  useEffect(() => applyPalette(theme.colors), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props?.children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): [Theme, Dispatch<Theme>] {
  const { theme, setTheme } = useContext(ThemeContext);
  return [theme, setTheme];
}

function applyPalette(palette: Palette) {
  const root: Nullable<HTMLElement> = document.querySelector(":root");
  if (!root) return;

  for (const [key, hex] of Object.entries(palette)) {
    root.style.setProperty(
      toCssVariable(key as PaletteKey),
      toTailwindRgb(hex),
    );
  }
}

function toCssVariable(paletteKey: PaletteKey): string {
  const hyphenName = paletteKey.replace(
    /[A-Z]/g,
    (capital) => `-${capital.toLowerCase()}`,
  );
  return `--${hyphenName}`;
}

function toTailwindRgb(hexColor: Color): string {
  const rgb = tinycolor(hexColor).toRgb();
  return `${rgb.r} ${rgb.g} ${rgb.b}`;
}
