import Image from "next/image";
import styles from "../page.module.css";
export default function Card(curElem) {
  const { id, image, title, url, urlToImage, publishedAt, description } =
    curElem;

  return (
    <>
      { urlToImage ? (
        <div className={styles.card_container}>
          <a href={curElem?.url}>
            <div className={styles.card_image}>
              {curElem?.urlToImage && (
                <Image
                  priority={true}
                  src={curElem?.urlToImage}
                  alt="News Image"
                  width={486}
                  height={243}
                />
              )}
            </div>
            <div className={styles.news_text_container}>
              <div className={styles.title}>
                <span>{curElem?.title}</span>
              </div>
              <div className={styles.desc}>{curElem?.description}</div>
              <div className={styles.channel_publish}>
                <div className={styles.channel}>
                  Channel : {curElem?.source.name}
                </div>
                <div className={styles.publish}>
                  Pulish Date : {curElem?.publishedAt}
                </div>
              </div>
            </div>
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
