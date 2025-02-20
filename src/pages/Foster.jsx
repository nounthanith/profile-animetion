import React from "react";
import LetterGlitch from "../animetion/animetion";
import ScrollVelocity from "../animetion/scroleAction";

function Foster() {
  return (
    <div className="relative">
      <div className="h-5 lg:h-10">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      <div className="">
        <ScrollVelocity
          texts={["Welcome to my profile!!!", "Welcome to my profile!!!"]}
          // velocity={velocity}
          className="custom-scroll-text lg:text-[45px] text-[20px] bg-black text-white p-0 leading-5 lg:leading-15"
        />
      </div>
      <div className="h-5 lg:h-10">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      
    </div>
  );
}

export default Foster;
