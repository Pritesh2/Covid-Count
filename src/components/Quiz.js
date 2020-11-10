import React,{useEffect,useState} from 'react';
import {Progress,Button} from 'reactstrap';
//import ProgressBar from 'react-bootstrap/ProgressBar'
import Disquestions from './DisQuestions';
import questions from '../questions';

function Timer(props)
{
    const {time}=props;
    return(
        <div>
            <div className='text-center'>
                {time===0?"Time's up":time+" seconds left"}
                </div>
            <Progress value={1.7*(60-time)} color='danger' />
        </div>
        
    );
}

function Quiz(props)
{
    // first we require a timer.

    let pp=props;
    const [time,setTime]=useState(60);

    const [active,setActive]=useState(true);

    const[problems,setProblems]=useState(null);

    const [current,setCurrent]=useState(0);

    const [selected,setSelected]=useState([null,null,null,null,null]);


    const finish=()=>{
        setActive(false);
        let score=0;
        for(let i=0;i<problems.length;i++)
        {
            if(problems[i].correct===selected[i])
            {
                score+=10;
            }

        }
        alert('Congrats!!! You have scored '+score+' out of 100');
    }

    const setUsersChoice=(index,choice)=>{

        let t=selected;
        t[index]=choice;
        setSelected(t);
    }

    useEffect(()=>{

        if(time<=1){
           finish();
        }

        if(active){
        setTimeout(()=>{
            setTime(time-1);
        },1000);}
    },[time]);

    useEffect(()=>{
        setProblems(questions);
    },[])

    return (
       
        <div>
            <div className="row">
                <div className="col-12">
                    <Timer time={time}></Timer>

                    <br></br>
                    <Disquestions 
                    index={current}
                     problem={!problems?null:problems[current]}
                     active={active}
                     userChoice={selected[current]}
                     setUsersChoice={setUsersChoice}
                     ></Disquestions>

                    <br></br>
                    {
                      current !==0 ?(

                        <div className='text-center'>
                            <Button color='info' onClick={()=>{
                                setCurrent(current-1)
                            }} >Previous</Button>{' '}
                        </div>
                      ):('')        
                    }
                   <br></br>
                    {current!==10?(
                        <div className='text-center'>
                            <Button color='info' onClick={
                                ()=>{setCurrent(current+1)}
                            }>Next</Button>{' '}
                        </div>
                    ):('')
                       

                    }
                    {
                        active?
                        <div className='text-center'>
                            <Button color='info' onClick={
                                ()=>{finish()}
                            }>Submit</Button>{' '}
                        </div>
                        :('')
                       
                    }


                </div>
            </div>
        </div>
    )
}

export default Quiz;