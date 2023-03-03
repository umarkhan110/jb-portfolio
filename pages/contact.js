import dynamic from "next/dynamic";
import SidebarInfo from "../components/about/SidebarInfo";
import HeaderNavigation from "../components/header/HeaderNavigation";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/contact/ContactForm";
import AddressTwo from "../components/contact/AddressTwo";
import Seo from "../components/seo/Seo";

const index = ({
  sidebarData,
  contactData
}) => {
  return (
    <section className="bg-gray dark:bg-[#1D1D1D] min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <Seo pageTitle="Contact" />
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
              <div className="container mb-8  px-4 sm:px-5 md:px-10 lg:px-[60px]">
                <div className="pt-12 pb-6">
                  <h2 className="after-effect after:left-48 mt-12  lg:mt-0 mb-12 md:mb-[30px]">
                    Contact
                  </h2>
                  {/* End contact address block */}
                  <div className="grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 mb-[40px] grid gap-x-5 gap-y-7">
                    <AddressTwo  data={contactData}/>
                  </div>
                  {/* End contact address block */}

                  <ContactForm />
                  {/* End contact form */}
                </div>
              </div>
              {/* End Portfolio */}
            </div>
            {/* End fade */}
            {/* <Footer /> */}
            {/* Common Footer call here */}
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
  const resContactData = await fetch(`${url}/api/contact?populate=*`);
  const contactData = await resContactData.json();
  

  // Pass data to the page via props
  return {
    props: {
      sidebarData,
      contactData, 
    },
    revalidate: 10,
  };
}