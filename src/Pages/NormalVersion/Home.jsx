

import { IoCall } from "react-icons/io5";

const Home = () => {
    return (
        <section
            ref={homeref}
            className='p-10! flex flex-col gap-10 items-center'>
            <h1>building fast<br />interactive web<br />applications</h1>
            <img src="/HomeImage.jpg" alt="Home Image" />
            <button className='flex items-center justify-center gap-1.5 uppercase font-bold bg-[#62AB37] py-4! px-10! rounded-2xl text-[15px] text-amber-100'>Book A Call <IoCall size={20} /></button>
        </section>
    )
}

export default Home
