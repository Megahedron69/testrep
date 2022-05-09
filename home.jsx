import React from "react";
import "../scss/appnavbar.scss";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [formdata, setformdata] = React.useState({
    statements: "",
    expense: "",
    category: "",
    number: "",
    date: "",
  });
  function handlechange(event) {
    const { name, value } = event.target;
    setformdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  //home
  function handledata() {
    const key = uuidv4();
    localStorage.setItem(key, JSON.stringify(formdata));
  }
  function handlesubmit(event) {
    event.preventDefault();
  }
  console.log(formdata);
  return (
    <div>
      <div className="homehead">
        <h1>HOME</h1>
      </div>
      <form onSubmit={handlesubmit}>
        <div className="speech">
          <input
            className="statement"
            name="statements"
            onChange={handlechange}
            value={formdata.statements}
            type="text"
            placeholder="Add Your Statement"
          />
        </div>
        <div className="farm Expense ">
          <label htmlFor="expense">Type: </label>
          <select
            className="expensetype"
            id="expense"
            name="expense"
            onChange={handlechange}
            value={formdata.expense}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <div className="farm Category">
          <label htmlFor="category">Category: </label>
          <select
            className="categorytype"
            id="category"
            name="category"
            onChange={handlechange}
            value={formdata.category}
          >
            <option value="Buisness">Buisness</option>
            <option value="Investments">Investments</option>
            <option value="Extra Income">Extra Income</option>
            <option value="Deposits">Deposits</option>
            <option value="Lottery">Lottery</option>
            <option value="Gifts">Gifts</option>
            <option value="Salary">Salary</option>
            <option value="Savings">Savings</option>
            <option value="Rental Income">Rental Income</option>
          </select>
        </div>
        <div className="farm Number">
          <input
            type="number"
            placeholder="Amount"
            name="number"
            onChange={handlechange}
            value={formdata.number}
          />
        </div>
        <div className="farm Date">
          <label htmlFor="date">Date:</label>
          <input
            name="date"
            onChange={handlechange}
            value={formdata.date}
            type="date"
          />
        </div>
        <div className="farm">
          <button onClick={handledata}>CREATE</button>
        </div>
      </form>
    </div>
  );
}
