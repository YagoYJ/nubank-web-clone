import { Box, Typography } from "@mui/material";

interface InfoCardProps {
  text: string;
  highlightText: string;
  highlightTextFirst?: boolean;
}

export default function InfoCard({
  text,
  highlightText,
  highlightTextFirst,
}: InfoCardProps) {
  return (
    <Box
      width={247}
      height={80}
      bgcolor="grey.100"
      borderRadius="10px"
      py="18px"
      px="16px"
    >
      {highlightTextFirst ? (
        <Typography color="primary.main" fontSize="12px">
          {highlightText}{" "}
          <Typography variant="caption" color="common.black" fontSize="12px">
            {text}
          </Typography>
        </Typography>
      ) : (
        <Typography color="common.black" fontSize="12px">
          {text}{" "}
          <Typography variant="caption" color="primary.main" fontSize="12px">
            {highlightText}
          </Typography>
        </Typography>
      )}
    </Box>
  );
}
