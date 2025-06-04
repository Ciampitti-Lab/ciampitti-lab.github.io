"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ConditionalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Check if we're on an individual project page (but not the projects listing page)
    const isProjectPage = pathname.startsWith('/projects/') && pathname !== '/projects';

    if (isProjectPage) {
        // No header/footer for individual project pages
        return <main className="min-h-screen">{children}</main>;
    }

    // Normal layout with header/footer for all other pages
    return (
        <>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </>
    );
} 