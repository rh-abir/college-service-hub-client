import CollageCard from "../collageCard/CollageCard";
import ImageGallery from "../imageGallery/ImageGallery";
import SearchBar from "../searchBar/SearchBar";

const Home = () => {
    return (
        <div className="container mx-auto min-h-screen">
            <SearchBar />
            
            <CollageCard />

            <ImageGallery />

            

        </div>
    );
};

export default Home;