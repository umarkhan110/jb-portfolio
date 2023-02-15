import { Line } from "rc-progress";
import React from "react";

const LineItem = ({ data }) => {
  const lineArray = [
    {
      id: 1,
      color: "#FF6464",
      name: "Full-Stack",
      number: "80",
    },
    {
      id: 2,
      color: "#9272D4",
      name: "Mobile Development (Flutter)",
      number: "70",
    },
    {
      id: 3,
      color: "#5185D4",
      name: "Project Management",
      number: "70",
    },
    {
      id: 4,
      color: "#CA56F2",
      name: "UX/UI Design",
      number: "70",
    },
  ];

  return (
    <>
      {data.data.map((item) => (
        <div className=" mb-7 evenOdd1" key={item.id}>
          <div className="flex justify-between py-1">
            <span className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
            {item.attributes.Skill_Name}
            </span>
            <span className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
              {item.attributes.Percentage}%
            </span>
          </div>

          <Line
            percent={item.attributes.Percentage}
            strokeWidth={1}
            trailWidth={1}
            // trailColor={`${local === "dark" ? "#1C1C1C" : "#EDF2F2"}`}
            strokeColor="evenOdd1"
          />
        </div>
      ))}
    </>
  );
};

export default LineItem;
