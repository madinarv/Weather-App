import { Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useWeathers } from './actions/queries';
import { useWeatherStyles } from './weather.style';
import sunny from 'assets/images/icons/sunny.png';
import rainy from 'assets/images/icons/rainy.png';
import cloudysunny from 'assets/images/icons/cloudysunny.png';
import cloudy from 'assets/images/icons/cloudy.png';
import clear from 'assets/images/icons/clear.png';

const WeatherComponent = () => {
  const style = useWeatherStyles();
  const [location, setLocation] = useState('');
  const { data: weather }: any = useWeathers(location ? location : 'Baku');
  // console.log(weather);
  const handeLocationChange = (event: any) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <div className='container'>
        <div className='col-lg-12'>
          <div className={style.appContainer}>
            <Input
              className='location-input'
              type='text'
              placeholder='Please, write location'
              value={location}
              onChange={handeLocationChange}
            />
          </div>
        </div>

        <div>
          <div className={style.weathersBoxes}>
            {weather &&
              weather?.list.map((item: any, index: any) => {
                return (
                  // console.log(item.dt_txt.split(' ')[1]. slice(0, 2)),
                  // .split(' ')[0].split('-').reverse().join('.')
                  // console.log(item.dt_txt.split(' ')[0].split('-').reverse().join('.')),
                  // console.log(item.dt_txt.split(' ')[1].split('-')[0].slice(0, 5)),

                  <div className='col-lg-3' key={index}>
                    <div className={style.weather}>
                      <div className={style.box}>
                        <div className={style.date}>
                          <div className={style.year}>
                            <p>
                              {item.dt_txt
                                .split(' ')[0]
                                .split('-')
                                .reverse()
                                .join('.')}
                            </p>
                          </div>
                          <div>
                            <span className={style.hour}>
                              {item.dt_txt
                                .split(' ')[1]
                                .split('-')[0]
                                .slice(0, 5)}
                            </span>
                          </div>
                        </div>
                        <div className={style.weatherImg}>
                          {item.weather[0].id === 800 ? (
                            <img src={sunny} alt='sunny' />
                          ) : item.weather[0].id === 801 ? (
                            <img src={cloudy} alt='cloudy' />
                          ) : item.weather[0].id === 500 ? (
                            <img src={rainy} alt='rainy' />
                          ) : item.weather[0].id === 802 ? (
                            <img src={cloudy} alt='cloudy' />
                          ) : item.weather[0].id === 804 ? (
                            <img src={cloudysunny} alt='cloudysunny' />
                          ) : (
                            <img src={clear} alt='clear' />
                          )}
                        </div>
                        <div className={style.info}>
                          <div className={style.degree}>
                            <p>{item.main?.temp}°C</p>
                          </div>
                          <div className={style.city}>
                            <h3>{weather?.city.name}</h3>
                          </div>
                        </div>
                        <div className={style.total}>
                          <div className={style.percent}>
                            <p>{item.main?.humidity}%</p>
                            <div className={style.humidity}>
                              <span>Humidity</span>
                            </div>
                          </div>
                          <div className={style.wind}>
                            <p>{item.wind?.speed}km/h</p>
                            <div className={style.speed}>
                              <span>Wind speed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;
