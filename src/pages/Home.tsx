import { Box } from "@mui/system";

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
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
      >
        <Box component="aside">
          <Sidebar />
        </Box>
        <Box component="section"></Box>
      </Box>
    </Box>
  );
}
