import { useState } from "react";

const TreeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    uses: "",
    environment: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      dataToSubmit.append(key, formData[key]);
    });

    fetch("/", {
      method: "POST",
      body: dataToSubmit,
    })
      .then(() => alert("Tree details submitted successfully!"))
      .catch((error) => console.error("Error submitting form: ", error));
  };
  return (
    <form
      name="add-tree-form"
      method="POST"
      data-netlify="true"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 bg-white shadow-md rounded"
    >
      <input type="hidden" name="form-name" value="add-tree-form" />
      <div className="mb-4">
        <label className="block text-gray-700">Tree Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Uses</label>
        <textarea
          name="uses"
          value={formData.uses}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Environment</label>
        <input
          type="text"
          name="environment"
          value={formData.environment}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image</label>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TreeForm;
