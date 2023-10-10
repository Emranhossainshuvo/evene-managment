

const SingleDetailPage = (info) => {

    const { id, img, name, price, short_description } = info;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default SingleDetailPage;