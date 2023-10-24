import { Box, Container, Stack, useColorModeValue, chakra, VisuallyHidden,useColorMode,Button } from '@chakra-ui/react'
import { AiFillMail, AiFillGithub } from "react-icons/ai"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'

//GitHub Email 주소
const openSite = (open : string) => {
  if(open==='github'){
    window.open('https://github.com/ColdBrewony', "_blank", "noopener, noreferrer");
  }else if(open ==='email'){
    window.open('mailto:kjw8739@gmail.com', "_blank", "noopener, noreferrer");
  }
};

//SocialButton
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

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'9xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={5}
        justify={{ base: 'end', md: 'end' }}
        align={{ base: 'end', md: 'end' }}>
        
        
        <Stack direction={'row'} spacing={6}>
        <SocialButton label={'GitHub'} open={'github'}>
          <AiFillGithub />
        </SocialButton>
        <SocialButton label={'E-Mail'} open={'email'}>
          <AiFillMail />
        </SocialButton>
        <Button w={8} h={8} bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} rounded={'full'} onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        </Stack>
      </Container>
    </Box>
  )
}