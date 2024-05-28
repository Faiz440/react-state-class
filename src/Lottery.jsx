import { useState } from "react";
import "./Lottery.css";
import { genTicket } from "./helper";
import { sum } from "./helper";

export default function Lottery() {
  const getTicket = genTicket(3);

  const [data, setData] = useState(getTicket);

  console.log(data);
  let isWining = sum(getTicket) === 31;
  let buyTicket = () => {
    setData(genTicket(3));
  };
 
  return (
    <div>
      <h1>Lottry!</h1>
      <div className="ticket">
        <span>{getTicket[0]}</span>
        <span>{getTicket[1]}</span>
        <span>{getTicket[2]}</span>
      </div>
      <br />
      <br />
      <button onClick={buyTicket}> Buy new Ticket</button>
      <h1>{isWining && "congratulations , you won!"}</h1>
    </div>
  );
}
