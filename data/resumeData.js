import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa";

module.exports = [
  {
    id: 1,
    title: "Education",
    icon: <MdOutlineBusinessCenter />,
    items: [
      {
        id: 1,
        date: "2006-2010",
        title: "BS. Computer Science",
        place: "First Nations University of Canada",
        bg: "#FFF4F4",
      },

      {
        id: 2,
        date: "Issued 2016",
        title: "Google Developers Certification",
        place: "Google Inc.",
        bg: "#FFF1FB",
      },

      {
        id: 3,
        date: "Issued 2020",
        title: "Mobile Web Specialist",
        place: "Google Inc.",
        bg: "#FFF4F4",
      },
    ],
  },
  {
    id: 2,
    title: "Experience",
    icon: <MdOutlineSchool />,
    items: [
      {
        id: 1,
        date: "2021 - Present",
        title: "FullStack Developer",
        place: "Integry",
        bg: "#EEF5FA",
      },

      {
        id: 2,
        date: "2019-2021",
        title: "Engineering Lead",
        place: "Jinnbyte Private Limited",
        bg: "#F2F4FF",
      },

      {
        id: 3,
        date: "2017-2019",
        title: "FullStack Developer  ",
        place: "Norgic AB",
        bg: "#EEF5FA",
      },
    ],
  },
  {
    id: 3,
    title: "Awards",
    icon: <FaAward />,
    items: [
      {
        id: 1,
        date: "2015-2017",
        title: "  Graphic Designer",
        place: "Web Graphy, Los Angeles, CA",
        bg: "#FCF4FF",
      },

      {
        id: 2,
        date: "2014 - 2015",
        title: "Jr. Web Developer",
        place: "Creative Gigs.",
        bg: "#FCF9F2",
      },

      {
        id: 3,
        date: "2015-2017",
        title: "Best Freelancer",
        place: "Fiver & Upwork Level 2 & Top Rated",
        bg: "#FCF4FF",
      },
    ],
  },
];
