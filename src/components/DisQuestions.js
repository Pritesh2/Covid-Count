import React,{useState} from 'react';
import {Form,FormGroup,Label,Input,spinner,Alert} from 'reactstrap';


function DisQuestions(props) {

    const {index,problem,active,setUsersChoice,userChoice}=props;
    if(!problem)
    {
        return <spinner color='primary'></spinner>
    }
    const {question,correct,choices,desc}=problem;

    
    return (
        <div className='text-center'>
        <div className="row">
            <div className="col-12 text-center" >
                <h5>
                    {index+1 + '.'+ question}
                </h5>
            </div>
            
        </div>

        {
        choices.map((option,i)=>(
            <Form key={i.toString()}>
            <FormGroup check>
            <Label check>
              <Input type='radio' 
              name={'radio'+i} 
              checked={userChoice===i+1}
              onChange={()=>{
                setUsersChoice(index,i+1);
              }}
              />{option}
             
            </Label>
          </FormGroup>
          </Form>
          

        ))
        }

{

!active?<Alert color='info'>
  
  <b>Correct Answer: </b>({correct})
  <br />
  <br></br>
  <b>Description:</b>({desc})
  </Alert>:""

}
       
      </div>
    )
}

export default DisQuestions
