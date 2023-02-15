import Home from "./home";

const MainRoot = ({
  sidebarData,
  aboutData,
  clientData,
  serviceData,
  // skillData,
  // resumeData,
  // knowldegeData,
  // contactData,
}) => {
  
  return (
    <Home
    sidebarData={sidebarData}
      aboutData={aboutData}
      clientData={clientData}
      serviceData={serviceData}
      // skillData={skillData}
      // resumeData={resumeData}
      // knowldegeData={knowldegeData}
      // contactData={contactData}
    />
  );
};


export async function getStaticProps() {
  
  // Fetch data from external API
  const url = "http://100.26.169.21:1337";
  // const domain = "https://www.hautelogic.net";
  const res = await fetch(`${url}/api/home-page?populate=*`);
  const sidebarData = await res.json();
  const resAboutData = await fetch(`${url}/api/about?populate=*`);
  const aboutData = await resAboutData.json();
  const resServiceData = await fetch(`${url}/api/services?populate=*`);
  const serviceData = await resServiceData.json();
  const resClientData = await fetch(`${url}/api/clients?populate=*`);
  const clientData = await resClientData.json();
  // const resResumesData = await fetch(`${url}/api/resumes?populate=*`);
  // const resumeData = await resResumesData.json();
  // const resSkillData = await fetch(`${url}/api/skills?populate=*`);
  // const skillData = await resSkillData.json();
  // const resknowldegesData = await fetch(`${url}/api/knowldeges?populate=*`);
  // const knowldegeData = await resknowldegesData.json();

  // const resContactData = await fetch(`${url}/api/contact?populate=*`);

  // const contactData = await resContactData.json();

  /// sitemap dynamic routes

  // Pass data to the page via props
  return {
    props: {
      sidebarData,
      aboutData,
      clientData,
      serviceData,
      // skillData,
      // resumeData,
      // knowldegeData,
      // contactData,
    },
   
  };
}

  export default MainRoot;