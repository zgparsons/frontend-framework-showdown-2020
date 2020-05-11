import React from 'react';


const App = () => {
  return (
      <React.Fragment>
        <h1>React JS Image Search</h1>
        <form>
            <label htmlFor="searchTerm">Search Term</label>
            <input className="u-full-width" type="text" id="searchTerm" name="searchTerm" />
            <button type="submit">Search</button>
        </form>
        <img alt="loading" id="loadingImage" src="https://imgur.com/LVHmLnb.gif" />
        <section className="images">
        
        </section>
      </React.Fragment>
  );
}

export default App;
