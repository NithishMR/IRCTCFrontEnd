import Image from "next/image";
import Header from "./_HeaderComponent/Header";
import Hero from "./_HeroSection/Hero";
import Navigation from "./_NavigationSection/Navigation";
import OtherPackage from "./_OtherPackageComponent/OtherPackage";
import Discount from "./_Discounts/Discount";
import Footer from "./_FooterComponent/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Navigation />
      <OtherPackage />
      <Discount />
      <Footer />
    </div>
  );
}
