import React from 'react';
import './SectionOne.css';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
export default function SectionOne() {
    return (
        <div className="sectionOne-container">
            <Navbar/>
            <div className="sectionOne">

                <div className="sectionOne-header">
                    <div className="sectionOne-header-heading">
                        <h3>V A R I E T I E S</h3>
                    </div>
                    <div className="sectionOne-header-bottomLine"></div>
                </div>
                <div className="sectionOne-mid">
                    <MenuCard/>
                </div>

                <div className="sectionOne-footer">
                    <div className="sectionOne-footer-col1">
                        <div className="footer-columns">
                            <h3>Indian Cuisine</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <div className="sectionOne-footer-col2">
                        <div className="footer-columns">
                            <h3>American Cuisine</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        </div>
                    </div>
                    <div className="sectionOne-footer-col3">
                        <div className="footer-columns">
                            <h3>Chinese Cuisine</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
