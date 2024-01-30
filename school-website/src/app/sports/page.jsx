import NavBar from "@/components/basic/header";
import Footer from "@/components/basic/footer";
import TopHeading from "@/components/sports/top-heading";
import SportsOffered from "@/components/sports/sports-offered";
import SportPictures from "@/components/sports/sports-pictures";

function SportsPage(){
    return(
        <>
            <NavBar />
            <TopHeading />
            <SportsOffered />
            <SportPictures />
            <Footer />
        </>
    );
}

export default SportsPage;