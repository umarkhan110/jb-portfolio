import dynamic from "next/dynamic";
import SidebarInfo from "../components/about/SidebarInfo";
import HeaderNavigation from "../components/header/HeaderNavigation";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Works2 from "../components/works/Works2";
import Seo from "../components/seo/Seo";

const index = ({
  sidebarData,
  workData, 
}) => {
  return (
    <section className="bg-gray dark:bg-[#1D1D1D] min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <Seo pageTitle="Works" />
      {/* End Head for Seo */}

      <Header />
      {/* End header */}

      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[50px]">
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-48">
          {/* profile sidebar */}
          <SidebarInfo data={sidebarData}/>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <HeaderNavigation />

          <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
            <div data-aos="fade">
              <div className="container mb-8   px-4 sm:px-5 md:px-10 lg:px-[60px]">
                <div className="py-12">
                  <h2 className="after-effect  after:left-48 mt-12  lg:mt-0">
                    Portfolio
                  </h2>
                  <Works2 data={workData}/>
                </div>
              </div>
              {/* End Portfolio */}

              {/* <Footer /> */}
              {/* Common Footer call here */}
            </div>
            {/* End fade */}
          </div>
          {/* End common-wrap */}
        </div>
      </div>
      {/* End main continer */}
    </section>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

export async function getStaticProps() {
  
  // Fetch data from external API
  // const url = "http://100.26.169.21:1337";
  const url = "http://admin.junaidmalik.net:1337";
  // const domain = "https://www.hautelogic.net";
  const res = await fetch(`${url}/api/home-page?populate=*`);
  const sidebarData = await res.json();
  const resWorksData = await fetch(`${url}/api/works?populate=*`);
  const workData = await resWorksData.json();

  // Pass data to the page via props
  return {
    props: {
      sidebarData,
      workData,  
    },
    revalidate: 10,
  };
}