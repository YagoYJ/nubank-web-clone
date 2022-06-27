import { Box } from "@mui/system";
import { BsCreditCard } from "react-icons/bs";
import { Typography } from "@mui/material";

import DepositIcon from "../assets/deposit-icon.svg";
import DollarIcon from "../assets/dollar-icon.svg";
import PayIcon from "../assets/pay-icon.svg";
import PhoneIcon from "../assets/phone-icon.svg";
import PixIcon from "../assets/pix-icon.svg";
import TransferIcon from "../assets/transfer-icon.svg";

import { Header } from "../components/Header";
import { FunctionCard } from "../components/FunctionCard";
import { Sidebar } from "../components/Sidebar";

type Function = {
  name: string;
  img: {
    alt: string;
    src: string;
  };
};

const functionItems: Function[] = [
  {
    name: "Pix",
    img: {
      alt: "Pix",
      src: PixIcon,
    },
  },
  {
    name: "Pagar",
    img: {
      alt: "Pagar",
      src: PayIcon,
    },
  },
  {
    name: "Transferir",
    img: {
      alt: "Transferir",
      src: TransferIcon,
    },
  },
  {
    name: "Depositar",
    img: {
      alt: "Depositar",
      src: DepositIcon,
    },
  },
  {
    name: "Pegar emprestado",
    img: {
      alt: "Pegar emprestado",
      src: DollarIcon,
    },
  },
  {
    name: "Recarga de celular",
    img: {
      alt: "Recarga de celular",
      src: PhoneIcon,
    },
  },
  {
    name: "Doação",
    img: {
      alt: "Doação",
      src: DollarIcon,
    },
  },
];

export function Home() {
  return (
    <Box bgcolor="background.default">
      <Header />

      <Box
        width="90%"
        maxWidth="1300px"
        component="section"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py="24px"
        mx="auto"
      >
        {functionItems.map((functionItem) => (
          <FunctionCard
            key={functionItem.name}
            img={functionItem.img}
            name={functionItem.name}
          />
        ))}
      </Box>

      <Box
        component="main"
        maxWidth="1300px"
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-start"
        mx="auto"
        gap="40px"
      >
        <Box component="aside">
          <Sidebar />
        </Box>

        <Box component="section">
          <Box bgcolor="common.white" px="23px" py="21px" borderRadius="10px">
            <Box display="flex" alignItems="center" gap="10px">
              <BsCreditCard color="#323232" size={25} />
              <Typography variant="subtitle1" fontWeight="medium">
                Cartão de crédito
              </Typography>

              <Box
                borderRadius="50%"
                bgcolor="grey.300"
                width="6px"
                height="6px"
              />

              <Typography color="grey.300" variant="subtitle1">
                Fecha em 01 JAN
              </Typography>
            </Box>

            <Box mt="28px" display="flex" alignItems="center" gap="24px">
              <Box display="flex" alignItems="center" gap="10px">
                <Box
                  borderRadius="50%"
                  bgcolor="success.main"
                  width="6px"
                  height="6px"
                />

                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    fontSize="18"
                  >
                    R$ 3.968,32
                  </Typography>

                  <Typography
                    variant="caption"
                    color="grey.300"
                    fontWeight="medium"
                    fontSize="14px"
                  >
                    Limite disponível
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" gap="10px">
                <Box
                  borderRadius="50%"
                  bgcolor="info.main"
                  width="6px"
                  height="6px"
                />

                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    fontSize="18"
                  >
                    R$ 416,70
                  </Typography>

                  <Typography
                    variant="caption"
                    color="grey.300"
                    fontWeight="medium"
                    fontSize="14px"
                  >
                    Fatura atual
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" gap="10px">
                <Box
                  borderRadius="50%"
                  bgcolor="warning.main"
                  width="6px"
                  height="6px"
                />

                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    fontSize="18"
                  >
                    R$ 264,98
                  </Typography>

                  <Typography
                    variant="caption"
                    color="grey.300"
                    fontWeight="medium"
                    fontSize="14px"
                  >
                    Próximas faturas
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box mt="42px" borderRadius="10px">
              <Box
                width="100%"
                height="7px"
                bgcolor="warning.main"
                borderRadius="10px"
              >
                <Box
                  width="90%"
                  height="7px"
                  bgcolor="info.main"
                  borderRadius="10px"
                >
                  <Box
                    width="80%"
                    height="7px"
                    bgcolor="success.main"
                    borderRadius="10px"
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
