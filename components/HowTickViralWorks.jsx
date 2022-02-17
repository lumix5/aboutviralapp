import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import { Heading, Text, Button } from '@chakra-ui/react';


const HowTickViralWorks = () => {

    const howTikViralWorksArray = [
        {
            id: 1, heading: 'Real Users, Followers, and Likes', text: 'TikTok followers are all real and active. Free tiktok followers generator no human verification or survey'
        },
        {
            id: 2, heading: '100% Safe & Secure', text: `Only your username is required.We don't need your password. Free tiktok followers 2021`
        },
        {
            id: 3, heading: 'a Fun & Fast manner', text: 'Follow others to win stars, and use stars to upgrade followers and likes. Come get unlimited tiktok followers generator.'
        },
    ]

    return (
        <div
            className="bg-white w-ful ">
            <motion.div initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ default: { duration: 0.6 }, }}
                viewport={{ once: true }} className="flex flex-col items-center pt-7">
                <Heading className="pb-4">How TikViral works</Heading>
                <div className="flex justify-center w-5/6 2xl:w-4/6">
                    {howTikViralWorksArray.map(({ id, heading, text }) => {
                        return (
                            <div className="p-2 w-72">
                                <Image src={`/step${id}.jpeg`} width='286' height='286' className="rounded-xl " />
                                <Heading>{heading}</Heading>
                                <Text>{text}</Text>
                            </div>
                        )
                    })}
                </div>
                <div className="p-5"><Button colorScheme='blue' size='lg'>Get Started</Button></div>
            </motion.div>
        </div>
    )
}

export default HowTickViralWorks