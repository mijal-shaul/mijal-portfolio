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
              As an experienced UX/UI designer, I have been involved in numerous projects where I have successfully created intuitive and visually appealing interfaces that enhance user experiences. Through my expertise in Figma, I have collaborated closely with cross-functional teams to create wireframes, prototypes, and interactive designs that align with business goals and user needs.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              With my extensive experience in UX/UI design and proficiency in Figma, along with a solid foundation in HTML and CSS, I am confident that I can contribute to your team's success.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End pt-12 */}
    </>
  );
};

export default Intro;
