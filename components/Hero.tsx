import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  createIcon,
  useBreakpointValue,
  Flex,
  VStack,
} from "@chakra-ui/react";
import logoImage from "@/public/img/TaskHubT.png";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={"3xl"} h="100vh">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 40, md: 40 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Crie, Conecte-se, Colabore.
            <br />
            <Text as={"span"} color={"green.400"}>
              Sua central de tarefas em grupo!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Crie grupos para gerenciar suas tarefas com perfeição.
          </Text>
          <Text color={"gray.500"}>
            Convide amigos para ver e realizar as tarefas programadas.
          </Text>
          <Text color={"gray.500"}>
            Crie tarefas para que os membros do grupo vejam.
          </Text>
          <Box>
            <Flex justify="center" pt={{ base: 55, md: 1 }}>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"green.300"}
                href={"#"}
                _hover={{
                  bg: "green.200",
                }}
              >
                Cadastre-se
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Container>

      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6} h="100%">
            <Flex direction="column" justify="space-evenly" h="100%">
              <Text
                color={"white"}
                textAlign="center"
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                O poder da produtividade em grupo
              </Text>
              <Text
                color={"white"}
                textAlign="center"
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                Faça mais juntos
              </Text>
              <Text
                color={"white"}
                textAlign="center"
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                Desbloqueie seu potencial no Task Hub!
              </Text>
            </Flex>
          </Stack>
        </VStack>
      </Flex>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pt={{ base: 20, md: 36 }}
          pb={{ base: 12, md: 20 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Comece já!
            <br />
            <Text as={"span"} color={"green.400"}>
              Faça a sua conta.
            </Text>
          </Heading>
        </Stack>
      </Container>
      <Box>
        <Flex justify="center" py={{ base: 2, md: 2 }}>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"green.300"}
            href={"#"}
            _hover={{
              bg: "green.200",
            }}
          >
            Cadastre-se
          </Button>
        </Flex>
        <Flex width="100%" justify="center" pt={10} pb={10}>
            <Image src={logoImage} alt="logo" width={250} height={220} />
        </Flex>

      </Box>
    </>
  );
}
