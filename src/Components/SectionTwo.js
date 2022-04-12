import React from 'react';
import './SectionTwo.css';
import chef1 from '../Images/chef1.png';
import chef2 from '../Images/chef2.png';
import chef3 from '../Images/chef3.png';
export default function SectionTwo() {
    return (
        <div className="sectionTwo">

            <div className="sectionTwo-header">
                <div className="sectionTwo-header-heading">
                    <h3>T O P   C H E F S</h3>
                </div>
                <div className="sectionTwo-header-bottomLine"></div>
            </div>

            <div className="sectionTwo-footer">
                <div className="sectionTwo-chefs">
                    <div className="sectionTwo-chef1">
                        <div>
                            <img className="chefImage"
                                src={chef1}
                                alt=""/>
                        </div>
                        <div className="chefName">
                            <h4>Eileen Johnson</h4>
                        </div>
                        <div>
                            <p className="chefInfo">Executive Chef, USA</p>
                        </div>
                    </div>
                    <div className="sectionTwo-chef2">
                        <div><img className="chefImage"
                                src={chef2}
                                alt=""/></div>
                        <div className="chefName">
                            <h4>Robert Downey Jr</h4>
                        </div>
                        <div className="chefInfo">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                    </div>
                    <div className="sectionTwo-chef3">
                        <div>
                            <img className="chefImage"
                                src={chef3}
                                alt=""/>
                        </div>
                        <div className="chefName">
                            <h4>Amanda Dority</h4>
                        </div>
                        <div className="chefInfo">
                            <p>Sous Chef, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
