import { Box, Button } from "@mui/material";
import { useColorMode } from "../hooks/ColorModeContext";

export function Home() {
  const { toggleColorMode } = useColorMode();

  return (
    <Box width="100%" height={100} bgcolor="background.default">
      <Button variant="contained" color="info" onClick={toggleColorMode}>
        Olá Mundo
      </Button>
    </Box>
  );
}
