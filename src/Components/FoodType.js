import React from 'react';
import './FoodType.css';
export default function FoodType({foodName, foodInfo}) {
    return (
        <div className="foodType-container">
            <div className="foodType">
                <div>
                    <h4 className="foodName">
                        {foodName}</h4>
                </div>
                <div className="foodInfo">
                    <p>{foodInfo}</p>
                </div>
            </div>
        </div>
    )
}
