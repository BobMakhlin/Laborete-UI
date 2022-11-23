import { useState } from "react";
import "./App.scss";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);

    const response = await fetch(
      "http://localhost:8080/v1/users/179a44f9-7032-47c8-ac07-180a93159ce0"
    );
    const user = await response.json();

    console.log("data:", user);
    setUser(user);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <button onClick={fetchUser}>Fetch</button>
      {isLoading && <p>The data is being loaded</p>}
      {!isLoading && user && (
        <p>
          {user.firstName} {user.secondName}
        </p>
      )}
      {!isLoading && !user && <p>User was not found</p>}
    </div>
  );
}

export default App;
