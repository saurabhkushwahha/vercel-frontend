import React, { useEffect, useState } from "react";
import axios from "../../utils/api";
import Modal from "../../components/Modal";

const GetInfo = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedCard, setExpandedCard] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`/services`);
        const fetchedServices = res.data.data || [];
        setServices(fetchedServices);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Unable to load services. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };


  const handleDeleteClick = (id) => {
    setDeletingId(id);
    setIsModalOpen(true);
  };

  const deleteService = async (id) => {
    try {
      setDeletingId(id);
      await axios.delete(`/services/${id}`);
      setServices((prev) => prev.filter((s) => s._id !== id));
      setIsModalOpen(false);
    } catch (err) {
      console.error("Failed to delete service:", err);
      setError("Failed to delete submission. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#043D3B] to-[#0A5C59] text-white">
        Loading student submissions...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#043D3B] to-[#0A5C59] text-white">
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#043D3B] to-[#0A5C59] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
            Student Submissions
          </h1>

          {services.length === 0 ? (
            <div className="bg-white p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                No submissions yet
              </h3>
              <p className="text-gray-600 mt-2">
                Submitted admission forms will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {services.map((service) => (
                <div
                  key={service._id}
                  className="bg-white rounded-xl shadow p-5 transition hover:shadow-lg"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-semibold">{service.name}</h2>
                      <p className="text-gray-600">{service.parentName}</p>
                    </div>
                    <button
                      onClick={() => toggleExpand(service._id)}
                      aria-expanded={expandedCard === service._id}
                      className="text-sm text-[#0A5C59] font-medium flex items-center gap-2"
                    >
                      <span className={`transform transition-transform duration-200 ${expandedCard === service._id ? "rotate-180" : "rotate-0"}`}>
                        ▼
                      </span>
                      <span className="sr-only">Toggle details</span>
                    </button>
                  </div>
                  <div
                    className="mt-3 text-sm text-gray-700 space-y-1 overflow-hidden"
                    style={{
                      maxHeight: expandedCard === service._id ? "400px" : "0px",
                      transition: "max-height 300ms ease",
                    }}
                    aria-hidden={expandedCard !== service._id}
                  >
                    <div className="py-1">
                      <p>
                        <strong>Email:</strong> {service.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {service.phone}
                      </p>
                      <p>
                        <strong>Previous School:</strong> {service.previousSchool || "N/A"}
                      </p>
                      <p className="text-gray-500 text-xs">
                        Submitted on {service.createdAt ? new Date(service.createdAt).toLocaleString() : "-"}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleDeleteClick(service._id)}
                        disabled={deletingId === service._id}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-60"
                      >
                        {deletingId === service._id ? (
                          <span className="text-xs">Deleting...</span>
                        ) : (
                          <span className="text-sm">Delete</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          deleteNotification={() => deleteService(deletingId)}
          selectedNotificationId={deletingId}
          isModalOpen={isModalOpen}
          notification="User form"
        />
      )}
    </>
  );
};

export default GetInfo;
