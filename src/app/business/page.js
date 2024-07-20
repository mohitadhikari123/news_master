import styles from "../page.module.css";
import Card from "../component/card";

async function getData() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a9d13c06004e44b69d6d49aaa484f84e"
  );
  return res.json();
}

const Home = async () => {
  const data = await getData();
  return (
    <>
      <div className={styles.home_page_container}>
        <div className={styles.headline}>
          <h1>News - Top Business Headlines</h1>
        </div>
        <div className={styles.news_cards}>
          {data?.articles.map((curElem) => { 
            return <Card key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
