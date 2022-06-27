import React, { useEffect, useState } from "react";
import CloudSky from '../assets/img/cloud_sky.jpg';
import ClearSky from '../assets/img/clear_sky.jpg';
import StormSky from '../assets/img/storm_sky.jpg';
import DrizzelSky from '../assets/img/drizzel_sky.jpg';
import RainSky from '../assets/img/rain_sky.jpg';
import SnowSky from '../assets/img/snow_sky.jpg';
import MistSky from '../assets/img/mist_sky.jpg';
import { InformationType } from "../App";

const arrBgWeather = [StormSky, DrizzelSky, RainSky, SnowSky, MistSky, ClearSky, CloudSky];

export const Information: React.FC<InformationType> = (props) => {
    const [bgWeather, setBgWeather] = useState<string>();
    const [iconUrl, setIconUrl] = useState<string>("0");

    useEffect(() => {
        BackgroundImg();
    }, [props.background]);

    const BackgroundImg = () => {
        const bgWeatherId = props.background ?? NaN;
        if (bgWeatherId) {
            setBgWeather(arrBgWeather[bgWeatherId]);
            setIconUrl(`http://openweathermap.org/img/wn/${props.icon}@2x.png`);
        }
    }

    return (
        <main className="profile-page">
            <section className="relative block" style={{ height: "400px" }}>
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            `url(${bgWeather})`
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-30 bg-black"
                    ></span>
                </div>
                <div
                    className="top-auto bottom-0 left-0  right-0 w-full absolute pointer-events-none overflow-hidden"
                    style={{ height: "70px" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </section>
            <section className="relative py-16 bg-gray-300">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <img
                                            alt="..."
                                            src={iconUrl}
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                                            style={{ maxWidth: "150px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                                    {props.title}
                                </h3>

                            </div>
                            <div className="mt-10 py-10 border-t border-gray-300 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                            {props.information}
                                        </p>
                                    </div>
                                    <div className="max-w-4xl p-4 text-gray-800 bg-white rounded-lg shadow">
                                        <div className="mb-2">
                                            <div className="h-3 text-3xl text-left text-gray-600">“</div>
                                            <p className="px-4 text-sm text-center text-gray-600">
                                                {props.quote}
                                            </p>
                                            <p className="px-4 text-sm text-center text-gray-600">
                                                - {props.from}
                                            </p>
                                            <div className="h-3 text-3xl text-right text-gray-600">”</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}