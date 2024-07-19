import { Box, VStack,Image, Input, Button, Flex, Text } from "@chakra-ui/react"
import logo from '../../assets/images/logo.png'
import { useState } from "react"

const Authform = () => {
    // eslint-disable-next-line no-unused-vars
    let [login,setLogin]=useState('true')
  return (
   <Box border={'1px solid gray'} borderRadius={4} padding={5} >
    <VStack spacing={4}>
        <Image src={logo} alt="logo.png" h={24} cursor={'pointer'}/>
        <Input placeholder="Enter your email" fontSize={14} type="email"  / >
        <Input placeholder="Enter your password" fontSize={14} type="password"/ >
            {!login ? (<Input placeholder="pls confirm your password" type="password" fontSize={14}/>): null}
            <Button fontSize={14} colorScheme="blue" width={'full'} size={'sm'}>
                {login? 'login':'Signup'}
            </Button>
            <Flex alignItems={'center'} my={4} justifyContent={'center'} gap={1} w={'full'}>
                <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
                <Text>or</Text>
                <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
            </Flex>
    </VStack>
   </Box>
  )
}

export default Authform
