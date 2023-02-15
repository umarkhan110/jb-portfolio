import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Social = ({props}) => {
  const socialContent = [
    {
      id: 1,
      link: `${props.data.attributes.Linkedin_Link}`,
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
    {
      id: 2,
      link: `${props.data.attributes.Facebook_Link}`,
      icon: <FaFacebookF />,
      iconClass: "text-[#1773EA]",
    },
    {
      id: 3,
      link: `${props.data.attributes.Twitter_Link}`,
      icon: <FaTwitter />,
      iconClass: "text-[#1C9CEA]",
    },
    // {
    //   id: 3,
    //   link: "https://dribbble.com/",
    //   icon: <FaDribbble />,
    //   iconClass: "text-[#e14a84]",
    // },
    
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
