
const Carts = ({ cards }) => {

    const { id, img, name, price, short_description } = cards;

    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img className="" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{short_description}</p>
                <p className="text-end">${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Carts;