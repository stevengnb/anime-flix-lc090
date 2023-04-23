import Navbar from '../components/Navbar';
import AnimeCard from '../components/AnimeCard';
import '../css/page.css';
import '../css/component.css';
import NoFavorite from '../components/NoFavorite';

function Favorite() {
  const storedAnimeFavs = JSON.parse(localStorage.getItem("favorites"));

  const animeFavs = storedAnimeFavs === null ? (
    [
      {
        id: 20,
        coverImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20-YJvLbgJQPCoI.jpg",
        title: "Naruto",
        popularity: 465720,
        episodes: 220
      }
    ]
  ) : (
    storedAnimeFavs
  );

  return (
    <div>
      <Navbar type={2}/>
      <div className="all">
        {
          animeFavs.length === 0 ? (
            <NoFavorite size="load-error-page load-half not-load"/>
          ) : (
            <div className="anime-all">
            {
              animeFavs.map((animeFav, index) => { 
                return (
                  <div className="every-anime" key={index}>
                    <AnimeCard media={animeFav} type="not-show-all" />
                  </div>
                );
              })
            }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Favorite;
