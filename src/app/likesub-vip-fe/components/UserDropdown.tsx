"use client";

import { useState } from "react";

function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-gray-700 cursor-pointer"
        >
            <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
            <img
                width={44}
                height={44}
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                alt="User"
            />
            </span>

            <span className="block mr-1 font-medium text-sm">
            maaitlunghau
            </span>

            <svg
            className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
            }`}
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            >
            <path
                d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg>
        </button>
        </div>
    );
}

export default UserDropdown;
