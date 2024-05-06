import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Comess From
        </Typography>
        <Typography
          color="primary.main"
          variant="h3"
          component="h1"
          fontWeight={600}
        >
          Preventive Care
        </Typography>
        <Typography
          color="primary.secondary"
          variant="h6"
          component="p"
          fontWeight={400}
          sx={{
            my: 4,
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          neque ea autem quidem labore, tempora sunt velit culpa, perspiciatis,
          aspernatur cumque. Ratione error ad suscipit possimus dolorem vero
          perspiciatis adipisci.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make appointment</Button>
          <Button variant="outlined">Contact us</Button>
        </Box>
      </Box>

      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} width={100} height={100} alt="Arrow" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              width={240}
              height={380}
              alt="Doctor1"
            />
          </Box>

          <Box>
            <Image
              src={assets.images.doctor2}
              width={240}
              height={350}
              alt="Doctor1"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "150px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            width={240}
            height={240}
            alt="Doctor3"
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: 0,
            zIndex: -1,
          }}
        >
          <Image
            src={assets.images.stethoscope}
            width={180}
            height={180}
            alt="Doctor3"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
