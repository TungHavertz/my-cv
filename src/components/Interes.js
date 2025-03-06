// src/components/Hobbies.js
import React from 'react';
import '../styles/hobby.css';
import hobbyData from '../data/interesData.js';
import HobbiesItem from '../itemComponents/interesData.js';

function Hobbies() {
  return (
    <div className="hobby-bg d-flex justify-content-center p-5 ">
      <div className="bg-white w-75 h-100 d-flex flex-column align-items-start rounded-4 py-5">
        <div className="d-flex flex-row justify-content-around w-100 h-100 ">
          <div className="d-flex flex-column align-items-start mt-3 pt-3 px-5">
            <h1 className="px-5">My Interesting</h1>
            <div className="d-flex row gy-5 px-5">
              {hobbyData.map((hobby, index) => (
                <HobbiesItem
                  key={index}
                  icon={hobby.icon}
                  title={hobby.title}
                  description={hobby.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;