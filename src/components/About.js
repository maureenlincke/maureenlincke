import React from 'react';
import { Container, Flex, Heading, VStack, Text, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <Container maxW='100vw' >
            <Flex h='100vh' py={20}>
                <Box spacing={10} p={10} >
                    <Image borderRadius='full' src='https://i.ibb.co/16CvWW6/Capture-2.jpg' />
                </Box>
                <VStack w='full' h="full" p={10} spacing={10} >
                    <VStack spacing={3} alignItems='flex-start'>
                        <Heading size='2xl' fontFamily='Roboto' fontWeight='400'>Maureen Lincke</Heading>
                        
                        <Text fontFamily='Roboto' fontWeight='300'>Full Stack Software Engineer</Text>
                    </VStack>
                </VStack>
            </Flex>
        </Container>
    )
}

export default About;