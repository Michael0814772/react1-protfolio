import React, { useState } from "react";
import placeOfWork from "../work-history/placeOfWork";
import workFunctions from "../work-history/workFunctions";

const WorkHistory = () => {
  const [tabChange, setTabChange] = useState(1);

  const toogleTab = (index) => {
    setTabChange(index);
  };

  return (
    <div
      className="universalbodypadding sm:h-fit"
      data-aos="flip-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="w-full sm:m-auto">
        <div className="gap-1 md:gap-5 mb-8 sm:mx-auto sm:w-10/12">
          <div className="flex items-center">
            <h1 className="text-base md:text-3xl flex items-center text-textcl4 font-bold mr-3">
              <span className="mr-3 text-textcl1 text-base md:text-2xl md:mt-1">
                02.
              </span>
              Where I’ve Worked
            </h1>
            <div className="h-height1px w-20 md:w-48 bg-textcl5 mt-2" />
          </div>

          <div className="w-full flex flex-col sm:flex-row mt-10">
            <div className="w-full sm:w-52 sm:pr-8">
              <ul className="w-full flex flex-row sm:flex-col overflow-auto">
                {placeOfWork.map((place) => (
                  <li
                    className={`py-2 px-2 sm:px-5 border-l-2 ${
                      tabChange === place.id
                        ? "border-textcl1 text-textcl1"
                        : "border-textcl5 text-textcl5"
                    } text-sm cursor-pointer`}
                    key={place.id}
                    onClick={() => toogleTab(place.id)}
                  >
                    {place.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-9/12 mt-5 sm:mt-0">
              {workFunctions.map((work) => (
                <div
                  key={work.id}
                  hidden={work.id !== tabChange}
                  className="w-full"
                >
                  <h1 className="text-textcl4 font-extrabold text-xl sm:text-2xl">
                    {work.role}
                  </h1>
                  <p className="text-textcl3 text-sm">{work.year}</p>
                  <ul className="mt-3">
                    <li className="py-2 text-textcl3 text-sm sm:text-base">
                      <span className="text-textcl1 mr-2">▹</span>
                      {work.functions.function1}
                    </li>
                    <li className="pb-1 text-textcl3 text-sm sm:text-base">
                      <span className="text-textcl1 mr-2">▹</span>
                      {work.functions.function2}
                    </li>
                    <li className="py-1 text-textcl3 text-sm sm:text-base">
                      <span className="text-textcl1 mr-2">▹</span>
                      {work.functions.function3}
                    </li>
                    <li
                      className="py-1 text-textcl3 text-sm sm:text-base"
                      hidden={work.functions.function4 === undefined}
                    >
                      <span className="text-textcl1 mr-2">▹</span>
                      {work.functions.function4}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
