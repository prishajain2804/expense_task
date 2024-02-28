import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";
import { useState,useEffect, createContext } from "react";
import Expenses from "./components/Expenses";


export const ExpenseContext = createContext();
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
    <ExpenseContext.Provider value={expenses}>
      <ExpenseForm addExpense={handelAddExpense}></ExpenseForm>
      <Expenses  />
    </ExpenseContext.Provider>
  );
}

export default App;
