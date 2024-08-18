import { getUrlLink } from "../utils/linkGenerator";



export const getNews = async (category) => {
    try{
        const url = getUrlLink(category);
        const response = await fetch(url);
        const data = await response.json();
        return data.articles;
    }catch(err){
        console.log("error in getNews data service")
    }
}