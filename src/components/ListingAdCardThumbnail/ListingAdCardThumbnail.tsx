import { createThumbnailUrls } from "utils/string";
import styles from "./ListingAdCardThumbnail.module.css"
import { ListingAdCardThumbnailProps } from "./ListingAdCardThumbnail.types";

function ListingAdCardThumbnail({ alt, src }: ListingAdCardThumbnailProps) {
  const [imageUrl1x, imageUrl2x] = createThumbnailUrls(src, 544);

  return (
    <div className={styles.thumbnailContainer}>
      <img
        className={styles.thumbnail}
        alt={alt}
        loading="lazy"
        width="544"
        height="272"
        src={imageUrl1x}
        srcSet={`${imageUrl1x}, ${imageUrl2x} 2x`}
      />
    </div>
  );
}

export default ListingAdCardThumbnail;
