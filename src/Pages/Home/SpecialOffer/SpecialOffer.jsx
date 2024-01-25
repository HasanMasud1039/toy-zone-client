import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import bgImg from '../../../assets/dis.png'
import clock from '../../../assets/icon/clock.png';
import { Link } from 'react-router-dom';

const SpecialOffer = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    let interval = useRef();
    const startTimer = () => {
        const countDownDate = new Date('May 30, 2024 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds)
            }
        }, 1000);
    };
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })

    return (
        <div style={{backgroundImage:`url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'left', backgroundRepeat: 'no-repeat'}} className='w-full h-screen relative text-white'>
            <div className='absolute md:top-72 top-96 md:right-10 right-0 font-semibold grid grid-cols-5 md:w-[450px] px-4 py-4 shadow-xl rounded-bl-xl rounded-tr-[70px] text-center bg-gradient-to-t from-orange-500 bg-opacity-30 '>
                <p className=' flex items-center justify-center'><img src={clock} className='w-18 h-18' alt="" /></p>
                <p className='flex flex-col gap-3 '><span className='text-4xl border-r'>{timerDays}</span>Day </p>
                <p className='flex flex-col gap-3'><span className='text-4xl border-x'>{timerHours}</span>Hour </p>
                <p className='flex flex-col gap-3'><span className='text-4xl border-x'>{timerMinutes}</span>Minutes </p>
                <p className='flex flex-col gap-3'><span className='text-4xl border-l'>{timerSeconds}</span>Seconds </p>
            </div>
            <div className='bg-fuchsia-600 rounded-lg absolute bottom-20 right-10'>
                <button className='btn btn-success font-semibold active'><Link to='/alltoys'>See ALl Toys</Link></button>
            </div>
        </div>
    );
};

export default SpecialOffer;