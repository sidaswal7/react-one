import ExpenseItem from "./ExpenseItem";
const Expenses = (props)=>{
    return(
        <div>
            {
             props.expenses.map((expense)=> {
                return (
                    <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                    location={expense.location}
                    /> 
                )
            })
     
             }
        </div>
    )
}

export default Expenses;