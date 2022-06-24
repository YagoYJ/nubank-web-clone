import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { darkThemeColors, lightThemeColors } from "../styles/colors";

interface ColorModeContextData {
  mode: "light" | "dark";
  toggleColorMode: () => void;
}

interface ColorModeProviderProps {
  children: ReactNode;
}

export const ColorModeContext = createContext<ColorModeContextData>(
  {} as ColorModeContextData
);

function ColorModeProvider({ children }: ColorModeProviderProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  function toggleColorMode() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  const theme = useMemo(() => {
    if (mode === "light") {
      return createTheme({
        palette: {
          mode,
          ...lightThemeColors,
        },
      });
    } else {
      return createTheme({
        palette: {
          mode,
          ...darkThemeColors,
        },
      });
    }
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function useColorMode() {
  const context = useContext(ColorModeContext);
  return context;
}

export { ColorModeProvider, useColorMode };
