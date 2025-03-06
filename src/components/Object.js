// src/components/Object.js
import React from 'react';
import '../styles/object.css';
import ObjectItem from '../itemComponents/ObjectItem.js'; // Đường dẫn tùy thuộc thư mục bạn chọn
import objectData from '../data/objectData.js';

function Object() {
  return (
    <div className="obj-wrap w-75">
      <h1 className="obj-tilte">Object</h1>
      <div className="row gx-1 d-flex justify-content-around ms-lg-5 ps-lg-5">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="obj-img d-none d-sm-block"></div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="timeline w-100 position-relative">
            {objectData.map((item, index) => (
              <ObjectItem
                key={index}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Object;