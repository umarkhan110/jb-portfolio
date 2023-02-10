const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>
        {/* About page title */}

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite  dark:text-color-910 leading-7">
              As a seasoned Fullstack, Web, and Mobile Application Developer with extensive industry experience spanning over eight years, I possess a demonstrated ability to deliver superior outcomes in an expeditious and proficient manner. My expertise encompasses a keen eye for design and an unwavering focus on user experience, enabling me to effectively collaborate with clients to comprehend their specific requirements and provide solutions that surpass their anticipations
              </p>
              {/* <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                My aim is to bring across your message and identity in the most
                creative way. I created web design for many famous brand
                companies.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      {/* End pt-12 */}
    </>
  );
};

export default Intro;
