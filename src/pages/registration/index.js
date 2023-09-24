import React from "react";
import Navbar from "../../common/components/Navbar";
import Registration from "../../common/UI/registration";

const Index = () => {
    return (
        <div className="w-full">
            <Navbar />
            <h1>Registration</h1>
            <div className="flex w-full justify-between">
                <div className="w-1/2">
                    <h1>Registration</h1>

                </div>
                <div className="w-1/2">
                    <Registration />
                </div>
            </div>

        </div>
    );
};

export default Index;
