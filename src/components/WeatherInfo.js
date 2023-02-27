import React from "react";
import './WeatherInfo.css';

const WeatherInfo = props =>(

    <div className="WeatherInfo">
        {
            props.error &&
            <div className="alert alert-danger">
                <p>{props.error}</p>
            </div>
        }

        {props.temperature ?
            <div className="card card-body">
                
                {props.city && props.country &&
                    <p>
                        <span>Location:</span> {props.city}, {props.country}
                    </p>
                    
                }

                {props.temperature &&
                    <p>
                        <span>Temperature:</span> {props.temperature} °C, {props.description}
                        <img src = {`http://openweathermap.org/img/wn/${props.icon}@2x.png`} 
                            alt='icon'></img>
                    </p>
                }
                
                {props.humidity &&
                    <p>
                        <span>Humidity:</span> {props.humidity} %
                    </p>
                }
                {props.humidity &&
                    <p>
                        <span>Wind-speed:</span> {props.wind_speed}
                    </p>
                }   
            </div>
            :
            <div className="card card-body">
                <p>Not request yet</p>
            </div>
        }
    </div>
    
);

export default WeatherInfo;