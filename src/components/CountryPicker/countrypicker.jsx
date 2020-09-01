import React ,{useState,useEffect}from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';

import styles from './countrypicker.module.css';

import {fetchcountries} from '../../api';

const CountryPicker=({handleCountryChange})=>{

    const [fetchedCountries,setFetchedCountries]=useState([]);

    useEffect(()=>{
        const fetchapi= async()=>{

            setFetchedCountries(await fetchcountries())

        }
        fetchapi();
    },[setFetchedCountries]);

    console.log(fetchedCountries);
    return(
       // <h1>Country Picker</h1>
       <div className={styles.container}>
       <FormControl > 
           <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
            <option value='global'>Global</option>
    {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
       </div>
    )
}

export default CountryPicker;