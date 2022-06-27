import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
}

export default function SidebarItem({ icon, text }: SidebarItemProps) {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      borderBottom="1px solid #E8E8F0"
      p="16px"
      sx={{
        ":hover": {
          cursor: "pointer",
          backgroundColor: "grey.100",
          transition: ".2s",
        },
      }}
    >
      {icon}

      <Typography color="grey.300" fontSize="14px" ml="16px">
        {text}
      </Typography>

      <FaChevronRight
        color="#7A7A80"
        size={20}
        style={{ marginLeft: "auto" }}
      />
    </Box>
  );
}
