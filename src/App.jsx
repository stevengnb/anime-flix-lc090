import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AnimeDetail from "./pages/AnimeDetail";
import { useEffect, useState } from "react";
import Splash from './components/Splash';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

function App() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 2000);
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        {
          splashScreen ? (
            <Splash/>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Favorite" element={<Favorite />} />
              <Route path="/:animeId" element={<AnimeDetail />} />
            </Routes>
          )
        }
      </Router>
    </ApolloProvider>
  );
}

export default App;
