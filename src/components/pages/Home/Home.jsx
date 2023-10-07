import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Carts from "./Carts";

const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    cards.map(card => <Carts key={card.id} cards={card}></Carts>)
                }
            </div>
        </div>
    );
};

export default Home;