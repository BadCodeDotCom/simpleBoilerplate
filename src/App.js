import SimpleNews from "./components/simpleNews";

const App = () => {

  const newsTitle = 'News Generator';

  return (

<div className="news-generator-form">
  <h1>{newsTitle}</h1>
  <SimpleNews>

  </SimpleNews>
</div>
  );
}

export default App;
