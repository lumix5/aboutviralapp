import { SunIcon } from '@chakra-ui/icons'
import { Heading, Select, Text } from '@chakra-ui/react'


const Header = () => {
    return (
        <div className='flex justify-between w-5/6 h-20 lg:w-3/6'>
            <div className="flex">
                <Heading className="flex items-center">
                    <SunIcon className="mx-2" />
                    TikViral
                </Heading>
            </div>
            <div className="flex items-center">
                <Text className="mx-2 text-3xl whitespace-nowrap">Contant Us</Text>
                <Select placeholder='Languages'>
                    <option value='Russian'>Russian</option>
                    <option value='Espaniol'>Espaniol</option>
                    <option value='Estonian'>Estonian</option>
                </Select>
            </div>
        </div>
    )
}

export default Header