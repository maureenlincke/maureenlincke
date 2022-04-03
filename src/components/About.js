import { Container, Flex, Heading, VStack, Text, Box, Image } from "@chakra-ui/react";

const About = () => {
    return (
        <Container maxW='container.xl' p={0}>
            <Flex h='50vh' py={20}>
                <VStack w='full' h="full" p={10} spacing={10} >
                    <VStack spacing={3} alignItems='flex-end'>
                        <Heading size='2xl'>Maureen Lincke</Heading>
                        <Text>Full Stack Software Engineer</Text>
                    </VStack>
                </VStack>
                <VStack w='full' h="full" p={10} spacing={10} bg='gray.50'>
                    <Box>
                        <Image src='https://i.ibb.co/16CvWW6/Capture-2.jpg' />
                    </Box>
                </VStack> 
            </Flex>
        </Container>
    )
}

export default About;