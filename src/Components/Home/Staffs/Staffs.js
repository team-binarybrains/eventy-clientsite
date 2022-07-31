import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './staffs.module.css';

const Staffs = () => {
    const [staffs,setStaffs] = useState([]);

    useEffect(()=> {
        axios.get('staffs.json')
        .then(res => setStaffs(res.data))
    },[])

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <section className={`${styles.bg}`}>
            <div className={`${styles.bgLayer}`}>
                <div className={`max-w-4xl mx-auto pt-20`}>
                    <Slider {...settings} className="sm:h-[500px]">
                        {
                            staffs.map((staff, i) => <div className='' key={i}>
                                <div className='flex gap-5 sm:flex-row flex-col items-center px-3'>
                                    <img className='h-[250px] sm:h-[500px] max-w-xs block' src={staff.image} alt="" />
                                    <div className='space-y-4'>
                                        <div className='h-[4px] w-[70px] bg-gradient-to-r from-red-500 to-pink-500 mx-0 -mb-3 rounded-full' />
                                        <h6 className={`${styles.openSans} uppercase tracking-[5px] text-gray-500`}>Eventy Staffs</h6>
                                        <h4 className={`${styles.roboto} font-medium text-4xl`}>Professional <span className='font-extrabold'>{staff.profession}</span></h4>
                                        <h5 className='font-semibold text-xl'>{staff.name}</h5>
                                        <p className='text-sm pr-2'>{staff.details}</p>
                                        <h5 className='font-semibold text-xl'>
                                            Social Network
                                            <div>
                                                
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Staffs;