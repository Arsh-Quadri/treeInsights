import { useState } from "react";
import { useNavigate } from "react-router-dom";
import treeDetails from "../data/treeDetails";

const Home = () => {
  const navigate = useNavigate();
  const maxLength = 75; // Max length for truncated description
  const initialVisibleTrees = 6; // Initial number of trees to display
  const [showAll, setShowAll] = useState(false);

  // Function to truncate description
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + "...";
  };

  // Slice the treeDetails array based on showAll state
  const displayedTrees = showAll
    ? treeDetails
    : treeDetails.slice(0, initialVisibleTrees);

  // Function to toggle showAll state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div
        className="relative w-full h-[80.5vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.firstnaukri.com/collegedir/index.php/MediaService/getCollegePhoto/colid/52545ad5a6fcdda9d0bc6df3be224c1cbceb69fcb0f6effc/curid/4183')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="card text-center p-6 bg-green-900 hover:bg-opacity-30 bg-opacity-15 backdrop-blur-md rounded-lg w-[50vw] h-[30vh] shine-overlay">
            <div className="absolute inset-0 shine"></div>
            <h2 className="relative z-10 text-4xl font-bold text-white">
              Welcome to Our Tree Insights
            </h2>
            <p className="relative z-10 text-2xl font-medium text-white mt-5">
              A Green Haven with 10,719 Tall Trees and 100,000 Flourishing
              Plants
            </p>
          </div>
        </div>
      </div>

      <section className="p-8 max-w-6xl m-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            key={1}
            className="shadow-md text-gray-900 rounded-lg hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] flex flex-col gap-2 cursor-pointer w-full h-[8rem] relative overflow-hidden group"
            // onClick={() => navigate(`/tree/${tree.id}`)}
          >
            <img
              src="https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/worcestershire-herefordshire/places/clent-hills/library/autumn/beech-tree-clent-hills-worcestershire-1591489.jpg"
              alt="Alt text for accessibility"
              className="w-full h-full object-cover rounded-lg filter brightness-75 transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="w-full h-[8rem] absolute text-center top-[50%] -translate-y-[20%]">
              <h3 className="text-4xl font-semibold px-4 text-white">Trees</h3>
            </div>
          </div>
          <div
            key={2}
            className="shadow-md text-gray-900 rounded-lg hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] flex flex-col gap-2 cursor-pointer w-full h-[8rem] relative overflow-hidden group"
            // onClick={() => navigate(`/tree/${tree.id}`)}
          >
            <img
              src="https://www.loveyourlandscape.org/media/20179/landscaped-lawn-000016479307_large.jpg"
              alt="Alt text for accessibility"
              className="w-full h-full object-cover rounded-lg filter brightness-75 transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="w-full h-[8rem] absolute text-center top-[50%] -translate-y-[20%]">
              <h3 className="text-4xl font-semibold px-4 text-white">Shrubs</h3>
            </div>
          </div>
          <div
            key={3}
            className="shadow-md text-gray-900 rounded-lg hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] flex flex-col gap-2 cursor-pointer w-full h-[8rem] relative overflow-hidden group"
            // onClick={() => navigate(`/tree/${tree.id}`)}
          >
            <img
              src="https://grocycle.com/wp-content/uploads/2021/07/growing-herbs-for-profit-cover-pic.jpg"
              alt="Alt text for accessibility"
              className="w-full h-full object-cover rounded-lg filter brightness-75 transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="w-full h-[8rem] absolute text-center top-[50%] -translate-y-[20%]">
              <h3 className="text-4xl font-semibold px-4 text-white">Herbs</h3>
            </div>
          </div>
          <div
            key={4}
            className="shadow-md text-gray-900 rounded-lg hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] flex flex-col gap-2 cursor-pointer w-full h-[8rem] relative overflow-hidden group"
            // onClick={() => navigate(`/tree/${tree.id}`)}
          >
            <img
              src="https://www.thompson-morgan.com/static-images/tandm/static-articles/top-10-climbing-plants/20220622_tm_clematis_montana_mayleen.jpg"
              alt="Alt text for accessibility"
              className="w-full h-full object-cover rounded-lg filter brightness-75 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="w-full h-[8rem] absolute text-center top-[50%] -translate-y-[20%]">
              <h3 className="text-4xl font-semibold px-4 text-white">
                Climber
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 max-w-6xl m-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-6">
          Popular Trees and Plants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedTrees.map((tree) => (
            <div
              key={tree.id}
              className="bg-white shadow-md text-gray-900 rounded-lg hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] flex flex-col gap-2 pb-4 cursor-pointer"
              onClick={() => navigate(`/tree/${tree.id}`)}
            >
              <img
                src={tree.image} //"https://growbilliontrees.com/cdn/shop/articles/Banyan_tree-2.jpg?v=1704282822"
                alt={tree.name} // Alt text for accessibility
                className="w-full h-[15rem] object-cover rounded-lg"
              />
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold px-4">{tree.name}</h3>
                <div className="px-3 py-0.5 bg-green-300 text-sm mr-4 mt-1.5 text-green-900 rounded-full">
                  {tree.type}
                </div>
              </div>
              <p className="px-4">
                {truncateDescription(tree.description, maxLength)}
              </p>
            </div>
          ))}
        </div>
        {/* Show More button logic */}
        {!showAll && (
          <div className="mt-6 flex justify-center">
            <div
              className="flex gap-3 text-gray-900 cursor-pointer hover:bg-gray-200 font-medium py-2 px-4 rounded-md"
              onClick={toggleShowAll}
            >
              <img
                src="https://www.shareicon.net/data/512x512/2015/08/19/87500_down_512x512.png"
                alt="down image"
                width={20}
              />
              <p>Show More</p>
            </div>
          </div>
        )}
        {/* Hide Trees button logic */}
        {showAll && (
          <div className="mt-6 flex justify-center">
            <div
              className="flex gap-3 justify-center items-center text-gray-900 hover:bg-gray-200 cursor-pointer font-medium py-2 px-4 rounded-md"
              onClick={toggleShowAll}
            >
              <img
                src="https://www.shareicon.net/data/512x512/2015/08/19/87500_down_512x512.png"
                alt="down image"
                width={20}
                style={{ transform: "rotate(180deg)" }}
              />
              <p>Show Less</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
