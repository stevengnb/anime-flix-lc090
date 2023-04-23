import { gql } from "@apollo/client";

export const SHOW_DETAIL = gql`
    query ($perPage: Int, $page: Int, $id: Int) {
        Page(perPage: $perPage, page: $page) {
            media(type: ANIME isAdult: false, id: $id) {
                id
                coverImage {
                    large
                }
                bannerImage
                title {
                    english
                    romaji
                }
                popularity
                episodes
                averageScore
                genres
                format
                season
                startDate {
                    year
                    month
                    day
                }
                endDate {
                    year
                    month
                    day
                }
            
            }
        }
    }
  
`;