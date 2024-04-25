import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Navigation from "@/components/header/Navigation";
import MainHeader from "@/components/header/MainHeader";
import NavCategory from "@/components/header/NavCategory";
import Slider from "@/components/Slider/Slider";
import Banner from "@/components/Hero Section/Banner";
import Banner2 from "@/components/Hero Section/Banner2";
import HeroButton from "@/components/Button/HeroButton";
import HighlightedProducts from "@/components/Featured Products/HighlightedProducts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <MainHeader />
      <NavCategory />
      <Slider />
      <Banner />
      <Banner2 />
      <HeroButton
        title="New Arrivals"
        discriptions="Dont miss this opportunity at a special discount just for this week."
        button="Shop Now"
        link={"/shop"}
      />
      <HighlightedProducts />
    </div>
  );
}
