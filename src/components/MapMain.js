import React,{useState} from "react";
import { Map, TileLayer, Circle, Tooltip, ZoomControl } from "react-leaflet";
import data from "../data/out.json";

function MapMain() {
  const [show, setshow] = useState("Confirmed")

  function handleClick(e){
    setshow(e.target.name)
    
  }

  return (
      
      <div className= "row  bg-dark">
        
      <div className = "mx-0 px-3 py-4 col-lg-2  full overflow-auto ">
        <h5 className="mt-2">List of Countries / States</h5>
        {data.map(country=>
          <div className="card bg-secondary mb-1 py- px-2 rounded">
            <p className="card-title my-0 font-weight-bold my-1">{country["Coutry,State"]}</p>
            <p className=" my-0 ">Confirmed Cases</p>
            <p className="text-primary my-0">{country["Confirmed"]}</p>
            <p className=" my-0">Deaths</p>
            <p className="text-danger my-0">{country["Deaths"]}</p>
            <p className=" my-0">Recoverd</p>
            <p className="text-success ">{country["Recovered"]}</p>
          </div>)}
      </div>
          
          
          <div className="mx-0 my-0 px-0 col-lg-10 ">

          <div className="btn-group-sm mb-1 pl-3">
          <button className={(show=="Confirmed" ? " btn-secondary":" btn-outline-secondary")+" text-warning btn"} name="Confirmed" onClick={handleClick}>Total Cases</button>
          <button className={(show=="Deaths" ? " btn-secondary ":" btn-outline-secondary")+" btn text-danger"} name="Deaths" onClick={handleClick}>Deaths</button>
          <button className={(show=="Recovered" ? " btn-secondary":" btn-outline-secondary")+" btn text-success"} name="Recovered" onClick={handleClick}>Recoverd</button>
        </div>
      


      <div >


      <Map className="  full" center={[24.8607, 67.0011]} zoom={4} zoomControl={false}>
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
      </div>

      </div>
  );
}

export default MapMain;
