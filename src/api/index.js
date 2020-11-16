import axios from 'axios';

const url='https://covid19.mathdro.id/api';//https://covid19.mathdro.id/api/daily

export const fetchData=async(country)=>{

    // making it dynamic
    let changableurl=url;

    if(country){
        console.log(changableurl);
        changableurl=`${url}/countries/${country}`;
        console.log(changableurl);
    }

    try {
        const {data}=await axios.get(changableurl);

        const modifiedData={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate
        }

        console.log(modifiedData);

        return modifiedData;
    } catch (error) {
        
    }

}

export const fetchDailyData=async()=>{
    try {
        const {data}=await axios.get(`${url}/daily`);
        //https://covid19.mathdro.id/api/daily
        //console.log(data);

        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
        return modifiedData;
        //return response;
    } catch (error) {
        console.log('Data not accessible')
        
    }
}

export const fetchcountries =async()=>{
    try {
        const {data : {countries}}=await axios.get(`${url}/countries`);
        //const response=await axios.get(`${url}/countries`);
        //console.log(response);
        return countries.map((country)=>country.name);
    } catch (error) {
        console.log(error);
        
    }
}


