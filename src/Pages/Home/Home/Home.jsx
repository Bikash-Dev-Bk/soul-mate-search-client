import Banner from "../Banner/Banner";
import PremiumMember from "../PremiumMember/PremiumMember";
import SuccessCounter from "../SuccessCounter/SuccessCounter";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PremiumMember></PremiumMember>
            <SuccessCounter></SuccessCounter>
        </div>
    );
};

export default Home;