import { Link } from 'react-router-dom';
import '../css/component.css';

function AnimeCard({media, type}) {
    return  <div>
        {
            type === "show-all" ? (
                <div>
                    <Link to={`/${media.id}`} className="anime-title">
                        {media.title.english ? media.title.english : media.title.romaji}
                    </Link>
                    <br/>

                    <Link to={`/${media.id}`}>
                    <img className="anime-image" src={media.coverImage.large} alt="" />
                    </Link>
                </div>
            ) : (
                <div>
                    <Link to={`/${media.id}`} className="anime-title">{media.title}</Link>
                    <br/>

                    <Link to={`/${media.id}`}>
                    <img className="anime-image" src={media.coverImage} alt="" />
                    </Link>
                </div>
            )
        }
        <div className="anime-popularity">Popularity: {media.popularity}</div>
        <div className="anime-episode">Total episodes: {media.episodes}</div>
    </div>
}

export default AnimeCard;