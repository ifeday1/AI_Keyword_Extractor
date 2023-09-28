import React from 'react'
import { Box, Image, Text, Flex } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box marginTop={50}>
            <Flex justifyContent='center' alignItems='center'>
                <Image />
                <Text>Powered by OpenAI</Text>
            </Flex>
        </Box>
    )
}

export default Footer