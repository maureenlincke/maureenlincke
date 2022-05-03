import { Flex, Box, Container } from "@chakra-ui/react";
import { SiJavascript } from "react-icons/si";
import React from 'react';

const Skills = () => {

    return (
        <Container>
            <Flex flexWrap='wrap' justifyContent='center'>
                <Box p={20}>
                    <SiJavascript />
                </Box>
                <Box p={20}>
                    <SiJavascript />
                </Box>
                <Box p={20}>
                    <SiJavascript />
                </Box>
                <Box p={20}>
                    <SiJavascript />
                </Box>
                <Box p={20}>
                    <SiJavascript />
                </Box>
            </Flex>
        </Container>
    )
}

export default Skills;