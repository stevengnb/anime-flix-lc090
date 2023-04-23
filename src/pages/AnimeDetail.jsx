import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SHOW_DETAIL } from "../lib/queries/ShowDetail";
import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import AnimeDetailCard from "../components/AnimeDetailCard";

function AnimeDetail () {
    let {animeId} = useParams();

    const { data } = useQuery(SHOW_DETAIL, {
        variables: {
          page: 1,
          perPage: 45,
          id: animeId
        }
    });

    return ( 
        <div>
            <Navbar type={3}/>
            {
                data && data.Page.media ? (
                    data.Page.media.map((media, index) => (
                        <AnimeDetailCard media={media} key={index}/>
                    ))
                ) : (
                    <Loading size="load-error-page load-full"/>
                )
            }
        </div>
    );        
}

export default AnimeDetail;