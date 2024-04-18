
import Expenses from "./components/Expenses";

function App() {

  const expenses = [
    {id:1, date: new Date(2023, 7, 15), title:"Insurance",amount: 100,location:"Bangalore"},
    {id:2, date: new Date(2023, 3, 23), title:"Book",amount: 10,location:"Delhi"},
    {id:3, date: new Date(2023, 11, 29), title:"Pen",amount: 1,location:"Hyderabad"},
    {id:4, date: new Date(2023, 1, 8), title:"Laptop",amount: 200,location:"Mumbai"}
  ]
  return (
    <div>
     <h1>Let's get started</h1>
     <p>I am learning react</p>
     <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
