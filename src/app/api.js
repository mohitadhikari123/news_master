async function getData(category) {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${category}&apiKey=a9d13c06004e44b69d6d49aaa484f84e`
  );
  return res.json();
}
export default getData;