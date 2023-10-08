import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailsPage = () => {

    const { id, img, name, price, short_description } = useParams();

    return (
        <div>
            <h2>Details for: {id}</h2>
        </div>
    );
};

export default DetailsPage;