import "./Icons.css";
import sprite from "../../../assets/images/sprite.svg";

const Icon = ({ iconName, styles, onClick }) => {
  return (
    <svg onClick={onClick} className={styles} viewBox="0 0 1000 500">
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
};

export default Icon;
