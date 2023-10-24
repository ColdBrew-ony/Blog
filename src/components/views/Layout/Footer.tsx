import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'center' }}
        align={{ base: 'center', md: 'center' }}
        fontFamily={'default'}
        fontSize={'110%'}>
        <Text>© 2023 ColdBre W oony. All rights reserved</Text>
      </Container>
    </Box>
  )
}