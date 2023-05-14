import { ButtonHTMLAttributes } from "react";
import styles from "./ButtonLink.module.css"

function ButtonLink(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={styles.buttonLink} {...props} />;
}

export default ButtonLink;
