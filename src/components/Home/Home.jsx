import PropTypes from "prop-types";

const Home = () => {
    return (
        <div className="w-5/6 justify-end shadow-lg shadow-blueviolet-500/80">
            <div className="flex bg-blue-200">
                <div className=" text-center mt-16 py-8 shadow-lg shadow-indigo-500/60 ">
                    <h2 className="text-6xl font-bold w-2/3 mx-auto">The Most Flexible WordPress Theme For Real Estate </h2>
                    <p  className="w-2/3 mx-auto my-8 text-gray-800 text-xl font-bold">Crafted for versatility Houzez equips freelancers, realtors, and businesses with innovative tools to create a distinctive online presence. </p>
                </div>

                <div className="card-item text-center 	  ml-16 ">
                    <img className="w-max rounded shadow-lg shadow-lime-500/60  mt-16 " src="/premium_photo-1663089688180-444ff0066e5d.avif" alt="" />
                </div>
            </div>

            <div className="grid grid-cols-2 shadow-lg shadow-orange-300		 bg-green-300 mt-16 w-2/4 mx-auto">
                <button className="btn btn-success m-4">Buy Houses</button><button className="btn m-4 btn-success">View demos</button>
            </div>

            <div className=" mt-16">
                <h2 className="text-center text-3xl font-bold text-blue-600 p-2">Perfect for Web Developers</h2>
                <br />
                <h2 className="text-center text-3xl font-bold text-blue-600 ">,
                Real Estate Companies or Single Agents</h2>

                <div className="grid grid-cols-3 mt-16 bg-base-100 ">
                    <img src="/Group-15-1.webp" alt="" />
                    
                    <h2 className="font-semibold text-blue-500 text-2xl">For Web Developers</h2>
                    <img src="/Group-37.webp" alt="" />
                    
                    <h2 className="font-semibold text-blue-500 text-2xl">For Real Estate Business</h2>
                    <img src="/Group-39-2.webp" alt="" />
                    
                    <h2 className="font-semibold text-blue-500 text-2xl">For Agents and Brokers</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;

Home.propTypes = {
    children: PropTypes.node
}