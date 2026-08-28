import Image from "next/image";
import styles from "./page.module.css";
import TopBanner from "@/components/top-banner/TopBanner";
import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/banner/Banner";
import BestDealists from "@/components/bestDeals/BestDealist";
import ShopWithCategory from "@/components/shopwithCategorys/ShopwithCategorys";
import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import ComputerAccessories from "@/components/computerAccessories/ComputerAccessories";
import Card from "@/components/card/Card";
import LatestNews from "@/components/latestNews/LatestNews";
import Subscribe from "@/components/subscribe/Subscribe";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <Navbar />
      <Banner />
      <BestDealists />
      <ShopWithCategory />
      <FeaturedProducts />
      <ComputerAccessories />
      <Card />
      <LatestNews />
      <Subscribe />
    </div>
  );
}
