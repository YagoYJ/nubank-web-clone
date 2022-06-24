import { Home } from "./pages/Home";
import { ColorModeProvider } from "./hooks/ColorModeContext";

export function App() {
  return (
    <ColorModeProvider>
      <Home />
    </ColorModeProvider>
  );
}
