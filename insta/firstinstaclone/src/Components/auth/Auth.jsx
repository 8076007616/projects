import {Container, Flex,Box,Image, VStack} from '@chakra-ui/react'
import authimg from '../../assets/images/auth.png'
import Authform from './Authform'
import playstoreimage from '../../assets/images/playstore.png'
import {microsoftImage} from '../../assets/images/microsoft.png'
 
const Auth = () => {
  return (
  <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} px={4}>
    <Container maxW={'container.md'} px={0}>
      <Flex alignItems={'center'} justifyContent={'center'} gap={10}>
      <Box display={{base:'none',md:'block'}}>
        <Image src={authimg} h={650} alt='phoneImage'/>
      </Box>
      <VStack spacing={4} align={'stretch'}>
<Authform/>
<Box textAlign={'center'}>
  Get the App
</Box>
<Flex justifyContent={'center'} gap={5}>
<Image src={playstoreimage} alt='playstoreimage'/>
<Image src={microsoftImage} alt='microsoftimage'/>
</Flex>
      </VStack>
      </Flex>
     
      {/* right hand side content  */}
     
    </Container>
  </Flex>
  )
}

export default Auth
