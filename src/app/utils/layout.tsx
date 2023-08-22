import React from "react";
import HomeHeader from "@/components/pc/HomeHeader";

interface HomeContainerProps {
    children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeContainerProps) => {

    return (
        <section>
            <HomeHeader />
            {children}
        </section>
    )
}

export default HomeLayout;
