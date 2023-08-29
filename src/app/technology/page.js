import styles from "../page.module.css";
import Card from "../component/card";
// "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=93c3f039d28010095e57f092e3c32b8f"
// https://gnews.io/api/v4/top-headlines?country=india&lang=en&category=technology&apikey=93c3f039d28010095e57f092e3c32b8f

async function getData() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a9d13c06004e44b69d6d49aaa484f84e"
  );
  return res.json();
}

const Home = async () => {
  const data = await getData();
  return (
    <>
      <div className={styles.home_page_container}>
        <div className={styles.headline}>
          <h1>News - Top Technology Headlines</h1>
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
