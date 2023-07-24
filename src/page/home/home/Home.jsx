import CollageCard from "../collageCard/CollageCard";
import HeroSection from "../heroSection/HeroSection";
import ImageGallery from "../imageGallery/ImageGallery";
import SearchBar from "../searchBar/SearchBar";

const Home = () => {
    return (
        <div className="container mx-auto min-h-screen">
            <SearchBar />

            <HeroSection />


            <CollageCard />

            <ImageGallery />

            

        </div>
    );
};

export default Home;