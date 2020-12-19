import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import InfoIcon from '@material-ui/icons/Info';
import ReceiptIcon from '@material-ui/icons/Receipt';

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Products",
    icon: <InfoIcon />,
    link: "/products",
  },
  {
    title: "Users",
    icon: <PeopleOutlineIcon />,
    link: "/users",
  },
  {
    title: "Order",
    icon: <ReceiptIcon />,
    link: "/orders",
  }
 
];