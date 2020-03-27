import axios from "axios";

export default async function getGlobal(){
    const config ={
        headers:
            {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "nmAIBhYOyBmshoAY95WZ8rDvQTXqp16pG0hjsnxl1IAUvKKTjt"
            },
            params:{ "country": "All" }
        }
    try {
        const res = await axios.get("https://covid-193.p.rapidapi.com/statistics",config)
        console.log(res.data.response)
        return res.data.response
    } catch (err) {
        console.error(err)
    }
}

