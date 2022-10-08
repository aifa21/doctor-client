import React from 'react';

const ServicesDetail = ({service}) => {
    return (
        <div className="box">
            <img alt=""src={service.img}/>
            <h3 className="mt-3 mb-3">{service.name}</h3>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem aliquid</p>
        </div>
    );
};

export default ServicesDetail;