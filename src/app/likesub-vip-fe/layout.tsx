import React from "react"

import ClientSidebar from "./components/ClientSidebar";
import ClientHeader from "./components/ClientHeader";

export default function LikeSubLayout({ 
    children 
} : {
    children: React.ReactNode    
}) {
    return (
        <div className="flex min-h-screen bg-zinc-50">
            {/* Sidebar */}
            <ClientSidebar />

            {/* Main Content */}
            <div className="flex-1 transition-all duration-300 ease-in-out bg-amber-100">
                {/* Header */}
                <ClientHeader />

                {/* Page Content */}
                <div className="p-4 mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};