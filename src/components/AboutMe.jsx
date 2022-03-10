import React from "react";

const AboutMe = () => {
  return (
    <div
      className="universalbodypadding pt-11 pb-20"
      data-aos="zoom-out-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="w-full m-auto">
        <div className="flex items-center gap-5 mb-8">
          <h1 className="text-lg md:text-3xl flex items-center text-textcl4 font-bold">
            <span className="mr-3 text-textcl1 text-base md:text-2xl md:mt-1">
              01.
            </span>
            About Me
          </h1>
          <div className="h-height1px w-24 md:w-48 bg-textcl5 mt-2" />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-11/12">
            <div className="w-full mb-5">
              <p className="aboutpara">
                Hello! My name is Michael and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>

              <p className="aboutpara">
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </p>

              <p className="aboutpara">
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
              </p>

              <p className="aboutpara">
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>

            <div className="flex gap-12 text-textcl5">
              <div>
                <p className="text-sm">
                  <span className="text-textcl1 mr-1 text-base">▹</span>
                  JavaScript (ES6+)
                </p>
                <p className="text-sm">
                  <span className="text-textcl1 mr-1">▹</span>React
                </p>
                <p className="text-sm">
                  <span className="text-textcl1 mr-1">▹</span>Node.js
                </p>
              </div>
              <div>
                <p className="text-sm">
                  <span className="text-textcl1 mr-1">▹</span>Next.js
                </p>
                <p className="text-sm">
                  <span className="text-textcl1 mr-1">▹</span>Tailwind CSS
                </p>
                <p className="text-sm">
                  <span className="text-textcl1 mr-1">▹</span>Material UI
                </p>
              </div>
            </div>
          </div>
          <div className="group relative flex mx-auto h-52 w-52 md:w-56 md:h-56 lg:h-72 lg:w-96">
            <div className="background w-full h-full absolute z-50 rounded-lg">
              <div className="w-full h-full bg-backgroundcl5 opacity-40 transition-all duration-500 rounded-lg group-hover:opacity-0" />
            </div>

            <div className="absolute left-5 top-5 w-full h-full border-2 rounded-lg border-textcl1 group-hover:left-3 group-hover:top-3 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
