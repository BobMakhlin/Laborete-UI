import { Button } from "@mui/material";
import { useMemo } from "react";
import { useCallback } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import styles from "./Error.module.css";

export const Error = (props) => {
  const error = useRouteError();
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className={styles.errorWrapper}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button
        onClick={goBack}
        sx={{ my: 2, display: "block" }}
        color="secondary"
        variant="outlined"
      >
        Back
      </Button>
    </div>
  );
};
