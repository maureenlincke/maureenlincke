import { HStack } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"

function Navbar() {
    return (
        <HStack>
            <ColorModeSwitcher />
        </HStack>
    )
}

export default Navbar;