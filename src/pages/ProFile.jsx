import React from "react";
import InfiniteScroll from "../animetion/imgScrool";

function ProFile() {
  const items = [
    { content: "Email: nounthanith99@gmail.com" },
    { content: "Phone: 093 939 290" },
    { content: <p>Facebook : <a href="https://web.facebook.com/tha.nith.549"><i className="fa-brands fa-facebook text-3xl"></i></a></p> },
    { content: <p>Telegram : <a href="https://t.me/Nuon_Thanith"><i className="fa-brands fa-telegram text-3xl"></i></a></p> },
    { content: <p>Instagram : <a href="https://www.instagram.com/tonq_tong"><i className="fa-brands fa-instagram text-3xl"></i></a></p> },
    { content: <p>GitHub : <a href="https://github.com/nounthanith"><i className="fa-brands fa-github text-3xl"></i></a></p> },
  ];
  return (
    <div className="max-w-[80%] lg:max-w-[53.5%] m-auto text-black mb-4">
      <div style={{ height: "500px", position: "relative",}}>
        <InfiniteScroll
          items={items}
          isTilted={true}
          tiltDirection="left"
          autoplay={true}
          autoplaySpeed={0.1}
          autoplayDirection="down"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
}

export default ProFile;
