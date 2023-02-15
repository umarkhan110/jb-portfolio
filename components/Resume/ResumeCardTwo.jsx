import { useTheme } from "next-themes";
import resumeData from "../../data/resumeData";

import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";

const ResumeCardTwo = ({data}) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {data.data.map((item) => (
        <div key={item.id}>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-6xl text-[#F95054]">
            {item.attributes.Education_and_Experience === "Education"?<MdOutlineBusinessCenter />:<MdOutlineSchool />}

            </div>
            <h4 className="text-5xl dark:text-white font-medium">
            {item.attributes.Education_and_Experience}
            </h4>
          </div>
          {/* end flex */}

          {item.attributes.item.map((singleItem) => (
            <div
              className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2 evenOdd"
              style={{
                background: `${
                  theme === "dark" ? "transparent" : "evenOdd"
                }`,
              }}
              key={singleItem.id}
            >
              <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                {singleItem.date}
              </span>
              <h3 className="text-xl dark:text-white"> {singleItem.title} </h3>
              <p className="dark:text-[#b7b7b7]">{singleItem.place}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ResumeCardTwo;
