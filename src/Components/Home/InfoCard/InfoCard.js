import React from 'react';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const InfoCard = ({info}) => {
    return (
        <div className=" text-white info-card">
            <div className={` info-container info-${info.background}`}>
                <div className="mr-5">
                  <FontAwesomeIcon className="info-icon" icon={info.icon}/>
                </div>
                <div>
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;