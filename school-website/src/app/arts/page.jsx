import NavBar from "@/components/header";
import Footer from "@/components/footer";
import TopHeading from "@/components/arts-and-culture/top-heading";
import Activities from "@/components/arts-and-culture/activities";

function ArtsAndCulturePage(){
    return(
        <>
            <NavBar />
            <TopHeading />
            <Activities />
            <Footer />
        </>
    );
}

export default ArtsAndCulturePage;