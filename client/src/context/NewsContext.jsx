import { createContext } from "react";
import { useGetNews } from "../hooks/useGetNews";


const NewsContext = createContext();

export default NewsContext;


export function NewsProvider({ children }) {

    const [news, setNews] = useGetNews("World News");
    const [techNews, setTechNews] = useGetNews("Tech News");
    const [sportNews, setSportNews] = useGetNews("Sport News");
    const [businessNews, setBusinessNews] = useGetNews("Business News");
    const [entertainmentNews, setEntertainmentNews] = useGetNews("Entertainment");


    const ctx = {
        news: news,
        techNews: techNews,
        sportNews: sportNews,
        businessNews: businessNews,
        entertainmentNews: entertainmentNews
    }

    console.log("News Provider");
    return (
        <NewsContext.Provider value={ctx}>
            {children}
        </NewsContext.Provider>
    )
}