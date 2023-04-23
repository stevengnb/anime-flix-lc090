import { gql } from "@apollo/client";

export const SHOW_SEARCH = gql`
    query ($perPage: Int, $page: Int, $search: String) {
        Page(perPage: $perPage, page: $page) {
        media(type: ANIME, search: $search, isAdult: false) {
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