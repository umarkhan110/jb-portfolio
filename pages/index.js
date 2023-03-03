import Home from "./home";
const MainRoot = ({ sidebarData, aboutData, clientData, serviceData }) => {
 
  return (
    <Home
      sidebarData={sidebarData}
      aboutData={aboutData}
      clientData={clientData}
      serviceData={serviceData}
      />
  );
};

export async function getStaticProps() {
  // Fetch data from external API
  const url = "http://admin.junaidmalik.net:1337";

  const res = await fetch(`${url}/api/home-page?populate=*`);
  const sidebarData = await res.json();
  const resAboutData = await fetch(`${url}/api/about?populate=*`);
  const aboutData = await resAboutData.json();
  const resServiceData = await fetch(`${url}/api/services?populate=*`);
  const serviceData = await resServiceData.json();
  const resClientData = await fetch(`${url}/api/clients?populate=*`);
  const clientData = await resClientData.json();

  // Pass data to the page via props
  return {
    props: {
      sidebarData,
      aboutData,
      clientData,
      serviceData,
    },
    revalidate: 10,
  };
}

export default MainRoot;
