import React from 'react'
import gallery_1 from "../assets/gallery-1.png";
import gallery_2 from "../assets/gallery-2.png";
import gallery_3 from "../assets/gallery-3.png";
import gallery_4 from "../assets/gallery-4.png";
import white_arrow from "../assets/white-arrow.png";


const Campus = () => {
  return (
    <>
      <div className="campus mt-[80px] mb-[80px] m-auto w-[90%] text-center">
          <div className="gallery flex items-center justify-between mb-[40px]">
               <img src={gallery_1} className="w-[23%] rounded-[10px]" />
               <img src={gallery_2} className="w-[23%] rounded-[10px]" />
               <img src={gallery_3} className="w-[23%] rounded-[10px]" />
               <img src={gallery_4} className="w-[23%] rounded-[10px]" />
          </div> 
          <button className='btn dark-btn inline-flex items-center py-2 px-3 gap-2 rounded-full'>See more here <img src={white_arrow} className="w-[20px] mt-1" /></button>
     </div>
    </>
  )
}

export default Campus
