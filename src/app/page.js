import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/banner/Banner";
import BestDealists from "@/components/bestDeals/BestDealist";
import ShopWithCategory from "@/components/shopwithCategorys/ShopwithCategorys";
import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import ComputerAccessories from "@/components/computerAccessories/ComputerAccessories";
import Card from "@/components/card/Card";
import LatestNews from "@/components/latestNews/LatestNews";
import Subscribe from "@/components/subscribe/Subscribe";
import Flashsales from "@/components/flashsales/Flashsales"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <BestDealists />
      <ShopWithCategory />
      <FeaturedProducts />
      <Card />
      <ComputerAccessories />
      <Flashsales />
      <LatestNews />
      <Subscribe />
    </div>
  );
}
