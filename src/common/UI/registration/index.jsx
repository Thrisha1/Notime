import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React,{useEffect} from "react";

const Index = () => {
    
    return (
        <div className="flex">
            <iframe
                className="airtable-embed rounded-lg bg-transparent"
                src="https://airtable.com/embed/app6CHsYoG1ehpXei/shr6X0LRdOp2Ad9NC?backgroundColor=white"
                // frameBorder="0"
                onWheel={() => {}} // You can handle mouse wheel events here if needed
                width="100%"
                height="620"
                style={{ border: "1px solid #ccc" }}
            ></iframe>
        </div>
    );
};

export default Index;
