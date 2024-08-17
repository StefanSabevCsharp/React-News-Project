import { apiLink } from "../newsLinks";

export  function getUrlLink(category) {

    switch (category) {
        case "World News":
            return apiLink.worldNews;
        case "Entertainment News":
            return apiLink.entertainmentNews;
        case "Business News":
            return apiLink.businessNews;
        case "Sport News":
            return apiLink.sportNews;
        case "Tech News":
            return apiLink.techNews;
        default:
            return apiLink.worldNews;
    }

}
    
