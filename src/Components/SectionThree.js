import React from 'react';
import './SectionThree.css';
import {FaCarrot} from "react-icons/fa";
import {GiGrainBundle} from "react-icons/gi";
import {GiShinyApple} from "react-icons/gi";
import {GiAvocado} from "react-icons/gi";
import FoodType from './FoodType';
export default function SectionThree() {
    return (
        <div className="sectionThree-container">
            <div className="sectionThree">

                <div className="sectionThree-header">
                    <div className="sectionThree-header-heading">
                        <h3>F O O D   G U I D E</h3>
                    </div>
                    <div className="sectionThree-header-bottomLine"></div>
                </div>

                <div className="sectionThree-footer">
                    <div className="sectionThree-footer-row1-container">
                        <div className="sectionThree-footer-row1">
                            <div className="vegetables">
                                <div className="foodImage">
                                    <FaCarrot style={
                                        {
                                            width: "2vw",
                                            height: "6vh"
                                        }
                                    }/>
                                </div>
                                <div>
                                    <FoodType foodImage={FaCarrot}
                                        foodName={"VEGETABLES"}
                                        foodInfo={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."}/>
                                </div>
                            </div>
                            <div className="wholeGrains">
                                <div className="foodImage">
                                    <GiGrainBundle style={
                                        {
                                            width: "3vw",
                                            height: "8vh"
                                        }
                                    }/>
                                </div>
                                <div>
                                    <FoodType foodName={"WHOLE GRAINS"}
                                        foodInfo={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sectionThree-footer-row2-container">
                        <div className="sectionThree-footer-row2">
                            <div className="fruits">
                                <div className="foodImage">
                                    <GiShinyApple style={
                                        {
                                            width: "2vw",
                                            height: "6vh"
                                        }
                                    }/>
                                </div>
                                <div>
                                    <FoodType foodName={"FRUITS"}
                                        foodInfo={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."}/>
                                </div>
                            </div>
                            <div className="healthyProtein">
                                <div className="foodImage">
                                    <GiAvocado style={
                                        {
                                            width: "3vw",
                                            height: "8vh"
                                        }
                                    }/>
                                </div>
                                <div>
                                    <FoodType foodName={"HEALTHY PROTEIN"}
                                        foodInfo={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
