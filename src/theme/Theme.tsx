import { ThemeProvider, useTheme } from 'emotion-theming';
import * as React from 'react';
import { DarkTheme, LightTheme } from './Themes';

type ThemeConfig = { name: string; type: 'light' | 'dark' };
type ThemeType = ThemeConfig['type'];

interface IThemeProps {
  children: React.ReactNode;
}

const ThemeKey = 'JJWBlogThemeKey';

function getDefaultThemeValue(): ThemeType {
  const lastKnownTheme = window.localStorage.getItem(ThemeKey);
  if ((lastKnownTheme && lastKnownTheme === 'light') || lastKnownTheme === 'dark') {
    return lastKnownTheme;
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }
}

function storeThemeInLocalStorage(type: ThemeType) {
  window.localStorage.setItem(ThemeKey, type);
}

interface IThemeTypeContextValue {
  setTheme: (type: ThemeType) => void;
  currentTheme: ThemeConfig;
  nextTheme: ThemeConfig;
}

const DarkThemeConfig: ThemeConfig = { name: '🌌 Dark', type: 'dark' };
const LightThemeConfig: ThemeConfig = { name: '☀️ Light', type: 'light' };

function getThemeConfig(type: ThemeType) {
  switch (type) {
    case 'dark':
      return DarkThemeConfig;
    case 'light':
      return LightThemeConfig;
  }
}

const ThemeTypeContext = React.createContext<IThemeTypeContextValue | undefined>(undefined);

const Theme = ({ children }: IThemeProps) => {
  const [themeType, setThemeType] = React.useState(() => getDefaultThemeValue());

  const ThemeTypeContextValue: IThemeTypeContextValue = React.useMemo(
    () => ({
      currentTheme: getThemeConfig(themeType),
      nextTheme: themeType === 'dark' ? LightThemeConfig : DarkThemeConfig,
      setTheme: (type: ThemeType) => {
        if (type !== themeType) {
          storeThemeInLocalStorage(type);
          setThemeType(type);
        }
      },
    }),
    [themeType, setThemeType]
  );

  return (
    <ThemeTypeContext.Provider value={ThemeTypeContextValue}>
      <ThemeProvider theme={themeType === 'light' ? LightTheme : DarkTheme}>{children}</ThemeProvider>
    </ThemeTypeContext.Provider>
  );
};

export { Theme, ThemeTypeContext, useTheme };
