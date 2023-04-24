import FavButton from './FavButton';
import '../css/component.css';

function AnimeDetailCard({media}) {
    return (
        <div className="every-ad">
            <div><img className="ad-image" src={media.bannerImage} alt=""/></div>
            <div className="anime-title adt-title">
                {media.title.english ? media.title.english : media.title.romaji}
            </div>
            <div className="anime-description">
                <div dangerouslySetInnerHTML={{ __html: media.description }}></div>
            </div>
            <div className="adt-cont">
                <div className="adt-left">
                    <div className="anime-score adt">Score: {media.averageScore}</div>
                    <div className="anime-popularity adt">Popularity: {media.popularity}</div>
                </div>
                <div className="adt-right">
                    <div className="anime-genres">
                        <p>GENRES</p>
                        {
                            media.genres.map((genre, index2) => {
                                return <p className="every-genre" key={index2}>{genre}</p>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="adt-cont">
                <div className="anime-episode adt">Total episodes: {media.episodes}</div>
                <div className="anime-sd adt">Start date: {media.startDate.day}-{media.startDate.month}-{media.startDate.year}</div>
                <div className="anime-ed adt">End date: {media.endDate.day}-{media.endDate.month}-{media.endDate.year}</div>
                <div className="anime-season adt">Season: {media.season}</div>
                <div className="anime-format adt">Format: {media.format}</div>
            </div>
            <FavButton media={media}/>
        </div>
    )
}

export default AnimeDetailCard;