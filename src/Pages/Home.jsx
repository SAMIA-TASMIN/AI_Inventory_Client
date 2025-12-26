
import AboutAIModels from '../Components/Home/AboutAIModels';
import GetStarted from '../Components/Home/GetStarted';
import FeaturedAIModels from '../Components/Home/FeaturedAIModels';
import SlideCard from '../Components/Home/SlideCard';



const Home = () => {
    return (
        <div>
            <SlideCard></SlideCard>
            <FeaturedAIModels></FeaturedAIModels>
            <AboutAIModels></AboutAIModels>
            <GetStarted></GetStarted>
        </div>
    );
};

export default Home;