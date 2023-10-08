import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Carts from "./Carts";
import Footer from "./Footer";

const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    cards.map(card => <Carts key={card.id} cards={card}></Carts>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;