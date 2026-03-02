import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {

  const imageStyle = {
    height: "60px",
    width: "60px"
  };

  return (
    <section
      ref={ref}
      className="flex flex-col justify-center p-7!"
    >
      <h1 className="">
        contact me for<br />your website
      </h1>

      <div className="h-[70vw] md:h-125 lg:w-250 w-full m-auto! border border-b-orange-500">
        <a href="/"><img src="./Mail.svg" alt="Email" style={imageStyle} /></a>
        <a href="/"><img src="./Whatsapp.svg" alt="Whatsapp" style={imageStyle} /></a>
        <a href="/"><img src="./Linkedin.svg" alt="Linkedin" style={imageStyle} /></a>
        <a href="/"><img src="./Instagram.svg" alt="Instagram" style={imageStyle} /></a>
        <a href="/"><img src="github.svg" alt="GitHub" style={imageStyle} /></a>
      </div>

    </section>
  );

});



export default Contact;