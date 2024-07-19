import { Link, useParams } from "react-router-dom";
import treeDetails from "../data/treeDetails";

const TreeDetails = () => {
  const { id } = useParams();
  const tree = treeDetails.find((tree) => tree.id === parseInt(id));

  return (
    <div className="w-full h-full">
      <img
        src={tree.image}
        alt="background"
        className="w-full object-cover h-screen absolute -z-10"
      />
      <div className="max-w-5xl mx-auto shadow-lg h-[92vh] z-10 bg-white opacity-80">
        <div className="flex p-10 gap-5 w-full justify-center items-start ">
          <div className="w-[50%] p-2">
            <img
              src={tree.image}
              alt="tree image"
              className="min-w-[200px] h-[250px] bg-cover mx-auto"
            />
          </div>
          <div className="w-[50%] font-medium">
            <div className="flex justify-start items-center mb-4">
              <h2 className="text-3xl font-bold">{tree.name}</h2>
              <span className="text-2xl px-2">|</span>
              <p className="font-medium pt-1 text-xl text-gray-800">
                {tree.scientificName}
              </p>
              <div className="px-2 py-0.5 bg-green-300 text-sm ml-4 mt-1.5 text-green-900 rounded-full">
                {tree.type}
              </div>
            </div>
            <p>{tree.description}</p>
            <p>{tree.uses}</p>
            <p>{tree.environment}</p>
            {/* Add more details as needed */}
          </div>
        </div>
        <div className="flex justify-center bottom-0 mt-8">
          <Link
            to={tree.wikipediaLink}
            target="_blank"
            className="bg-green-500 text-black font-medium px-4 py-2 rounded-md font
        -medium hover:bg-green-400 transition-all duration-300 ease-in-out"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TreeDetails;
