import { useParams } from "react-router-dom";
import treeDetails from "../data/treeDetails";

const TreeDetails = () => {
  const { id } = useParams();
  const tree = treeDetails.find((tree) => tree.id === parseInt(id));

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{tree.name}</h2>
      <p>{tree.description}</p>
      <p>{tree.uses}</p>
      <p>{tree.environment}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TreeDetails;
