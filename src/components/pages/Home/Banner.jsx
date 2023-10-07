

const Banner = () => {
    return (

        <div className="hero mt-5 rounded-2xl my-28 min-h-[80vh] shadow-xl shadow-slate-500" style={{ backgroundImage: 'url(https://c0.wallpaperflare.com/preview/56/956/1001/yoga-zen-meditating-pose.jpg)' }}>
            <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
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