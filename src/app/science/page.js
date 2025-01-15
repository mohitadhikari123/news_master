import styles from "../page.module.css";
import Card from "../component/card";
import getData from "../api";

const Home = async () => {
const [data, setData] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    const result = await getData("science");
    setData(result);
  };
  fetchData();
}, []);  return (
    <>
      <div className={styles.home_page_container}>
        <div className={styles.headline}>
          <h1>News - Top Science Headlines</h1>
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
