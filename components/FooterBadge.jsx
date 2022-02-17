import { Tag, Text } from '@chakra-ui/react'

const FooterBadge = () => {
    return (
        <div className="flex justify-center pt-5 h-17 overflow">
            <Tag>
                <Text>© 2022 TikViral, All rights reserved.</Text>
            </Tag>
        </div>
    )
}

export default FooterBadge