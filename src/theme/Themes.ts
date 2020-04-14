// Only some things should go on the theme, these are variables I want to be consistent across
// the application, that may be used by multiple components. It will include almost all colors,
// most sizing variables and fonts

// certain things, like line-height, which I will set globally, aren't really theme dependent

interface IThemeColors {
  background01: string;
  background02: string;
  background03: string;
  text01: string;
  interactive01: string;
  linkHover: string;
}

interface IThemeBorders {
  strongBorder: string;
  subtleBorder: string;
  borderRadius: string;
}

interface IThemeSpacings {
  spacing1: string;
  spacing2: string;
  spacing3: string;
  spacing4: string;
}

interface IThemeText {
  headingSize: string;
  paragraphSize: string;
  fontFamily: string;
}

interface ITheme extends IThemeColors, IThemeBorders, IThemeSpacings, IThemeText {}

const ThemeSpacings: IThemeSpacings = {
  spacing1: '1rem',
  spacing2: '2rem',
  spacing3: '3rem',
  spacing4: '4rem',
};

const ThemeText: IThemeText = {
  headingSize: '32px',
  paragraphSize: '16px',
  fontFamily: '"Roboto", sans-serif',
};

const LightThemeColors: IThemeColors = {
  background01: '#ffffff',
  background02: '#f4f4f4',
  background03: '#8d8d8d',
  text01: '#000000',
  interactive01: '#8c1809',
  linkHover: '#e5e5e5',
};

const LightThemeBorders: IThemeBorders = {
  strongBorder: 'solid 1px #000000',
  subtleBorder: 'solid 1px #e0e0e0',
  borderRadius: '0.25rem',
};

const DarkThemeColors: IThemeColors = {
  background01: '#161616',
  background02: '#262626',
  background03: '#6f6f6f',
  text01: '#ffffff',
  interactive01: '#ffa69a',
  linkHover: '#353535',
};

const DarkThemeBorders: IThemeBorders = {
  strongBorder: 'solid 1px #ffffff',
  subtleBorder: 'solid 1px #393939',
  borderRadius: '0.25rem',
};

interface IThemedProps {
  theme: ITheme;
}

const LightTheme: ITheme = {
  ...LightThemeColors,
  ...LightThemeBorders,
  ...ThemeSpacings,
  ...ThemeText,
};

const DarkTheme: ITheme = {
  ...DarkThemeColors,
  ...DarkThemeBorders,
  ...ThemeSpacings,
  ...ThemeText,
};

export { IThemedProps, ITheme, DarkTheme, LightTheme };
