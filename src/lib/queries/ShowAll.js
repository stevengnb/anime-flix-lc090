import { gql } from "@apollo/client";

export const SHOW_ALL = gql`
    query ($perPage: Int, $page: Int) {
        Page(perPage: $perPage, page: $page) {
        media(type: ANIME, sort: POPULARITY_DESC, isAdult: false) {
            id
            coverImage {
                large
            }
            title {
                english
                romaji
            }
            popularity
            episodes
        }
        }
    }
  
`;