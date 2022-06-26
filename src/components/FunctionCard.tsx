import { Avatar, Box, Typography } from "@mui/material";

interface FunctionCardProps {
  name: string;
  img: {
    alt: string;
    src: string;
  };
}

export function FunctionCard({ name, img }: FunctionCardProps) {
  return (
    <Box
      width={150}
      height={130}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="8px"
      bgcolor="common.white"
      borderRadius="10px"
      sx={{
        boxShadow: "0 0 23px rgba(0, 0, 0, 0.1)",
        ":hover": {
          cursor: "pointer",
          transform: "scale(1.1)",
          transition: "0.2s",
        },
      }}
    >
      <Avatar sx={{ bgcolor: "grey.100", width: 60, height: 60 }}>
        <Box
          component="img"
          width="20px"
          height="20px"
          src={img.src}
          alt={img.alt}
        />
      </Avatar>
      <Typography variant="caption" color="primary.main">
        {name}
      </Typography>
    </Box>
  );
}
