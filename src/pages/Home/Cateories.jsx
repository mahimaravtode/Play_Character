import React from 'react'
import Img1 from '../../assets/Img1.png'
import Img2 from '../../assets/Img2.png'
import Img3 from '../../assets/Img3.png'
import Img4 from '../../assets/Img4.png'
import Img5 from '../../assets/Img5.png'
import Img6 from '../../assets/Img6.png'
import Img7 from '../../assets/Img7.png'
import Img8 from '../../assets/Img8.png'
import Img9 from '../../assets/Img9.png'
import Img10 from '../../assets/Img10.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import img10 from '../../assets/img10.png'



const Cateories = () => {
    const data =[
        {
           
            name: 'Abstract/Experimental',
            img: Img1,
            count: 0,
            description: 'Avant-garde narratives redefine gameplay in genre-defying landscapes.',
            hovreImg:img1
        },
        {
           
            name: 'Fantasy',
            img: Img2,
            count: 7,
            description: 'Epic quests of magic, legend and lore in wondrous mythic kingdoms..',
            hovreImg:img2
        },
        {
           
            name: 'Historical',
            img: Img3,
            count: 0,
            description: 'Experience the eras of Roman legions, medieval knights, or Samurai honor..',
            hovreImg:img3
        },
        {
           
            name: 'Horror/Cult',
            img: Img4,
            count: 4,
            description: 'Supernatural threats and eerie suspense in Cthulhu-like mythic atmospheres.',
            hovreImg:img4
        },
        {
            hovreImg:img5,
            name: 'Modern/Urban Fantasy',
            img: Img5,
            count: 0,
            description: 'Hidden magic meets modern life; Buffy-like beings operate in alternate realities.',
        },
        {
            hovreImg:img6,
            name: 'Mystery/Crime',
            img: Img6,
            count: 0,
            description: 'Investigate noir whodunnits, unraveling dark secrets and criminal underworlds.',
        },
        {
            hovreImg:img7,
            name: 'Pulp/Adventure',
            img: Img7,
            count: 0,
            description: 'Thilling expeditions, espionage, and exploration of uncharted realms.',
        },
        {
            hovreImg:img8,
            name: 'Science-Fiction',
            img: Img8,
            count: 1,
            description: 'Space exploration and tech in future dystopias, galaxies and alien civilizations.',
        },
        {
           
            name: 'Steampunk/Alternative',
            img: Img9,
            count: 0,
            hovreImg:img9,
            description: 'Mystical tech in alternate histories, neo-Victorian magic-infused worlds.',
        },
        {
           
            name: 'Steampunk/Alternative',
            img: Img10,
            count: 0,
            description: 'Mystical tech in alternate histories, neo-Victorian magic-infused worlds.',
            hovreImg:img10
        }
    ]
    
   
  return (
    <>
     
     {data.map((elem, i) => {
    return (
  
            <div className='group cursor-pointer'>
                <div className='text-center px-6 relative transition-all duration-300 group-hover:bg-blue py-4 rounded-md'>
                    <div>
                        <img src={elem.img} className='w-16 mx-auto' alt={elem.name} />
                        <img src={elem.hovreImg} className='absolute w-16 top-4 mx-auto left-1/2 transform -translate-x-1/2 hidden group-hover:block transition-all duration-300' alt={elem.name} />
                    </div>
                    <div className='mt-4'>
                        <button className='px-2 rounded-md group-hover:text-white bg-[#0000000f] text-[#909090]'>{elem.count}</button>
                    </div>
                    <h3 className='mt-6 group-hover:text-white'>{elem.name}</h3>
                    <p className='text-sm group-hover:text-white text-[#888888] my-1'>{elem.description}</p>
                </div>
            </div>
       
    );
})}

   
     
    </>
  )
}

export default Cateories
