import React,{useState,useEffect} from 'react';
import { fetchDailyData } from '../../api';
import {Line,Bar} from 'react-chartjs-2';
//import { StylesProvider } from '@material-ui/core';
import styles from './chart.module.css';


const Chart=({data,country})=>{

    const [dailyData,setDailyData]=useState([]);


    useEffect(()=>{
        const fetchAPI=async()=>{
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    },[]);

   
    const lineChart=(
        dailyData.length!=0?(
        <Line data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{ //line on chart to indicate the infected ones
                data:dailyData.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true,
            },{
                // line to indicate death
                data:dailyData.map(({deaths})=>deaths),
                label:'Deaths', 
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true,
            }],
        }}></Line>):null
    );

    console.log('$$$$$$$$$$$$$$');
    console.log(country);
    console.log(data);
    const barchar=(
        data.confirmed?(
            <Bar 
                data={{ 
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:[
                            'rgba(112,9,255,0.5)',
                            'rgba(212,255,10,0.5)',
                            'rgba(255,0,0,0.8)'],
                            data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                    }],
                   
                }}
             options={{
                 legend:{display:false},
                title:{display:true,text:`Current state in ${country}`}
            }}></Bar>

        ):null
    );
    return(
        <div className={styles.container}>
            {country?barchar:lineChart}
        </div>
    )
}

export default Chart;