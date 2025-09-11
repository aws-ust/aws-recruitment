import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {text}
  </button>
);
