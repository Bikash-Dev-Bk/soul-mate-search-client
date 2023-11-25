import Banner from "../Banner/Banner";
import PremiumMember from "../PremiumMember/PremiumMember";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PremiumMember></PremiumMember>
            <SuccessCounter></SuccessCounter>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;