import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type TSpecialist = {
  id: string;
  title: string;
  icon: string;
};

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialities", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialities } = await res.json();
  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Specialties
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Experienced Doctors Across All Specialties
          </Typography>
        </Box>

        <Stack direction="row" gap={5} mt={5}>
          {specialities.slice(0, 6).map((speciality: TSpecialist) => (
            <Box
              key={speciality.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10PX",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid #1586FD",
                  padding: "40px 10px",
                  borderRadius: "10PX",
                  transition: "ease-in-out",
                },
              }}
            >
              <Image
                src={speciality.icon}
                alt="Icon"
                width={100}
                height={100}
              />
              <Box>
                <Typography component="p" fontWeight={600} fontSize={18} mt={2}>
                  {speciality.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button
          variant="outlined"
          sx={{
            marginTop: "30px",
          }}
        >
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
