import { useState } from "react";
import toast from "react-hot-toast";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("open");

  const handleAdd = () => {
    if (!title) return toast.error("Title is required!");
    const newTicket = { id: Date.now(), title, status };
    setTickets([...tickets, newTicket]);
    setTitle("");
    toast.success("Ticket created!");
  };

  const handleDelete = (id) => {
    setTickets(tickets.filter(t => t.id !== id));
    toast.success("Ticket deleted!");
  };

  return (
    <div className="container">
      <h2>Ticket Management</h2>
      <div>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
        <button className="btn" onClick={handleAdd}>Add Ticket</button>
      </div>

      <ul>
        {tickets.map(t => (
          <li key={t.id}>
            <strong>{t.title}</strong> — {t.status}
            <button style={{marginLeft: "10px"}} onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
