import { useTheme } from "next-themes";
import Image from "next/image";
import addressData from "../../data/addressData";

const AddressTwo = ({data}) => {
  const { theme, setTheme } = useTheme();

  const addressData = [
    {
      id: "01",
      icon: "/images/contact/phone-call 1.png",
      title: "Phone ",
      info: (
        <>
          <p>
            <a
              href="tel:+1 4376776968"
              className="text-gray-lite text-lg dark:text-[#A6A6A6] "
            >
              {data.data.attributes.Phone}
            </a>
          </p>
  
          
        </>
      ),
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: "/images/contact/email 1.png",
      title: "Email ",
      info: (
        <>
          <p>
            <a
              href="junaidmalikkakayzai@gmail.com"
              className="text-gray-lite text-lg dark:text-[#A6A6A6] "
            >
              {data.data.attributes.Email}
            </a>
          </p>
  
         
        </>
      ),
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: "/images/contact/map 1.png",
      title: "Address ",
      info: (
        <>
          <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
            Maount View, Oval
          </p>
          <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
            Road, New York, USA
          </p>
        </>
      ),
      bg: "#F2F4FF",
    },
  ];
  

  return (
    <>
      {addressData.slice(0, 2).map((item, i) => (
        <div
          key={i}
          style={{
            background: `${theme === "dark" ? "#212425" : item?.bg}`,
          }}
          className={`flex flex-wrap md:flex-nowrap lg:flex-wrap dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl ${item.id === "02"? "md:col-span-2": "col-span-1"}`}
        >
          <span className="w-8 mt-2">
            <Image
              src={item.icon}
              width={30}
              height={20}
              alt="icon"
              className="text-4xl dark:text-white"
            />
          </span>
          <div className="space-y-2">
            <p className="text-xl font-semibold dark:text-white">
              {/* {item?.title} : */}
            </p>
            {item?.info}
          </div>
        </div>
      ))}
    </>
  );
};

export default AddressTwo;
