import AllNewsSection from "./allNewsSection/AllNewsSection";
import FeaturedArticles from "./featuredArticles/FeaturedArticles";


export default function Article({name}) {
  const mainArticle = {
    title: 'Big News Headline',
    image: '/test.webp',
    link: '/news/big-news-headline',
  };

  const smallArticles = [
    {
      title: 'Small News 1',
      image: 'mini.jpg',
      description: 'Brief description of the first small news article.',
      link: '/news/small-news-1',
      date: 'June 1,2024',
    },
    {
      title: 'Small News 2',
      image: 'https://source.unsplash.com/400x300/?news,2',
      description: 'Brief description of the second small news article.',
      link: '/news/small-news-2',
      date: 'June 1,2024',
    },
    {
      title: 'Small News 3',
      image: 'https://source.unsplash.com/400x300/?news,3',
      description: 'Brief description of the third small news article.',
      link: '/news/small-news-3',
      date: 'June 1,2024',
    },
  ];

  return (
    <>
    <FeaturedArticles mainArticle={mainArticle} smallArticles={smallArticles} />
    <AllNewsSection category={name}/>
    </>
  );
}
