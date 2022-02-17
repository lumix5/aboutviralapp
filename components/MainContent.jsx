import React from 'react'
import { WarningIcon } from '@chakra-ui/icons'
import {
    Heading, List,
    ListItem,
    ListIcon,
    ChakraProvider,
    Button,
} from "@chakra-ui/react";
import Image from 'next/image';

const MainContent = () => {
    return (
        <div className="flex justify-center w-full bg-no-repeat bg-cover bg-background text-cyan-50" style={{ height: '80vh' }}>
            <div className="flex items-center justify-between w-5/6 lg:w-3/6">
                <div className="w-3/6">
                    <Heading>Free TikTok Followers, TikTok Fans, Likes</Heading>
                    <List spacing={3}>
                        <ListItem className="text-lg">
                            <ListIcon as={WarningIcon} color='#008D8D' />
                            Boost your TikTok account, get free followers and likes for TikTok.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={WarningIcon} color='#008D8D' />
                            100% Free. Easy and Fast to get TikTok followers and likes.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={WarningIcon} color='#008D8D' />
                            TikViral is the worlds largest TikTok community.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={WarningIcon} color='#008D8D' />
                            Win more followers and become TikTok famous. 100% real, no survey, no human verification.
                        </ListItem>
                    </List>
                    <div className="pt-5"><Button colorScheme='blue' size='lg'>Get Started</Button></div>
                </div>
                <div className="pt-8"><Image src={'/abbyFollowers.png'} width='300' height='533' className="pt-5" /></div>
            </div>
        </div>
    )
}

export default MainContent