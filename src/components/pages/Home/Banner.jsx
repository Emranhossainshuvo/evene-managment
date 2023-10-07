

const Banner = () => {
    return (

        <div className="hero mt-5 rounded-md my-28 min-h-[80vh] shadow-xl shadow-slate-500" style={{ backgroundImage: 'url(https://i.ibb.co/kxxzt1w/3d-female-yoga-pose-african-landscape-with-sunset-sky.jpg)' }}>
            <div className="hero-overlay rounded-md bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 font-medium">
                        “Good health is not something we can buy. However, it can be an extremely valuable savings account.”-Anne Wilson Schaef</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;