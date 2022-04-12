import React from 'react';
import './MenuCard.css';
export default function MenuCard() {
    return (
        <div className="menuCard">

            <div className="menuCard-left">
                <div className="pizzaContent">
                    <h2>Pizza is a savory dish of Italian origin</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                    <div className="pizzaCardLine"></div>
                    <div className="pizzaExploreButton">
                        <button>Explore</button>
                    </div>
                </div>
            </div>

            <div className="menuCard-right">

                <div className="menuCard-right-firstRow">
                    <div className="frenchFries">
                        <div className="content">
                            <h2>Crispy French Fries</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="cardLine"></div>
                            <div className="exploreButton">
                                <button>Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="paneerTikka">
                        <div className="content">
                            <h2>Paneer Tikka</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="cardLine"></div>
                            <div className="exploreButton">
                                <button>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="menuCard-right-secondRow">
                    <div className="macaroon">
                        <div className="macaroonContent">
                            <h2>Macaroon</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="macaroonCardLine"></div>
                            <div className="macaroonExploreButton">
                                <button>Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="doughNut">
                        <div className="content">
                            <h2>Doughtnut</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="cardLine"></div>
                            <div className="exploreButton">
                                <button>Explore</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
