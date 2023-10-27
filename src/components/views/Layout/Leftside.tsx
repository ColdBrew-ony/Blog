import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Container, Stack, chakra, VisuallyHidden, Button, useColorMode
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from 'react-icons/fi'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'
import { AiFillMail, AiFillGithub, AiFillTag, AiOutlineComment } from "react-icons/ai"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaRegAddressCard, FaRegEdit } from 'react-icons/fa'

interface LinkItemProps {
  name: string
  icon: IconType
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
}
interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'About', icon: FaRegAddressCard },
  { name: 'Posts', icon: FaRegEdit },
  { name: 'Tags', icon: AiFillTag },
  { name: 'Comments', icon: AiOutlineComment },
]
//GitHub Email 주소
const openSite = (open : string) => {
  if(open==='github'){
    window.open('https://github.com/ColdBrewony', "_blank", "noopener, noreferrer");
  }else if(open ==='email'){
    window.open('mailto:kjw8739@gmail.com', "_blank", "noopener, noreferrer");
  }
};
const SocialButton = ({
  children,
  label,
  open,
  }: {
    children: ReactNode
    label: string
    open: string
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}
        onClick={() => openSite(open)}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    )
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
        
          <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              Logo
            </Text>
          </Flex>

          <Box
              bg={useColorModeValue('white', 'gray.900')}
              color={useColorModeValue('gray.700', 'gray.200')}>
              <Container
                as={Stack}
                maxW={'9xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={5}
                justify={{ base: 'center', md: 'center' }}
                align={{ base: 'center', md: 'center' }}>
                
                
                <Stack direction={'row'} spacing={6}>
                <SocialButton label={'GitHub'} open={'github'}>
                  <AiFillGithub />
                </SocialButton>
                <SocialButton label={'E-Mail'} open={'email'}>
                  <AiFillMail />
                </SocialButton>
                {/* 추후 다크모드 변경 */}
                <Button w={8} h={8} bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} rounded={'full'} onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                </Stack>
              </Container>
            </Box>
            <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />

          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon}
            >
              {link.name}
            </NavItem>
          ))}

    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const Leftside = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Leftside