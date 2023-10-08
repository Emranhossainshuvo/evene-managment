
const Carts = ({ cards }) => {

    const { id, img, name, price, short_description } = cards;

    return (
        <div className="card bg-base-100 shadow-xl p-4 image-full">
            <figure><img className="" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{short_description}</p>
                <div className="card-actions items-center justify-end">
                <p className="text-end">${price}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Carts;