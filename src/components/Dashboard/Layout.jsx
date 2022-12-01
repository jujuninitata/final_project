import {
  Box,
  Flex,
  Icon,
  useDisclosure,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Menu,
  MenuButton,
  HStack,
  VStack,
  MenuList,
  useColorModeValue,
  MenuItem,
  MenuDivider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import { MdHome } from 'react-icons/md';
import {
  FaRss,
  FaClipboardCheck,
  FaBell,
  FaCar,
  FaPlaneDeparture,
  FaPencilAlt,
  FaUserCircle,
  FaUserAlt,
} from 'react-icons/fa';
import { HiCollection, HiCode } from 'react-icons/hi';
import { AiFillGift } from 'react-icons/ai';
import {
  BsGearFill,
  BsFillPeopleFill,
  BsBriefcaseFill,
  BsFillInboxFill,
  BsFillCalendar2EventFill,
  BsCalendarWeekFill,
  BsFillCalendar2CheckFill,
  BsFillClockFill,
} from 'react-icons/bs';
import { FiChevronDown, FiMenu, FiSearch, FiInbox } from 'react-icons/fi';

const Layout = ({ children }) => {
  const sidebar = useDisclosure();
  //get current path
  const path = window.location.pathname;
  // console.log(path);

  const NavGroup = (props) => {
    const { icon, children, ...rest } = props;

    return (
      <Flex
        align='center'
        px='4'
        mx='2'
        rounded='md'
        py='3'
        cursor='pointer'
        color='gray.200'
        _hover={{
          bg: 'blackAlpha.300',
          color: 'whiteAlpha.900',
        }}
        role='group'
        fontWeight='semibold'
        transition='.15s ease'
        {...rest}>
        {icon && (
          <Icon
            mr='2'
            boxSize='4'
            _groupHover={{
              color: 'gray.300',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const NavItem = (props) => {
    const { icon, children, link, ...rest } = props;
    const isActive = path === link;
    return (
      <Link to={link}>
        <Flex
          align='center'
          bg={isActive ? 'blackAlpha.300' : 'transparent'}
          px='4'
          mx='2'
          rounded='md'
          py='3'
          cursor='pointer'
          color='gray.200'
          _hover={{
            bg: 'blackAlpha.300',
            color: 'whiteAlpha.900',
          }}
          role='group'
          fontWeight='semibold'
          transition='.15s ease'
          {...rest}>
          {icon && (
            <Icon
              mr='2'
              boxSize='4'
              _groupHover={{
                color: 'gray.300',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as='nav'
      pos='fixed'
      top='0'
      left='0'
      zIndex='sticky'
      h='full'
      pb='10'
      overflowX='hidden'
      overflowY='auto'
      bg='brand.700'
      borderColor='blackAlpha.300'
      borderRightWidth='1px'
      w='60'
      {...props}>
      <Flex px='4' py='5' align='center'>
        {/* <Logo /> */}
        <Text fontSize='2xl' ml='2' color='white' fontWeight='semibold'>
          Logo
        </Text>
      </Flex>
      <Flex direction='column' as='nav' fontSize='sm' color='gray.600' aria-label='Main Navigation'>
        <NavItem icon={MdHome} link={'/home'}>
          Home
        </NavItem>
        <NavItem icon={BsFillInboxFill} link={'/inbox'}>
          Inbox
        </NavItem>
        <NavItem icon={FaUserAlt} link={'/employee'}>
          Employee
        </NavItem>
        {/* <NavItem icon={BsBriefcaseFill}>Business Action</NavItem> */}
        {/* create nested menu */}
        <Accordion allowMultiple borderStyle={'none'}>
          <AccordionItem border={'none'}>
            <h2>
              <AccordionButton fontSize={'sm'} p={0} w={'full'}>
                <Box flex='1' textAlign='left'>
                  {/* <NavItem icon={BsBriefcaseFill}>Business Action</NavItem> */}
                  <NavGroup icon={BsBriefcaseFill}>Business Action</NavGroup>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <NavItem icon={FaPlaneDeparture} link={'/perdin'}>
                Perjalanan Dinas
              </NavItem>
              <NavItem icon={FaPencilAlt} link={'/diklat'}>
                Diklat
              </NavItem>
              <NavItem icon={BsFillCalendar2EventFill} link={'/izin'}>
                Izin
              </NavItem>
              <NavItem icon={BsCalendarWeekFill} link={'/cuti'}>
                Cuti
              </NavItem>
              <NavItem icon={BsFillClockFill} link={'/lembur'}>
                Lembur
              </NavItem>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Box>
  );

  return (
    <Box
      as='section'
      bg='gray.50'
      _dark={{
        bg: 'gray.700',
      }}
      minH='100vh'>
      <SidebarContent
        display={{
          base: 'none',
          md: 'unset',
        }}
      />
      <Drawer isOpen={sidebar.isOpen} onClose={sidebar.onClose} placement='left'>
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w='full' borderRight='none' />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition='.3s ease'>
        <Flex
          as='header'
          align='center'
          justify='space-between'
          w='full'
          px='4'
          bg='white'
          _dark={{
            bg: 'gray.800',
          }}
          borderBottomWidth='1px'
          borderColor='blackAlpha.300'
          h='14'>
          <IconButton
            aria-label='Menu'
            display={{
              base: 'inline-flex',
              md: 'none',
            }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size='sm'
          />
          <InputGroup
            w='96'
            display={{
              base: 'none',
              md: 'flex',
            }}>
            <InputLeftElement color='gray.500'>
              <FiSearch />
            </InputLeftElement>
            <Input placeholder='Search People ...' />
          </InputGroup>

          <HStack spacing={{ base: '0', md: '6' }}>
            <Text fontSize='sm'>Welcome, Admin</Text>
            <Icon color='gray.500' as={FaBell} cursor='pointer' />
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
                  <HStack>
                    <Avatar
                      size={'sm'}
                      src={
                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      }
                    />
                    <VStack display={{ base: 'none', md: 'flex' }} alignItems='flex-start' spacing='1px' ml='2'>
                      <Text fontSize='sm'>Admin</Text>
                      <Text fontSize='xs' color='gray.600'>
                        Admin
                      </Text>
                    </VStack>
                    <Box display={{ base: 'none', md: 'flex' }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList
                  bg={useColorModeValue('white', 'gray.900')}
                  borderColor={useColorModeValue('gray.200', 'gray.700')}>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Inbox</MenuItem>
                  <MenuDivider />
                  <Link to={'/'}>
                    <MenuItem>Sign Out</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        </Flex>

        <Box as='main' p='4'>
          {/* <Breadcrumb mb={4}>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb> */}
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
