import { Alert, Card, LinearProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./MyProfile.module.scss";

const SERVER_ERROR_MESSAGE = "An error occured on our side";

export const MyProfile = (props) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:8080/v1/users/179a44f9-7032-47c8-ac07-180a93159ce0"
      );

      if (!response.ok) {
        setError(response.statusText);
      } else {
        const user = await response.json();
        setUser(user);
      }
    } catch (e) {
      console.log("error:", e);
      setError(SERVER_ERROR_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (isLoading) {
    return (
      <div className={styles.loadingBlock}>
        <LinearProgress className={styles.loadingProgress} />
      </div>
    );
  }

  if (error) {
    return (
      <Alert sx={{ my: 2 }} severity="error">
        {error}
      </Alert>
    );
  }

  if (user) {
    return (
      <>
        <Card className={styles.header}>
          <h2>
            {user.firstName} {user.secondName}
          </h2>
          <h3>{user.position}</h3>
          <p className={styles.location}>{user.location}</p>
        </Card>
        <Card className={styles.generalInfo}>
          <h2>General information</h2>
          <p>{user.generalInfo}</p>
        </Card>
      </>
    );
  }

  return null;
};
