// src/app/(marketing)/layout.tsx
import React from "react";
export default function ContentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        
        <div className="max-w-4xl mx-auto pl-7 pr-5">
            <p className="bg-violet-700 text-white w-full text-center py-2">
                Sono il Layout di Contatti, che avvolge la pagina (content)
            </p>
            <main>{children}</main>
        </div>
        
    )
}
