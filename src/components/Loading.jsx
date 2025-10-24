import React from "react";
import { Loader } from "lucide-react";

const Loading = ({ message = "Loading...", size = 12 }) => {
    const sizeClass = typeof size === "number" ? `h-${size} w-${size}` : size;
    return (
        <div className="flex flex-col items-center justify-center py-8">
            <Loader className={`animate-spin text-[#043D3B] ${sizeClass}`} />
            {message && <p className="mt-3 text-gray-600">{message}</p>}
        </div>
    );
};

export default Loading;
