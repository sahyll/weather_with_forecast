import React from 'react';
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails(props) {


    const windUnit= props.units=== 'metric' ? 'm/s' : 'm/h';
   
  return (
  <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p> {props.description} </p>
        </div>

        <div className="flex flex-row items-center justify-between text-white py-3">
            <img src={props.image}
            alt=""
            className="w-20"
            />
            <p className="text-5xl items-center justify-center"> {props.temperature.toFixed()} °{props.units}</p>
            <div className="flex flex-col space-y-2" >
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className="mr-1"/>
                    Real feel:
                    <span className="font-medium ml-1">{props.real.toFixed()} °{props.units}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className="mr-1"/>
                    Humidity:
                    <span className="font-medium ml-1">{props.humidity}%</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className="mr-1"/>
                    Wind Speed: 
                    <span className="font-medium ml-1">{props.wind} {windUnit}</span>
                </div>
                
            </div>
        </div>
    
        <div className="flex flex-row items-center justify-between text-white text-sm py-3">
            <div className="flex flex-row space-x-2">
                <UilArrowUp />
                <p className="font-light mt-1 ">Rise: <span className="font-medium ml-1 mt-1">06:45 AM</span></p>
            </div>
            <div className="flex flex-row space-x-2">
                <UilSunset />
                <p className="font-light mt-1">Set: <span className="font-medium ml-1">07:45 AM</span></p>
            </div>
            <div className="flex flex-row space-x-2">
                <UilSun />
                <p className="font-light mt-1">High: <span className="font-medium ml-1">{props.high.toFixed()}°{props.units}</span></p>
            </div>
            <div className="flex flex-row space-x-2">
                <UilSun />
                <p className="font-light mt-1">Low: <span className="font-medium ml-1">{props.low.toFixed()} °{props.units}</span></p>
            </div>
        </div>
        


  </div>
  );
  
}

export default TemperatureAndDetails;