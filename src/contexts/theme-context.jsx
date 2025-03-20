import { createContext, useContext, useState, useEffect } from 'react';

const defaultThemeContext = {
  theme: 'light',
  toggleTheme: () => {}
};

const ThemeContext = createContext(defaultThemeContext);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(defaultThemeContext.theme);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
