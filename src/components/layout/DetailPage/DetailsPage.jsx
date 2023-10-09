
import { useLoaderData } from 'react-router-dom';
import SingleDetailPage from './SingleDetailPage';

const DetailsPage = () => {
    
    const card = useLoaderData();

    console.log(card)

    return (

        <div>
                {
                    card.map(info => <SingleDetailPage key={info.id} info={info}></SingleDetailPage>)
                }
        </div>

    );
};

export default DetailsPage;