import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { TUserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth.service";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <div>
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
          py={1}
          mt={2}
          component={Link}
          href="/"
        >
          <Image src={assets.svgs.logo} width={40} height={40} alt="Logo" />
          <Typography variant="h6" component="h1">
            PH Health Care
          </Typography>
        </Stack>
        <List>
          {drawerItems(userRole as TUserRole).map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </List>
      </Box>
    </div>
  );
};

export default SideBar;
