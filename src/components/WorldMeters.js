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
<div class="world-meter">
           <h1 class="main-heading">Corona Update Center</h1>
           <div class="stat">
             <div class="stat-group"> 
               <h2>Global </h2>
               <h3>Coronavirus Cases</h3>
               <h2 class="blue">{data.world[0] && data.world[0].cases.active}</h2>
               <h3>Deaths</h3>
               <h2 class="red">{data.world[0] && data.world[0 ].deaths.total}</h2>
               <h3>Recoverd</h3>
               <h2 class="green">{data.world[0] && data.world[0].cases.recovered}</h2>
             </div>
             <div class="stat-group">
              <p>Select country</p>
               <select className="country" onChange={updateCountry}>
               {data.countries && data.countries.map (
                country=> country=="Pakistan"? <option value={country} selected> {country} </option>:
                <option value={country}> {country} </option>
                )}
                </select>
                <h3>Coronavirus Cases</h3>
               <h2 class="blue">{data.country[0] && data.country[0].cases.active}</h2>
               <h3>Deaths</h3>
               <h2 class="red">{data.country[0] && data.country[0 ].deaths.total}</h2>
               <h3>Recoverd</h3>
               <h2 class="green">{data.country[0] && data.country[0].cases.recovered}</h2>
               <small>Updated on {data.country[0] &&data.country[0].day}</small>
            </div>
            </div>
           <div className="province"> Provincial data for Pakistan will be added soon!</div>
            {/* <Link to ='/map'>
            <button>Map</button>
            </Link> */}
         </div>  );
}

export default WorldMeters;
