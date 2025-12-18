import React from "react"

export default function LikeSubLayout({ 
    children 
} : {
    children: React.ReactNode    
}) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-50">
            {children}
        </div>
    );
};