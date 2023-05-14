import { Ad } from "types/Ad";

import styles from "./ListingAdCardMainInfo.module.css";

function ListingAdCardMainInfo({
  title,
  address
}: Pick<Ad, "title" | "address">) {
  return (
    <div className={styles.mainInfo}>
      <img
        src="/icons/building-icon.svg"
        alt="building"
        width={40}
        height={40}
      />
      <div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.address}>{address}</div>
      </div>
    </div>
  );
}

export default ListingAdCardMainInfo;
