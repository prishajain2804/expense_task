import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { title, date, amount } = props.expense;

  return (
    <div className="expense-item">
      <div>
        <div>{date.toLocaleString("en-US", { day: "2-digit" })}</div>
        <div>{date.toLocaleString("en-US", { month: "short" })}</div>
        <div>{date.getFullYear()}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{"Rs." + amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
