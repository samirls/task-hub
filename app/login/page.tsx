'use client'

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
  } from '@chakra-ui/react';
  
  export default function Login() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'white'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Logue-se</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              e mergulhe na <Link color={'yellow.500'}>eficiência</Link> do trabalho em grupo!
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={'gray.50'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" bg={'white'}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input type="password" bg={'white'}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Link color={'blue.400'}>Esqueceu a senha?</Link>
                </Stack>
                <Button
                  bg={'blue'}
                  color={'red'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }