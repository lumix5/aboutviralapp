
import { ChakraProvider } from "@chakra-ui/react";
import HowTickViralWorks from "../components/howTickViralWorks";
import FooterBadge from "../components/FooterBadge";
import Header from "../components/Header";
import FlexColumnCentered from "../components/HOC/UI/FlexColumnCentered";
import MainContent from '../components/MainContent'

const Index = () => {
    return (
        <div className="overflow-hidden">
            <ChakraProvider>
                <FlexColumnCentered>
                    <Header />
                    <MainContent />
                </FlexColumnCentered>
                <HowTickViralWorks />
                <FooterBadge />
            </ChakraProvider >
        </div>
    );
}

export default Index;
