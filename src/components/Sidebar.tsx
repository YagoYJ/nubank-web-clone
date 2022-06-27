import { ReactNode } from "react";
import { Box } from "@mui/material";

import { FaRegQuestionCircle } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";
import { FiShield, FiFileText } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { CgWorkAlt } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCreditCard } from "react-icons/bs";

import SidebarItem from "./SidebarItem";

type SidebarItem = {
  icon: ReactNode;
  text: string;
};

const sidebarItems: SidebarItem[] = [
  {
    icon: <FaRegQuestionCircle color="#323232" size={20} />,
    text: "Me ajuda",
  },
  {
    icon: <AiOutlineUser color="#323232" size={25} />,
    text: "Meus dados",
  },
  {
    icon: <VscSettings color="#323232" size={25} />,
    text: "Configurar app",
  },
  {
    icon: <FiShield color="#323232" size={25} />,
    text: "Segurança",
  },
  {
    icon: <MdAttachMoney color="#323232" size={25} />,
    text: "Configurar chaves pix",
  },
  {
    icon: <CgWorkAlt color="#323232" size={25} />,
    text: "Pedir conta PJ",
  },
  {
    icon: <FaRegBell color="#323232" size={25} />,
    text: "Notificações",
  },
  {
    icon: <IoSettingsOutline color="#323232" size={25} />,
    text: "Configurar conta",
  },
  {
    icon: <BsCreditCard color="#323232" size={25} />,
    text: "Configurar cartão",
  },
  {
    icon: <FiFileText color="#323232" size={25} />,
    text: "Sobre",
  },
];

export function Sidebar() {
  return (
    <Box
      width="300px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      borderRadius="10px"
      bgcolor="common.white"
      p="24px"
    >
      {sidebarItems.map((sidebarItem) => (
        <SidebarItem
          key={sidebarItem.text}
          icon={sidebarItem.icon}
          text={sidebarItem.text}
        />
      ))}
    </Box>
  );
}
