import styles from "./form/Form.module.css";
const Button = ({ onReset }) => {
  return (
    <button
      type="button"
      className={`${styles["btn"]} ${styles["btn-info"]}`}
      onClick={onReset}
    >
      Reset
    </button>
  );
};

export default Button;
