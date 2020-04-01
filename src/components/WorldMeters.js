import React,{useState, useEffect} from "react";
import getCoutries from "../api/getCountries"
import getGlobal from "../api/getGlobal"
import getCoutry from "../api/getCountry"



function WorldMeters() {

  const [data, setdata] = useState({country:{},world:{},countries:[]})

  useEffect(()=>{
  getCoutries().then(coutriesList =>{setdata(prevdata=> ({...prevdata,countries:coutriesList}))});
  getGlobal().then(global=>setdata(prevdata=> ({...prevdata, world:global })))
  getCoutry("Pakistan").then(country=>setdata(prevdata=> ({...prevdata, country })))
},[getCoutries,getGlobal])
const updateCountry=e =>{

  getCoutry(e.target.value).then(country=>setdata(prevdata=> ({...prevdata, country })))
}

return (
<div className="mx-0 px-0 col-lg-9 full">
           <h1 className="font-weight-bold my-3 text-center">Corona Update Center</h1>
           <div className="row mx-0">
             <div className=" mx-auto px-3 py-2 col-lg-5  bg-secondary rounded"> 
               <h2>Global </h2>
               <h4>Coronavirus Cases</h4>
               <h2 className="text-primary">{data.world[0] && data.world[0].cases.active}</h2>
               <h4>Deaths</h4>
               <h2 className="text-danger">{data.world[0] && data.world[0 ].deaths.total}</h2>
               <h4>Recoverd</h4>
               <h2 className="text-success">{data.world[0] && data.world[0].cases.recovered}</h2>
             </div>
             <div className="mx-auto px-3 py-2 bg-secondary col-lg-5 rounded">
              <p>Select country</p>
               <select className="country" onChange={updateCountry}>
               {data.countries && data.countries.map (
                country=> country=="Pakistan"? <option value={country} selected> {country} </option>:
                <option value={country}> {country} </option>
                )}
                </select>
                <h4>Coronavirus Cases</h4>
               <h2 className="text-primary">{data.country[0] && data.country[0].cases.active}</h2>
               <h4>Deaths</h4>
               <h2 className="text-danger">{data.country[0] && data.country[0 ].deaths.total}</h2>
               <h4>Recoverd</h4>
               <h2 className="text-success">{data.country[0] && data.country[0].cases.recovered}</h2>
               <small>Updated on {data.country[0] &&data.country[0].day}</small>
            </div>
            </div>
           <div className="text-center text-secondary font-weight-bold py-3"> Provincial data for Pakistan will be added soon!</div>
            
         </div>  );
}

export default WorldMeters;
