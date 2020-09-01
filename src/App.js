import React from 'react';
//import Cards from './components/Cards';

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.modules.css';
import {fetchData} from './api';
import coronapic from './image/image2.jpg';


//function App() {
class App extends React.Component{

    state={
      data:{},
      country:'',
    }


  async componentDidMount(){
    const fetcheddata=await fetchData();

    //console.log(data);
    this.setState({data:fetcheddata});
  }

  handleCountryChange=async(country)=>{
    console.log(country);
    // fetch the data
    const fetcheddata=await fetchData(country);
    console.log(fetcheddata);
    // set the state
    this.setState({data:fetcheddata,country:country});
  }
 

  render(){
    const {data,country}=this.state;
  return (
    <div className={styles.container}>

      <img className={styles.image} src={coronapic} alt="COVID-19"></img>

      <Cards data={data}>

      </Cards>
      <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
      <Chart data={data} country={country}></Chart>
      
      
    </div>
  );

}
}

export default App;
