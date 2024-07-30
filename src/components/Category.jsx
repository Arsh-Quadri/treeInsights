/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Category = ({ treeDetails }) => {
  const { cat } = useParams();
  const navigate = useNavigate();
  const maxLength = 75; // Max length for truncated description
  //   const initialVisibleTrees = 6; // Initial number of trees to display
  const [showAll, setShowAll] = useState(false);
  // Function to truncate description
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + "...";
  };
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let filteredTreeDetails = [];
  if (cat == "trees") {
    filteredTreeDetails = treeDetails.filter((tree) => tree.type == "Tree");
  } else if (cat === "shrubs") {
    filteredTreeDetails = treeDetails.filter(
      (tree) =>
        tree.type === "Shrub" ||
        tree.type === "Plant" ||
        tree.type === "Perennial"
    );
  } else if (cat == "herbs") {
    filteredTreeDetails = treeDetails.filter((tree) => tree.type == "Herb");
  } else if (cat == "climber") {
    filteredTreeDetails = treeDetails.filter(
      (tree) => tree.type == "Creeper/Climber"
    );
  }
  console.log(filteredTreeDetails);
  //   console.log(cat);
  return (
    <div>
      <section className="p-8 max-w-6xl m-auto">
        <h2 className="text-4xl font-bold text-green-800 mb-6">
          {capitalizeFirstLetter(cat)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredTreeDetails.map((tree) => (
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

export default Category;
