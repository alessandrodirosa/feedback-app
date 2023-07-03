/*
import {Header} from "./components/Header";
import {FeedbackList} from "./components/FeedbackList";
import {FeedbackStats} from "./components/FeedbackStats";
import {FeedbackForm} from "./components/FeedbackForm";
import {AboutUs} from "./components/pageComponents/AboutUs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AboutUsIconComponent} from "./components/AboutUsIconComponent";
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className='container'>
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                                <AboutUsIconComponent />
                            </>
                        }>
                        </Route>
                        <Route path="/about-us" element={
                            <AboutUs />
                        }>
                        </Route>
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

*/

import React from "react";
import { HeaderMobile } from "./components/HeaderMobile";
import { IosStatusBar } from "./components/IosStatusBar";
import { LinkText } from "./components/LinkText";
import { PrimaryText } from "./components/PrimaryText";
import { SecondaryText } from "./components/SecondaryText";
import { StateDefaultSizeWrapper } from "./components/StateDefaultSizeWrapper";
import { WardrobeOutline } from "./icons/WardrobeOutline";
import "./index.scss";

export const HpMenLogged = () => {
    return (
        <div className="HP-MEN-logged">
            <div className="div-2">
                <div className="frame">
                    <HeaderMobile
                        className="header-mobile-instance"
                        icon={<WardrobeOutline className="wardrobe-outline-instance" />}
                        logoDarkModeTrue="logo-2.svg"
                    />
                    <div className="frame-2">
                        <div className="nouvelle-riviera-wrapper">
                            <h1 className="nouvelle-riviera">
                                <span className="span">Nouvelle </span>
                                <span className="text-wrapper-2">Riviera</span>
                            </h1>
                        </div>
                        <div className="div-wrapper">
                            <div className="overlap-group">
                                <div className="frame-3" />
                                <div className="frame-4" />
                                <div className="frame-5" />
                            </div>
                        </div>
                        <div className="frame-6">
                            <div className="p-wrapper">
                                <p className="p">80 characters maximum Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            </div>
                            <LinkText
                                icon={false}
                                line="line-2-2.svg"
                                lineClassName="link-text-instance"
                                lineUp={false}
                                size="xl"
                                state="hover"
                                text="SEE ALL"
                            />
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-7">
                            <StateDefaultSizeWrapper
                                className="link-text-2"
                                icon={false}
                                line="line-2-3.svg"
                                lineClassName="link-text-3"
                                lineUp={false}
                                size="md"
                                stateProp="pressed"
                                text="MEN"
                            />
                            <StateDefaultSizeWrapper
                                className="link-text-4"
                                icon={false}
                                lineUp={false}
                                size="md"
                                stateProp="default"
                                text="WOMEN"
                            />
                        </div>
                    </div>
                    <div className="frame-8">
                        <div className="frame-9">
                            <div className="discover-the-looks">
                                <span className="span">Discover the </span>
                                <span className="text-wrapper-2">looks</span>
                            </div>
                            <p className="text-wrapper-3">
                                80 characters maximum Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </p>
                        </div>
                        <div className="frame-10">
                            <div className="overlap-group-2">
                                <div className="frame-11">
                                    <div className="frame-12" />
                                </div>
                                <div className="frame-13" />
                            </div>
                        </div>
                        <div className="image-container">
                            <img className="rectangle" alt="Rectangle" src="rectangle-1.png" />
                        </div>
                        <div className="frame-14">
                            <div className="frame-15">
                                <div className="frame-16">
                                    <div className="overlap-group-3">
                                        <div className="frame-17" />
                                        <div className="frame-18" />
                                    </div>
                                </div>
                                <LinkText
                                    className="link-text-5"
                                    icon={false}
                                    line="line-2-4.svg"
                                    lineClassName="link-text-6"
                                    lineUp={false}
                                    size="xl"
                                    state="hover"
                                    text="SEE MORE LOOKS"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="frame-19">
                        <img className="vector" alt="Vector" src="vector-166.svg" />
                        <div className="my-taste-portfolio-wrapper">
                            <div className="my-taste-portfolio">
                                <span className="span">My Taste </span>
                                <span className="text-wrapper-2">Portfolio</span>
                            </div>
                        </div>
                        <div className="frame-20">
                            <div className="frame-21">
                                <div className="frame-22" />
                                <div className="frame-23">
                                    <div className="text-wrapper-4">NFT Lifestyle</div>
                                    <div className="text-wrapper-5">Description</div>
                                </div>
                            </div>
                            <div className="frame-24">
                                <div className="frame-25" />
                                <div className="frame-23">
                                    <div className="text-wrapper-4">My Product</div>
                                    <div className="text-wrapper-5">Description</div>
                                </div>
                            </div>
                            <div className="frame-24">
                                <div className="frame-26" />
                                <div className="frame-23">
                                    <div className="text-wrapper-4">Maintenance</div>
                                    <div className="text-wrapper-5">Description</div>
                                </div>
                            </div>
                        </div>
                        <div className="primary-text-wrapper">
                            <PrimaryText icon={false} size="sm" state="default" text="SEE ALL" />
                        </div>
                        <img className="vector-2" alt="Vector" src="vector-165.svg" />
                    </div>
                    <div className="frame-27">
                        <div className="frame-28">
                            <div className="frame-29">
                                <p className="text-wrapper-6">Taste will always be your truly non-replicable asset</p>
                            </div>
                            <div className="frame-30">
                                <div className="overlap-group-4">
                                    <img className="image" alt="Image" src="image-100.png" />
                                    <img className="img-2" alt="Img" src="a3d0af33ff65afc37821373a63e60f02-1.png" />
                                </div>
                            </div>
                            <div className="frame-31">
                                <div className="frame-32">
                                    <div className="frame-33">
                                        <div className="text-wrapper-7">C</div>
                                    </div>
                                </div>
                                <p className="text-wrapper-8">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis
                                    natoque Aenean massa.
                                </p>
                            </div>
                            <p className="text-wrapper-9">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                                justo,
                            </p>
                        </div>
                    </div>
                    <div className="my-care-section">
                        <div className="overlap">
                            <div className="text-wrapper-10">My Care</div>
                            <p className="text-wrapper-11">
                                80 characters maximum Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="secondary-text-wrapper">
                    <SecondaryText
                        acquistaClassName="secondary-text-3"
                        buttonPrimaryClassName="secondary-text-2"
                        className="secondary-text-instance"
                        icon={false}
                        size="md"
                        state="default"
                        text="CLAIM YOUR PRODUCT"
                    />
                </div>
                <div className="overlap-wrapper">
                    <div className="group-wrapper">
                        <div className="group">
                            <div className="overlap-2">
                                <IosStatusBar
                                    className="ios-status-bar-instance"
                                    elementClassName="ios-status-bar-2"
                                    iosStatusBatteryBatteryFillClassName="ios-status-bar-4"
                                    iosStatusBatteryBatteryFrame="battery-frame-3.svg"
                                    iosStatusSimVec="vec-3.svg"
                                    iosStatusWifiSignalHigh="wifi-2.svg"
                                    notch="island"
                                    secClassName="ios-status-bar-3"
                                    state="default"
                                />
                                <div className="rectangle-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HpMenLogged;
