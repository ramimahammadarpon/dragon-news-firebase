import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import { Link, useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
    const [news, setNews] = useState([]);
    const userData = useLoaderData();
    const {id} = useParams();
    useEffect(()=>{
        const filteredNews = userData.find(data => data.id ==id);
        setNews(filteredNews);
        
    }, [userData, id]);
    
  return (
    <div>
      <header className="pt-3">
        <Header></Header>
      </header>
      <main className="w-10/12 mx-auto grid grid-cols-12 gap-10">
        <section className="col-span-9 text-primary">
            <h3 className="font-bold">Dragon News</h3>
            <div className="mt-5 px-7 space-y-5">
                <img className="w-full h-[450px] object-cover" src={news.image_url} alt="" />
                <h2 className="font-bold text-2xl">{news.title}</h2>
                <p className="text-lg text-accent">{news.details}</p>
                <Link className="btn btn-secondary" to={`/category/0`}>All News In This Category</Link>
            </div>
        </section>
        <aside className="col-span-3">
            <RighAside></RighAside>
        </aside>

      </main>
    </div>
  );
};

export default NewsDetails;
