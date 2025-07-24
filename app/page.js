import CategorySlider from "./CategorySlider";
import MainBannerSlider from "./MainBannerSlider";
import Advantages from "./Advantages";
import SaleSlider from "./SaleSlider";
import Banners from "./Banners/Banners";
import ProductTabsSlider from "./ProductTabsSlider";
import CoffeeTypesSection from "./CoffeeTypesSection";
import CoffeeTools from "./CoffeeTools";
import AllSliders from "./ProductCard";
import Card from "./Card";
import CardEnvironment from "./CardEnvironment";
import CategoryBoxSlider from "./CategoryBoxSlider";
import NewsletterForm from "./NewsletterForm";
import MeloBranches from "./MeloBranches";
import Footer from "./Footer";
import './globals.css';

export default function HomePage() {
  return (
    <div>
      <main className="max-w-[90%] m-auto">
        <CategorySlider />
        <MainBannerSlider />
        <Advantages />
        <SaleSlider />
        <Banners />
        <ProductTabsSlider />
        <CoffeeTypesSection />
        <CoffeeTools />
        <AllSliders />
        <Card />
        <CardEnvironment />
        <CategoryBoxSlider />
        <NewsletterForm />
        <MeloBranches />
      </main>
      <Footer />
    </div>
  );
}
