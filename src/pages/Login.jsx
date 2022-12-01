import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink, redirect, useNavigate } from 'react-router-dom';
import axios from "axios"

export default function Login() {
  const navigate = useNavigate();
  const login = async() => {
    const data = await axios("http://localhost:8000/api/v1/auth/login")
    
  }
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              {/* <Link style={{ textDecoration: 'none' }} as={RouterLink} to={'/home'}> */}
              <Button
                onClick={login}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign In
              </Button>
              {/* </Link> */}
            </Stack>
            <Stack spacing={10}>
              <Stack align={'center'}>
                <Text>Or</Text>
              </Stack>
              
              <Button
                onClick={() => navigate('/loginGoogle')}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login Google
              </Button>
              {/* </Link> */}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}


