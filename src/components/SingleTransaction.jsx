import React, {useContext, useState} from "react";
import Axios from "axios";
import StateContext from "../StateContext";
import BackButton from "./BackButtonForIp";


const URL = "https://sf073-green-be-prod.up.railway.app/"

const SingleTransaction = () => {
  const appState = useContext(StateContext)
  const username = appState.user.username;
  const password = appState.user.password;

  const [transaction, setTransaction] = useState([]);
  const [amountValue, setAmountValue] = useState();
  const [ipValue, setIpValue] = useState();
  const [numberValue, setNumberValue] = useState();
  const [regionValue, setRegionValue] = useState();
  const [dateValue, setDateValue] = useState();


  const makeTransaction = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(
          `${URL}api/antifraud/transaction`,
          {
            amount: amountValue,
            ip: ipValue,
            number: numberValue,
            region: regionValue,
            date: dateValue
          },
          {
            withCredentials: true,
            auth: {
              username: username,
              password: "pass",
            },
          }
      );
      console.log("Transaction was successfully made.");
      setTransaction([...transaction, amountValue, ipValue, numberValue, regionValue, dateValue])
      setTransaction("");
      setAmountValue("");
      setIpValue("")
      setNumberValue("")
      setRegionValue("")
      setDateValue("")
    } catch (e) {
      console.log(e.response);
    }
  };

  const setAmount = (event) => {
    setAmountValue(event.target.value)
  }

  const setIp = (event) => {
    setIpValue(event.target.value)
  }

  const setNumber = (event) => {
    setNumberValue(event.target.value)
  }
  const setRegion = (event) => {
    setRegionValue(event.target.value)
  }
  const setDate = (event) => {
    setDateValue(event.target.value)
  }


  return (
      <div className="ban-ip-container">
        <h2 className="ban-ip-title">Transaction</h2>
        <form className="ban-ip-form">
          <label className="label-color">Amount
            <input type="text" onChange={setAmount}/>
          </label>
          <label className="label-color">IP
            <input type="text" onChange={setIp}/>
          </label>
          <label className="label-color">Card Number
            <input type="txt" onChange={setNumber}/>
          </label>
          <label className="label-color">Region
            <input type="text" onChange={setRegion}/>
          </label>
          <label className="label-color">Date and time
            <input type="text" onChange={setDate}/>
          </label>
          <button type="button" onClick={makeTransaction}>
            Transaction
          </button>
        </form>
        <BackButton/>
      </div>
  );
}

export default SingleTransaction

