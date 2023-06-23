import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/users/list");
      console.log("🚀 ~ data:", data);

      setUsers(data.data);

    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {users.map((item, idx) => (
        <div key={idx}>
          <p>{item.username}</p>
          <p>{item.email}</p>
        </div>

      ))}
    </div>
  );
}

export default App;