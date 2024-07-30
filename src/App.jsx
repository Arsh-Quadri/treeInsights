import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth, db } from "../backend/firebase";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TreeDetails from "./components/TreeDetails";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup"; // Import Signup component
import { useEffect, useState } from "react";
import Category from "./components/Category";

const App = () => {
  const [user, setUser] = useState(null);

  const [treeDetails, setTreeDetails] = useState([]);

  const fetchTreeDetails = async () => {
    try {
      const querySnapshot = await db
        .collection("Initial-Tree-Data")
        .orderBy("id")
        .get();
      const trees = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      trees.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
      setTreeDetails(trees);
    } catch (error) {
      console.error("Error fetching tree details: ", error);
    }
  };
  console.log(treeDetails);
  useEffect(() => {
    fetchTreeDetails();
  }, []);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home treeDetails={treeDetails} />} />
            <Route
              path="/tree/:id"
              element={<TreeDetails treeDetails={treeDetails} />}
            />
            <Route
              path="/categories/:cat"
              element={<Category treeDetails={treeDetails} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
