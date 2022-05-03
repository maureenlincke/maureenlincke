import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiPostgresql, SiNodeDotJs, SiNodemon, SiGit, SiBootstrap, SiReactrouter } from "react-icons/si";

const Icons = () => {
    const [icons, setIcons] = useState([
        {logo: <SiJavascript />}, 
        SiReact, 
        //SiExpress, 
        SiHtml5, 
        SiCss3, 
        SiPostgresql, 
        SiNodeDotJs, 
        SiNodemon, 
        SiGit, 
        //SiChakraui, 
        SiBootstrap, 
        SiReactrouter
    ]);

    return (
        <>
            {icons.map((skillIcon, index) => {
                return (
                    <Box>
                        {logo}
                    </Box>
                )
            })}
        </>
    )
}

export default Icons;