import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [nip, setNip] = useState('');
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfpassword] = useState(''); 
  const navigate = useNavigate;
  const [msg, setMsg]=useState('')
  const daftar = async(e) => {
    e.preventDefault();
    try
    {
      await axios.post("http://localhost:8000/api/v1/auth/register",{email,nip,userid, password,confirmPassword})
      navigate ("/login")
    }
    catch(error)
    {
        if(error.respose)
        {
          setMsg(error.respose.data.msg)
        }
    }
    
  }

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <p className='has-text-centered'>{msg}</p>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id='firstName' isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='lastName'>
                  <FormLabel>Last Name</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id='email' isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type='email' 
              value={email} onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id='nip' isRequired>
              <FormLabel>NIP</FormLabel>
              <Input type='text' value={nip} onChange={(e) => setNip(e.target.value)}/>
            </FormControl>
            <FormControl id='userid' isRequired>
              <FormLabel>User ID</FormLabel>
              <Input type='text' value={userid} onChange={(e) => setUserid(e.target.value)} />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id='confpassword' isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'confpassword'} value={confirmPassword} onChange={(e) => setConfpassword(e.target.value)}/>
                <InputRightElement h={'full'}>
                  <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button onClick={daftar}
                loadingText='Submitting'
                size='lg'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
