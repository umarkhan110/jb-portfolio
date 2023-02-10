const Tag = () => {
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
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
