import React from "react";

const Index = () => {
    return (
        <div>
            {/*<Courses />*/}
            <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/app6CHsYoG1ehpXei/shr6X0LRdOp2Ad9NC?backgroundColor=grayDusty"
                frameBorder="0"
                onWheel={() => {}} // You can handle mouse wheel events here if needed
                width="100%"
                height="533"
                style={{ background: "transparent", border: "1px solid #ccc" }}
            ></iframe>
        </div>
    );
};

export default Index;
