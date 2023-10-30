import { useState, useEffect } from 'react';
import { IoMdEye } from 'react-icons/io';
import style from '../pages/Home/index.module.css';

function Data() {
  const [startDate] = useState(new Date("2023-12-30")); 
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval:any; 
  useEffect(() => {
    interval = setInterval(updateTimer, 1000); 
    return () => {
      clearInterval(interval);
    };
  }, []);

  const updateTimer = () => {
    const now = new Date();
    const timeDifference = startDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
      clearInterval(interval);
    } else {
      setDays(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeDifference % (1000 * 60)) / 1000));
    }
  };

  if (startDate.getTime() - new Date().getTime() <= 0) {
    return <div>Vaxt Bitti </div>;
  }

  return (
    <div className={style['aside']}>
      <div className={style['aside-left']}>
        <h1>Magic Mashrooms</h1>
        <div className={style['aside-button']}>
          <IoMdEye />
          <p>See All</p>
        </div>
      </div>
      <div className={style['aside-right']}>
        <h3>Auction ends in:</h3>
        <div className={style['aside-date']}>
          <div className={style['aside-page-date']}>
            <h2>{days}</h2>
            <h4>day</h4>
          </div>
          <div className={style['aside-item']}>
            <h2>:</h2>
          </div>
          <div className={style['aside-page-date']}>
            <h2>{hours}</h2>
            <h4>Hours</h4>
          </div>
          <div className={style['aside-item']}>
            <h2>:</h2>
          </div>
          <div className={style['aside-page-date']}>
            <h2>{minutes}</h2>
            <h4>Minutes</h4>
          </div>
          <div className={style['aside-item']}>
            <h2>:</h2>
          </div>
          <div className={style['aside-page-date']}>
            <h2>{seconds}</h2>
            <h4>seconds</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
