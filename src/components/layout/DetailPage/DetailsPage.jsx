
import { useParams } from 'react-router-dom';

const DetailsPage = () => {

    const { id, img, name, price, short_description, description } = useParams();

    return (

        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>{id}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>

    );
};

export default DetailsPage;