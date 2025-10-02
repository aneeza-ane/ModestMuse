import Categories from "./Categories"
import CustomerReviews from "./CustomerReviews"
import Footer from "./Footer"
import HeroSection from "./Herosection"
import Navigation from "./Navigation"
import Products from "./Products"
import ProductPages from "./ProductsPage"

function LandingPage()
{
    return <>
   <Navigation/>
    <HeroSection/>
    <Categories/>
    <ProductPages/>
    <CustomerReviews/>
    <Footer/>
    </> 
}
export default LandingPage