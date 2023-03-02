// import { data } from "autoprefixer";
import { useTheme } from "next-themes";
import Image from "next/image";
import serviceData from "../../data/serviceData";

const Service = ({data}) => {
  const { theme, setTheme } = useTheme();
// console.log(data)
  return (
    <>
      {data.data.map((item) => (
        <div
          className="about-box dark:bg-transparent evenOdd"
          key={item.id}
          style={{
            background: `${theme === "dark" ? "transparent" : "evenOdd"}`,
          }}
        >
          <Image
            className="w-10 h-10 object-contain  block"
            // src={`/images/icons/icon-${item.id}.svg`}
            src={item.attributes.Icon.data.attributes.url}
            width={40}
            height={40}
            alt="icon"
          />

          <div className="space-y-2">
            <h3 className="dark:text-white text-xl font-semibold">
            {item.attributes.Title}
            </h3>
            <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
            {item.attributes.Description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service;
