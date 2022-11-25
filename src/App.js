import { useCallback, useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "http://localhost:8080/v1/users/179a44f9-7032-47c8-ac07-180a93159ce0"
    );

    if (!response.ok) {
      setError("Something went wrong!!");
      setIsLoading(false);
      return;
    }

    const user = await response.json();
    setUser(user);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  let content = <p>User was not found</p>;

  if (user) {
    content = (
      <p>
        {user.firstName} {user.secondName}
      </p>
    );
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>The data is being loaded</p>;
  }

  return <div className="App">{content}</div>;
}

export default App;
