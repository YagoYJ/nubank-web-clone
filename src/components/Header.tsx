import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Box, Button, Skeleton, Typography } from "@mui/material";

import InfoCard from "./InfoCard";

import LogoNubank from "../assets/logo-nubank.svg";

export function Header() {
  const [balanceIsVisible, setBalanceIsVisible] = useState(true);

  function toggleBalanceVisible() {
    setBalanceIsVisible(!balanceIsVisible);
  }

  return (
    <>
      <Box width="90%" maxWidth="1300px" mx="auto">
        <Box
          width="100%"
          component="header"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          py="22px"
        >
          <Box component="img" src={LogoNubank} alt="Logo do Nubank" />
          <Button
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: "grey.100",
              borderRadius: 18,
              color: "common.black",
              boxShadow: "unset",
              ":hover": {
                backgroundColor: "grey.100",
              },
            }}
          >
            Acessar outra conta
          </Button>
        </Box>
      </Box>

      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        bgcolor="primary.main"
      >
        <Box
          width="100%"
          maxWidth="1300px"
          mx="auto"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          py="22px"
          gap="30px"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            width="190px"
          >
            <Typography variant="body1" mb="10px" color="common.white">
              Olá, Yago Juan
            </Typography>

            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <Typography variant="body1" color="common.white">
                  Conta
                </Typography>

                {balanceIsVisible ? (
                  <Typography
                    color="common.white"
                    fontSize={20}
                    fontWeight="bold"
                  >
                    R$ 2.321.800,00
                  </Typography>
                ) : (
                  <Skeleton
                    variant="rectangular"
                    width={100}
                    height={30}
                    animation={false}
                  />
                )}
              </Box>

              <Box
                component="button"
                bgcolor="transparent"
                sx={{
                  cursor: "pointer",
                  border: "none",
                  ":hover": { transform: "scale(1.1)" },
                }}
                onClick={() => toggleBalanceVisible()}
              >
                {balanceIsVisible ? (
                  <FaEye color="#ffffff" size={20} />
                ) : (
                  <FaEyeSlash color="#ffffff" size={20} />
                )}
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="20px"
            overflow="auto"
            ml="20px"
          >
            <InfoCard
              text="Veja os descontos que preparamos para você no"
              highlightText="Shopping Nubank"
            />
            <InfoCard
              text=" em empréstimo com portabilidade de salário"
              highlightText="25% de desconto"
              highlightTextFirst
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
