import { useEffect, useState } from 'react';
import '../css/component.css';

function favButtonClicked(e) {
  if(e.target.classList.contains('btn-fav')) {
    if(e.target.classList.contains('anime-fav')) {
      e.target.classList.remove('anime-fav');
      e.target.textContent = 'Add to favorite !';
    } else {
      e.target.classList.add('anime-fav');
      e.target.textContent = 'Remove from favorites';
    }
  }
}

function deleteAnimeFav(animeId, setanimeFavs) {
  const storedAnimeFavs = JSON.parse(localStorage.getItem('favorites')) || [];
  let idxDelete = storedAnimeFavs.findIndex(inFav => inFav.id === animeId);

  if (idxDelete !== -1) {
    storedAnimeFavs.splice(idxDelete, 1);
  }

  localStorage.setItem('favorites', JSON.stringify(storedAnimeFavs));
  setanimeFavs(storedAnimeFavs);
}


function FavButton({media}) {

  let animeFav = {
    id: media.id,
    coverImage: media.coverImage.large,
    title: media.title.english ? media.title.english : media.title.romaji,
    popularity: media.popularity,
    episodes: media.episodes
  };

  let [animeFavs, setanimeFavs] = useState(() => {
    let storageValue = JSON.parse(localStorage.getItem("favorites"));
    
    if(storageValue === null) {
      return [
        {
          id: 20,
          coverImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20-YJvLbgJQPCoI.jpg",
          title: "Naruto",
          popularity: 465720,
          episodes: 220
        }
      ]
    } else {
      return storageValue
    }
  });
  
  let handleClicked = (e) => {
    e.preventDefault();

    if(e.target.classList.contains('anime-fav')) {
      deleteAnimeFav(media.id, setanimeFavs);
    } else {
      const storedAnimeFavs = JSON.parse(localStorage.getItem('favorites')) || [];

      if (!storedAnimeFavs.some(fav => fav.id === animeFav.id)) {
        setanimeFavs([...animeFavs, animeFav]);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(animeFavs));
  }, [animeFavs]);
  
  return <div>
    {
      animeFavs.some(fav => fav.id === media.id) ? (
        <button
          type="button"
          className="btn-fav anime-fav"
          onClick={(e) => {
            handleClicked(e);
            favButtonClicked(e);
          }}>
            Remove from favorites
        </button>
      ) : (
        <button
          type="button"
          className="btn-fav"
          onClick={(e) => {
            handleClicked(e);
            favButtonClicked(e);
          }}>
            Add to favorite !
        </button>
      )
    }
  </div>
}

export default FavButton;