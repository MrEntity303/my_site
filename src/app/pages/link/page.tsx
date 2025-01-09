import React from "react";
import LinkCard from "@/ui/link/LinkCard";
import linkData from "@/ui/link/linkData";

const LinkPage: React.FC = () => {
    return(
        <section id="links" className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center p-8">Links</h1>
            <div className="flex flex-wrap justify-center gap-4 xl:px-64">
                {linkData.map((link, index) => (
                    <LinkCard key={index} name={link.name} imgIcon={link.imgIcon} />
                ))}
            </div>
        </section>
    );
}
export default LinkPage;