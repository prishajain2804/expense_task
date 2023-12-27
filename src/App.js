import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";
import { useState,useEffect } from "react";

function App() {
  const [expenses,setExpenses] = useState([
    { title: "Soap", date: new Date(2022, 11, 26), amount: 200 },
    { title: "Car", date: new Date(2026, 3, 24), amount: 900000},
    { title: "Bike", date: new Date(2020, 1, 2), amount: 300000 }

  ]);

  const handelAddExpense =(expense) =>{
    console.log("hanelExpense:",JSON.stringify(expense));
    setExpenses((prevState) => {

     return[...prevState,expense];
    })
  }
  useEffect(()=>{
    console.log(JSON.stringify(expenses))
  },[expenses])
 
  return (
    <>
      <ExpenseForm addExpense={handelAddExpense}></ExpenseForm>
      {expenses.map((expense)=>{
        return <ExpenseItem expense={expense} />
      })}
      {/* <ExpenseItem 
      expense={expenses[0]} />
      <ExpenseItem 
     expense={expenses[1]} />
      <ExpenseItem 
      expense={expenses[2]} /> */}
    </>
  );
}

export default App;
