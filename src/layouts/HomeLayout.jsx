import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RighAside from "../components/homelayout/RighAside";

const HomeLayout = () => {
  const {state} = useNavigation();
  return (
    <div>
      <header className="pt-3">
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5">
        <aside className="col-span-3 h-screen overflow-y-auto hover:overflow-y-scroll sticky top-10">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          {state==="loading"? <div className='flex justify-center items-center h-screen'><span className="loading loading-bars loading-xl"></span></div>: <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 sticky top-10 h-screen overflow-y-auto hover:overflow-y-scroll">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
