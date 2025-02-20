import React from "react";
import TrueFocus from "./../animetion/focus"
import RotatingText from "./../animetion/skillShow"

function NameSkill() {
  return (
    <div className="w-[80%] lg:w-[53.5%] m-auto">
      <div className="mt-5 z-0 mb-5 bg-white dark:bg-[#3a5a40] p-5 rounded-2xl shadow-2xl text-black">
        <TrueFocus
          sentence="Hello I'm Nuon Thanith!!"
          manualMode={false}
          blurAmount={5}
          borderColor="green"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
      
    </div>
  );
}

export default NameSkill;
