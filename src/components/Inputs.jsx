//rfce

import React, {useState} from 'react';

import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function Inputs(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
      if (searchTerm.trim()) { // Check if search term is not empty
        props.onSearch(searchTerm); // Pass search term to parent component
        setSearchTerm(''); // Clear search field after successful search
      }
      };
  const handleChange = (event) => 
    {
      setSearchTerm(event.target.value);
    };

  const handleClick = (buttonName) => {
    props.onUnitChange(buttonName);
  };

  return (
    <div
    className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input 

            type="text"
            placeholder=" Search 🔍 " 
            className=" placeholder:lowercase text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize"
            value={searchTerm} // Update input value based on state
            onChange={handleChange}

            />
            <UilSearch 
            onClick={handleSearch}
            size={25} 
            className="text-white cursor-pointer transition ease-out hover:scale-125" 
            />
            <UilLocationPoint 
            size={25} 
            className="text-white cursor-pointer transition ease-out hover:scale-125" 
            />

        </div>

            
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name="metric" onClick={() => handleClick('metric')} className="text-xl text-white font-light">C°</button>
                <p className="text-xl text-white mx-1">|</p>
                <button name="imperial" onClick={() => handleClick('imperial')} className="text-xl text-white font-light">F</button>
            </div>


    </div>
  );
}

export default Inputs;