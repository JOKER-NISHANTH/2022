import {
  Text,
  Container,
  Flex,
  Box,
  Divider,
  Button,
  Grid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// COMPONENTS
import LoginForm from "../components/Auth/Login";
import FacebookBtn from "../components/Auth/FacebookBtn";

// ASSETS
import Logo from "../assets/insta-logo.png";

export default function Login() {
  const [demoImageIndex, setDemoImageIndex] = useState(0);

  const demoImages = [
    "https://instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
    "https://instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png",
    "https://instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
    "https://instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
  ];

  useEffect(() => {
    setTimeout(() => {
      setDemoImageIndex(demoImageIndex === 3 ? 0 : demoImageIndex + 1);
    }, 4000);
  }, [demoImageIndex]);

  return (
    <>
      <Container
        py={"2rem"}
        maxW={{ base: "container.sm", lg: "container.lg" }}
        px={{ base: "2rem", md: "6rem", lg: "2rem" }}
      >
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          width={"100%"}
          height={"100%"}
        >
          <Flex display={{ base: "none", lg: "flex" }}>
            <Flex w={"100%"} h={"100%"} pos={"relative"}>
              <Image
                src={
                  "https://instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png"
                }
                alt={"Instagram Demo images"}
                layout={"fill"}
              />

              <Box
                pos={"absolute"}
                h={"85%"}
                w={"55%"}
                right={"60px"}
                top={"30px"}
              >
                <Image
                  src={demoImages[demoImageIndex]}
                  alt={"Instagram app demo images"}
                  layout={"fill"}
                />
              </Box>
            </Flex>
          </Flex>

          <Flex
            flexDir={"column"}
            h={{ base: "100%", md: "100%" }}
            alignItems={"center"}
            gap={"2rem"}
            w={"100%"}
            px={{ base: "0", lg: "2rem" }}
          >
            <Flex
              flexDir={"column"}
              h={"100%"}
              w={"100%"}
              alignItems={"center"}
              gap={"2rem"}
              bg={{ base: "none", md: "white" }}
              border={{ base: "none", md: "1px solid" }}
              borderColor={"gray.300"}
              p={{ base: "0", md: "3rem" }}
            >
              <Box w={"200px"} h={"60px"} pos={"relative"}>
                <Image src={Logo} alt={"Instagram Logo"} layout={"fill"} />
              </Box>

              <LoginForm />

              <Flex align={"center"} w={"100%"} gap={"10px"}>
                <Divider borderColor={"gray.500"} />
                <Text fontSize={"xl"}>or</Text>
                <Divider borderColor={"gray.500"} />
              </Flex>

              <Flex flexDir={"column"} gap={"10px"}>
                <FacebookBtn
                  text={"Login with Facebook"}
                  variant={"ghost"}
                  bg={"transparent"}
                  color={"facebook"}
                  fontSize={"lg"}
                />
                <Button
                  variant={"link"}
                  color={"blue.700"}
                  fontWeight={"400"}
                  fontSize={"sm"}
                >
                  Forgot Password?
                </Button>
              </Flex>
            </Flex>

            <Flex
              alignItems={"center"}
              gap={"5px"}
              bg={{ base: "none", md: "white" }}
              border={{ base: "none", md: "1px solid" }}
              borderColor={"gray.300"}
              p={{ base: "0", md: "3rem" }}
              py={{ base: "0", md: "2rem" }}
              w={"100%"}
              justify={"center"}
            >
              <Text color={"heading"} fontWeight={"medium"}>
                Don't have an account?
              </Text>
              <Link href={"/accounts/register"}>
                <Text color={"#0095f6"}>Sign up</Text>
              </Link>
            </Flex>

            <Flex flexDir={"column"} align={"center"}>
              <Text>Get the app</Text>

              <Flex gap={"10px"}>
                <Box pos={"relative"} w={"120px"} h={"40px"}>
                  <Image
                    src={
                      "https://instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                    }
                    alt={"Get it from App store"}
                    layout={"fill"}
                  />
                </Box>
                <Box pos={"relative"} w={"120px"} h={"40px"}>
                  <Image
                    src={
                      "https://instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                    }
                    alt={"Get it from Play store"}
                    layout={"fill"}
                  />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Grid>
      </Container>
    </>
  );
}
