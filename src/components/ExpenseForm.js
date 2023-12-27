import { useEffect, useState } from "react";

function ExpenseForm(){

  const [title,setTitle]=useState("");
  const [date,setDate]=useState("");
  const [amount,setAmount]=useState("");

  useEffect(() => {
    console.log("Title=",title);
  },[title]);
 
  const handelSubmit = (event) => {
    event.preventDefault()
    console.log(title)

  }
return(
    <div>
        <form onSubmit={handelSubmit}>
        <label htmlFor="title">Title:</label>&nbsp;&nbsp;
            <input type="text" name="title" id="title" onChange={(event)=>{
                setTitle(event.target.value);
                
            }}></input><br></br><br></br>
            <label htmlFor="date">Date:</label>&nbsp;&nbsp;
            <input type="date" name="date" id="date"></input><br></br><br></br>
            <label htmlFor="amount">Amount:</label>&nbsp;&nbsp;
            <input type="text" name="amount" id="amount"></input><br></br><br></br>
            <input type="submit" name="submit" value="submit"/>
        </form>
    </div>
)
}
export default ExpenseForm;