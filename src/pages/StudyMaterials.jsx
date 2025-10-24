import React, { useState, useEffect } from "react";
import { FaDownload, FaBook, FaGraduationCap, FaClock, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "../utils/api";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading";

const StudyMaterials = () => {
  const { user } = useAuth()
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const res = await axios.get("/study");
        setMaterials(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching materials:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMaterials();
  }, []);

  // Delete material
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/study/${id}`);

      // remove from UI without re-fetching everything
      setMaterials((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error("Error deleting material:", err);
      alert("Failed to delete material. Try again.");
    }
  };


  const handleOpen = (fileUrl) => {
    window.open(fileUrl, "_blank"); // Open in new tab
  };

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-[#043D3B]/5 to-[#043D3B]/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Study Materials</h1>

        {loading ? <Loading message="Loading materials..." /> : (
          materials.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-500">No study materials available.</p>
            </div>
          ) : (
            <AnimatePresence>
              <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materials.map((m) => (
                  <motion.div key={m._id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-gray-100">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <FaBook className="text-xl text-[#043D3B]" />
                        <span className="px-3 py-1 bg-[#043D3B]/10 text-[#043D3B] text-sm font-medium rounded-full">Class {m.className}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{m.materialName}</h3>
                      <p className="text-gray-600 mb-2"><strong>Subject:</strong> {m.subject}</p>
                      <p className="text-gray-500 text-sm flex items-center"><FaClock className="mr-2" />Uploaded: {new Date(m.uploadedAt).toLocaleDateString()}</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button onClick={() => handleOpen(m.pdfFile)} className="flex-1 bg-gray-700 text-white py-2 rounded-lg flex justify-center items-center gap-2">
                        Open PDF
                      </button>
                      {user.role === "admin" && (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleDelete(m._id)}
                          className="px-4 py-3 bg-gradient-to-r from-red-600 to-red-800  text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-all duration-300"
                        >
                          <FaTrash className="text-lg" />
                        </motion.button>
                      )}

                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )
        )}
      </div>
    </div>
  );
};

export default StudyMaterials;
