import { useEffect, useState } from "react";
import AllNewsSection from "./allNewsSection/AllNewsSection";
import FeaturedArticles from "./featuredArticles/FeaturedArticles";
import { useGetNews } from "../../hooks/useGetNews";


export default function Article({ name }) {

  const [news, setNews] = useGetNews(name);
  const [loading, setLoading] = useState(true);
  console.log(news);

  function cleanDuplicateNews(news) {
    const uniqueNews = news.filter((news, index, self) =>
      index === self.findIndex((t) => (
        t.title === news.title || t.urlToImage === news.urlToImage

      ))
    )
    return uniqueNews;
  }
  const newsToSend = cleanDuplicateNews(news);

  useEffect(() => {
    if (newsToSend.length > 0) {
      setLoading(false);
    }
  }, [newsToSend])


  return (
    <>
    {!loading &&  <FeaturedArticles feauturedNews={newsToSend.slice(0.6)} /> }
    {!loading && <AllNewsSection category={name} news={newsToSend.slice(7)} />} 
    </>
  );
}
