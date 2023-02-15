const Tag = ({data}) => {
  const tagList = [
    
    "MERN Stack",
"React.js",
"Node.js",
".NET",
"Flutter",
"Web Development",
"App Development",
"Project Management",

  ];
  
  return (
    <>
      {data.data.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
         {tag.attributes.Knowldege}
        </button>
      ))}
    </>
  );
};

export default Tag;
