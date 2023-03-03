import dynamic from "next/dynamic";
import SidebarInfo from "../components/about/SidebarInfo";
import HeaderNavigation from "../components/header/HeaderNavigation";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ResumeCardTwo from "../components/Resume/ResumeCardTwo";
import LineItem from "../components/Resume/LineItem";
import Tag from "../components/tag/Tag";
import Seo from "../components/seo/Seo";

const index = ({ sidebarData, skillData, resumeData, knowldegeData }) => {
  return (
    <section className="bg-gray dark:bg-[#1D1D1D] min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <Seo pageTitle="Resume" />
      {/* End Head for Seo */}

      <Header />
      {/* End header */}

      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[50px]">
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-48">
          {/* profile sidebar */}
          <SidebarInfo data={sidebarData} />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <HeaderNavigation />

          <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
            <div data-aos="fade">
              <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
                <div className="py-12">
                  {/*Resume page title */}
                  <h2 className="after-effect after:left-44">Resume</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                    <ResumeCardTwo data={resumeData} />
                    {/* resume items map */}
                  </div>
                </div>
              </div>
              {/* End .container for resume */}

              <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
                  <div className="col-span-1">
                    <h4 className="text-5xl dark:text-white font-medium mb-6">
                      Working Skills
                    </h4>
                    <LineItem data={skillData} />
                    {/* experience percent items */}
                  </div>
                  <div className="col-span-1">
                    <h4 className="text-5xl dark:text-white font-medium mb-8">
                      Knowledges
                    </h4>

                    <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
                      <Tag data={knowldegeData} />
                    </div>
                    {/* Knowledges items */}
                  </div>
                </div>
              </div>
              {/* End Skills */}

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
  const url = "http://admin.junaidmalik.net:1337";
  // const domain = "https://www.hautelogic.net";
  const res = await fetch(`${url}/api/home-page?populate=*`);
  const sidebarData = await res.json();
  const resResumesData = await fetch(`${url}/api/resumes?populate=*`);
  const resumeData = await resResumesData.json();
  const resSkillData = await fetch(`${url}/api/skills?populate=*`);
  const skillData = await resSkillData.json();
  const resknowldegesData = await fetch(`${url}/api/knowldeges?populate=*`);
  const knowldegeData = await resknowldegesData.json();

  // Pass data to the page via props
  return {
    props: {
      sidebarData,
      skillData,
      resumeData,
      knowldegeData,
    },
    revalidate: 10,
  };
}
