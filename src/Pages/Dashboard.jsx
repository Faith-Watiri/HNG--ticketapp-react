import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Dashboard() {

    const { logout }  = useAuth();

    return (
        <div className="container">
            <h2>Dashboard</h2>
            <p>Open: 2 | In Progress: 2 | Closed: 1</p>
          <div>
            <Link to="/tickets" className="btn">Manage Tickets</Link>
            <button className="btn btn-outline" style={{marginLeft:"10px"}} onClick={logout}>Logout</button>
          </div>
        </div>
    );
 
}