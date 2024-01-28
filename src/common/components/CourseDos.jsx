"use client";

import { Accordion } from "flowbite-react";

function CourseDos({ datas }) {
  return (
    <Accordion collapseAll className="text-white">
      <Accordion.Panel>
        <Accordion.Title className="text-white bg-blue-500 hover:bg-blue-500 focus:bg-blue-500">
          {datas.heading}
        </Accordion.Title>
        <Accordion.Content>
          {datas.type === "list" ? (
            datas.points.map((point, index) => (
              <li type="none" key={index} className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                  />
                </svg>
                <p className="mb-2 text-white">{point}</p>
              </li>
            ))
          ) : (
            <h1>
              <p className="mb-2 text-white">{datas.points}</p>
            </h1>
          )}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default CourseDos;
