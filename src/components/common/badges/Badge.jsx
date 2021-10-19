import "./Badge.css";

const Badge = ({ styles, label, keyPros }) => {
  return (
    <span key={keyPros} className={styles}>
      {label}
    </span>
  );
};

export default Badge;
