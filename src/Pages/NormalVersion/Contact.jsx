import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="bg-teal-300 relative min-h-screen flex overflow-hidden items-center justify-center"
    >
      <h1 className="absolute text-4xl md:text-6xl font-bold text-center z-40">
        contact me for your <br /> website
      </h1>

      {/* Big Boxes */}
      <div className="bg-red-200 h-72 w-72 absolute left-20 top-20 flex items-center justify-center rounded-2xl">
        <img className="h-40" src="/Instagram.svg" alt="Instagram" />
      </div>

      <div className="bg-red-300 h-72 w-72 absolute left-1/2 top-10 -translate-x-1/2 flex items-center justify-center rounded-2xl">
        <img className="h-40" src="/Linkedin.svg" alt="LinkedIn" />
      </div>

      <div className="bg-red-400 h-72 w-72 absolute right-20 top-20 flex items-center justify-center rounded-2xl">
        <img className="h-40" src="/github.svg" alt="GitHub" />
      </div>

      <div className="bg-red-500 h-72 w-72 absolute left-32 bottom-10 flex items-center justify-center rounded-2xl">
        <img className="h-40" src="/Whatsapp.svg" alt="WhatsApp" />
      </div>

      <div className="bg-red-600 h-72 w-72 absolute right-10 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-2xl">
        <img className="h-40" src="/Mail.svg" alt="Mail" />
      </div>

      {/* Small Boxes */}
      <div className="bg-red-200 h-28 w-28 absolute bottom-40 right-40 flex items-center justify-center rounded-xl">
        <img className="h-16" src="/Instagram.svg" alt="Instagram small" />
      </div>

      <div className="bg-red-300 h-28 w-28 absolute bottom-60 left-40 flex items-center justify-center rounded-xl">
        <img className="h-16" src="/Whatsapp.svg" alt="WhatsApp small" />
      </div>

      <div className="bg-red-400 h-28 w-28 absolute bottom-32 left-80 flex items-center justify-center rounded-xl">
        <img className="h-16" src="/github.svg" alt="GitHub small" />
      </div>

      <div className="bg-red-500 h-28 w-28 absolute top-40 right-40 flex items-center justify-center rounded-xl">
        <img className="h-16" src="/Mail.svg" alt="Mail small" />
      </div>

      <div className="bg-red-600 h-28 w-28 absolute top-32 left-60 flex items-center justify-center rounded-xl">
        <img className="h-16" src="/Linkedin.svg" alt="LinkedIn small" />
      </div>
    </section>
  );
});

export default Contact;