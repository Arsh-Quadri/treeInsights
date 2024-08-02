import { useState } from "react";
import { db, storage } from "../../backend/firebase"; // Adjust path as necessary
import { useNavigate } from "react-router-dom";

const TreeForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [uses, setUses] = useState("");
  const [environment, setEnvironment] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image");
      return;
    }

    setUploading(true);

    try {
      // Upload image to Firebase Storage
      const imageRef = storage.ref(`images/${image.name}`);
      await imageRef.put(image);
      const imageUrl = await imageRef.getDownloadURL();

      // Save data to Firestore
      await db.collection("userAddedData").add({
        name,
        location,
        description,
        uses,
        environment,
        image: imageUrl,
      });

      alert("Thankyou for growning us, Your data is in the process...");
      setName("");
      setLocation("");
      setDescription("");
      setUses("");
      setEnvironment("");
      setImage(null);
      navigate("/");
    } catch (error) {
      console.error("Error adding tree:", error);
      alert("Error adding tree. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="w-full h-fit bg-cover bg-center py-10" //h-[165vh] md:h-[140vh]
      style={{
        backgroundImage:
          "url('https://www.firstnaukri.com/collegedir/index.php/MediaService/getCollegePhoto/colid/52545ad5a6fcdda9d0bc6df3be224c1cbceb69fcb0f6effc/curid/4183')",
      }}
    >
      <div className="w-[90%] md:w-[60%] h-fit pb-8 px-5 py-10 md:px-10 relative mx-auto rounded-xl shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] shadow-black bg-white opacity-90">
        <h1 className="text-2xl md:text-3xl font-[750] text-green-900 relative py-1 left-0 text-left">
          Add a New Tree
        </h1>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mt-3">
            <h1 className="text-md font-[600] relative left-0 text-left mb-1">
              Name
            </h1>
            <input
              type="text"
              value={name}
              className="bg-transparent outline-none placeholder-green-800 pl-2 py-2 w-full rounded-xl border-2 border-[#E8DECF]"
              placeholder="Tree Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <h1 className="text-md font-[600] relative left-0 text-left mb-1">
              Location
            </h1>
            <input
              type="text"
              value={location}
              className="bg-transparent outline-none placeholder-green-800 pl-2 py-2 w-full rounded-xl border-2 border-[#E8DECF]"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <h1 className="text-md font-[600] relative left-0 text-left mb-1">
              Description
            </h1>
            <textarea
              value={description}
              className="bg-transparent outline-none placeholder-green-800 pl-2 py-2 w-full rounded-xl border-2 border-[#E8DECF]"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h1 className="text-md font-[600] relative left-0 text-left mb-1">
              Uses
            </h1>
            <textarea
              value={uses}
              className="bg-transparent outline-none placeholder-green-800 pl-2 py-2 w-full rounded-xl border-2 border-[#E8DECF]"
              placeholder="Uses"
              onChange={(e) => setUses(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <h1 className="text-md font-[600] relative left-0 text-left mb-1">
              Environment
            </h1>
            <textarea
              value={environment}
              className="bg-transparent outline-none placeholder-green-800 pl-2 py-2 w-full rounded-xl border-2 border-[#E8DECF]"
              placeholder="Environment"
              onChange={(e) => setEnvironment(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h1 className="text-md font-[600] relative left-0 text-left mb-1">
              Image
            </h1>
            <input
              type="file"
              className="bg-transparent outline-none pl-2 py-2 w-full rounded-xl border-2 border-[#E8DECF]"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#F28F0D] hover:bg-[#f89f2b] font-[600] px-4 py-2 rounded-lg cursor-pointer text-center mt-5"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Add Tree"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TreeForm;
