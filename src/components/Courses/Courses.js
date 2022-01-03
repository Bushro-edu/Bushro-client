import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import nextBtnIcon from '../../assets/images/next.svg'
import prevBtnIcon from '../../assets/images/prev.svg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Courses() {


   const courses = [
      {
         id: 1,
         name: 'UX UI Design',
         description: '(3 Set available)',
         img: 'https://picsum.photos/390/200'
      },

      {
         id: 2,
         name: 'Web Development',
         description: '(9 Set available)',
         img: 'https://picsum.photos/390/200'
      },

      {
         id: 3,
         name: 'Digital Marketing',
         description: '(12 Set available)',
         img: 'https://picsum.photos/390/200'
      },
      {
         id: 4,
         name: 'UX UI Design',
         description: '(3 Set available)',
         img: 'https://picsum.photos/390/200'
      },

      {
         id: 5,
         name: 'Web Development',
         description: '(9 Set available)',
         img: 'https://picsum.photos/390/200'
      },

      {
         id: 6,
         name: 'Digital Marketing',
         description: '(12 Set available)',
         img: 'https://picsum.photos/390/200'
      },

   ]

   return (
      <>
         <section className='courses'>
            <div className='container'>
               <h2 className='courses__heading'>Our Popular Courses</h2>
               <p className='courses__desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
               <Swiper className='courses__list'
                  modules={[Navigation]}
                  spaceBetween={35}
                  slidesPerView={3}
                  navigation={
                     {
                        nextEl: ".next-btn",
                        prevEl: ".prev-btn",
                     }
                  }
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}>
                  {
                     courses.length > 0 && courses.map(e => (
                        <SwiperSlide className='courses__item' key={e.id}>
                           <Image className='coureses__item__img' src={e.img} alt='template' width='400' height='200' />
                           <div className='courses__item__info-box'>
                              <h3 className='info-box__heading'>{e.name}</h3>
                              <p className='info-box__desc'>{e.description}</p>
                           </div>
                        </SwiperSlide>
                     ))
                  }
               </Swiper>

               <div className='controllers'>
                  <button className='controllers-btn prev-btn' disabled>
                     <Image src={prevBtnIcon} alt='icon prev' width='7' height='14' />
                  </button>
                  <button className='controllers-btn next-btn'>
                     <Image src={nextBtnIcon} alt='icon next' width='7' height='14' />
                  </button>
               </div>
            </div>
         </section>
      </>
   )
}

export default Courses;