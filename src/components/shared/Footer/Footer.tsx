import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import linkdinIcon from "@/assets/landing_page/linkedin.png";
import XIcon from "@/assets/landing_page/twitter.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26, 34)" py={5}>
      <Container color="#ffff">
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#ffff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#ffff" component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color="#ffff">Medicine</Typography>
          <Typography color="#ffff">Diagnostics</Typography>
          <Typography color="#ffff">NGOs</Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="Facebook" />
          <Image src={instagramIcon} width={30} height={30} alt="Facebook" />
          <Image src={linkdinIcon} width={30} height={30} alt="Facebook" />
          <Image src={XIcon} width={30} height={30} alt="Facebook" />
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="#ffff">
            {" "}
            &copy;2024 PH Health Care. All Right Reserved
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            fontWeight={600}
            color="#ffff"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography color="#ffff">
            Privecy Policy! Terms and Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
