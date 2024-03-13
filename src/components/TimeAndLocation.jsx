import React from 'react'

function TimeAndLocation(props) {
  return <div className="">
        <div className="flex items-center justify-center my-6">
            <p className="text-white text-xl font-extralight">
                Tuesday, 31 May 2024 | Local time: 12:46 PM
            </p>
        </div>

        <div className="flex items-center justify-center my-3">
            <p className="text-white text-3xl font-medium items-center justify-center">
                {props.name}, {props.country}
            </p>
        </div>
  </div>;
  
}

export default TimeAndLocation;