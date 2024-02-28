import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import { useContext } from "react";
import { ExpenseContext } from "../App";

function Expenses() {
  const expenses = useContext(ExpenseContext);
  return (
    <Card className="expenses">
      {expenses.map((expense, index) => {
        return <ExpenseItem key={index} expense={expense} />;
      })}
    </Card>
  );
}
export default Expenses;
