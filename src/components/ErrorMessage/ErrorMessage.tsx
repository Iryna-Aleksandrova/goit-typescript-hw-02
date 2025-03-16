import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={s.error}>The site is not responding or was not found...</p>
  );
};

export default ErrorMessage;
