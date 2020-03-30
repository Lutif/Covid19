import React,{useState} from "react";
import { Map, TileLayer, Circle, Tooltip, ZoomControl } from "react-leaflet";
import data from "../data/out.json";

function MapMain() {
  const [show, setshow] = useState("Confirmed")

  function handleClick(e){
    setshow(e.target.name)
    
  }
  return (
    <div className="map-container">
      <div className="map-top">
        <div className="map-buttons">
          <button className={show=="Confirmed" ? "active":"inactive"} name="Confirmed" onClick={handleClick}>Total Cases</button>
          <button className={show=="Deaths" ? "active":"inactive"} name="Deaths" onClick={handleClick}>Deaths</button>
          <button className={show=="Recovered" ? "active":"inactive"} name="Recovered" onClick={handleClick}>Recoverd</button>
        </div>
      </div>
      <div className="map-side">
        <h3>List of Countries / States</h3>
        {data.map(country=>
          <div className="country-card">
            <p className="card-title">{country["Coutry,State"]}</p>
            <p className="card-heading">Confirmed Cases</p>
            <p className="card-numebers blue">{country["Confirmed"]}</p>
            <p className="card-heading ">Deaths</p>
            <p className="card-numbers red">{country["Deaths"]}</p>
            <p className="card-heading">Recoverd</p>
            <p className="card-numbers green">{country["Recovered"]}</p>
          </div>)}
      </div>

      <Map className="Map" center={[24.8607, 67.0011]} zoom={4} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
        {data.map(country => ( country[show]>=1 && 
          <Circle
            key={country["Coutry,State"]}
            center={ [country.Lat, country.Long]}
            color={country[show] > 1000 ? "red" : "blue"}
            radius={country[show] && 10 * parseInt(country[show])}
            attribution={"color=red"}
          >
            <Tooltip>
              {country["Coutry,State"] + " " + country[show]}
            </Tooltip>
          </Circle>
        ))}
      </Map>
    </div>
  );
}

export default MapMain;
