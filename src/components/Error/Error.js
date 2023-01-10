import { useRouteError } from "react-router-dom";
import styles from "./Error.module.css";

export const Error = (props) => {
  const error = useRouteError();

  return (
    <div className={styles.errorWrapper}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
