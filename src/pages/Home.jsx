import Navbar from '../components/Navbar';
import { useQuery } from "@apollo/client"
import { SHOW_ALL } from '../lib/queries/ShowAll';
import { useState } from 'react';
import { SHOW_SEARCH } from '../lib/queries/ShowSearch';
import Loading from '../components/Loading';
import Error from '../components/Error';
import AnimeCard from '../components/AnimeCard';
import '../css/page.css';
import NotFound from '../components/NotFound';

function Home() {
    const [searching, setSearching] = useState("");
    
    const {loading, error, data} = useQuery(SHOW_ALL, {
        variables: {
            page: 1,
            perPage: 45
        }
    })

    const {data: dataSearch } = useQuery(SHOW_SEARCH, {
        variables: {
            page: 1,
            perPage: 45,
            search: searching
        }
    });
    
    const handleOnChange = (e) => {
        setSearching(e.target.value);
    };
    
    if(loading) {
        return <Loading size="load-error-page load-full"/>;
    } else if (error) {
        return <Error/>;
    }

    console.log({dataSearch});

    return (
    <div>
        <Navbar type={1}/>
        <div className="all">
            <input 
                className="search"
                placeholder="S E A R C H"
                onChange={handleOnChange}
            />
            {
                searching === "" ? (
                    <div className="anime-all">
                        {
                            data.Page.media.map((media, index) => (
                                <div className="every-anime" key={index}>
                                    <AnimeCard media={media} type="show-all"/>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    dataSearch && dataSearch.Page.media ? (
                        dataSearch.Page.media.length > 0 ? (
                            <div className="anime-all">
                                {
                                    dataSearch.Page.media.map((media, index) => (
                                        <div className="every-anime" key={index}>
                                            <AnimeCard media={media} type="show-all"/>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <NotFound size="load-error-page load-half not-load"/>
                        )
                    ) : (
                    <Loading size="load-error-page load-half"/>
                    )
                )
            }
        </div>
    </div>
  );
}

export default Home;
