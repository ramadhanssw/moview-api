import "./App.css";

const App = () => {
  const search = (q) => {
    console.log({ q });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Moview</h1>
        <div className="Movie-container">
          <input
            placeholders="Find Movie Review..."
            className="Movie-search"
            onChange={({ target }) => search(target.value)}
          />
          <div className="Movie-wrapper">
            <div className="Movie-title"></div>
            <img className="Movie-image" />
            <div className="Movie-date"></div>
            <div className="Movie-rate"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
