import react from 'react';
import React from "react";

const Feature = ({point}) => {
    return(
        <div className="course-point flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
            </svg>

            {point}
        </div>
    )
}
export default Feature