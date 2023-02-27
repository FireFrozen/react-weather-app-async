import React from "react";

const WeatherForm = props =>(
    <div className="card card-body">
        <h4 className="card-title">Weather App</h4>
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Your city name (example: lima)" 
                className="form-control" autoFocus/>
            </div>
        
            <div className="form-group">
                <input type="text" name="country" placeholder="Your country name (example: PE)" 
                className="form-control"/>
            </div>

            <button className = "btn btn-success btn-block">
                Get Weather
            </button>
        </form>
    </div>
);

export default WeatherForm;