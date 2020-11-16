import React,{useState} from 'react';
//import Cards from './components/Cards';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.modules.css';
import {fetchData} from './api';
import coronapic from './image/image2.jpg';
import Quiz from './components/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Progress,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import DisQuestions from './components/DisQuestions';
import { render } from '@testing-library/react';
//import questions from './questions'


function PlayQuiz(props)
{
  
    const [pp,setpp]=useState(0);
   
    return(

     
        <div className='text-center'>
         
          <Button color='danger' onClick={()=>setpp(pp+1)}>Play Quiz</Button>
          {
          pp!==0?(
           <Quiz></Quiz>
          ):('')}
        </div>
        
    );

  
}



//function App() {
  let pl=0;
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
 
  //const pl=0;
  activateQuiz = () => {

    pl=1;
    //window.location.reload(false);
    console.log('Button Clicked');
    console.log(pl);
    //pl===1?(<Quiz></Quiz>):('')
    }

  render(){
    const {data,country}=this.state;
  return (
    <Router>
    <div>
      
    <div className={styles.container}>

      <img className={styles.image} src={coronapic} alt="COVID-19"></img>

      
      <Cards data={data}> </Cards>
      <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
     
      <Chart data={data} country={country}></Chart>
  
      
      <div>
      
    
      </div> 
      
      <div>
      <Progress value={2 * 5} />
      <Progress color="success" value="25" />
      <Progress color="info" value={50} />
      <Progress color="warning" value={75} />
      
    </div>
      
      
    </div>

    {/*
    <div className='text-center'>
        <Button color='danger' >Retry</Button>
      </div>
    */}
    <PlayQuiz ></PlayQuiz>

    {
      /* <div className='text-center'>
    <h3>Daily Indian Stats</h3>
    //<Indian></Indian>
    </div>
    */
    }
    
    
     

      
     
    {/*<DisQuestions></DisQuestions>*/}
    
    {/*
    <Link to='/' >
      <div className='text-center'>
        <Button color='danger' onClick={()=>this.Quiz} >Retry</Button>
      </div>
      
    </Link>*/}
   
    
    </div> 

    </Router>
  );

}
}

export default App;
