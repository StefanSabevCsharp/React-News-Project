import { useEffect, useState } from "react"
import { getNews } from "../service/dataService";


export const useGetNews = (category) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (
            async () => {
                try{
                    const response = await getNews(category);
                    setNews(response);
                }catch(err){
                    setError(err);
                }
            }
        )();
    }, [category]);

    return [news,setNews];

}