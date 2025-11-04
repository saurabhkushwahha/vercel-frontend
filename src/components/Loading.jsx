import { useEffect } from "react";
import { Loader } from "lucide-react";

const Loading = ({ size = 12 }) => {
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
            }
            .animate-fadeIn {
                animation: fadeIn 0.3s ease-out;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);
    const sizeClass = typeof size === "number" ? `h-${size} w-${size}` : size;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#043D3B] to-[#0A5C59] bg-opacity-95 z-50">
            <div className="relative">
                <div className="absolute inset-0 rounded-full border-4 border-teal-200/30 animate-ping"></div>
                <div className="relative">
                    <Loader className={`animate-spin text-[#043D3B] ${sizeClass}`} />
                </div>
            </div>

        </div>
    );
};

export default Loading;
