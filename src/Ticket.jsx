import TicketNum from "./TicketNum";

export default function Ticket() {
  const ticket1 = ticket1(3);

  return (
    <>
      <TicketNum num={ticket1[0]} />
    </>
  );
}
