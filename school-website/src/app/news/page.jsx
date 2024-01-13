import NavBar from "@/components/header";
import Footer from "@/components/footer";
import MainNewsPage from "@/components/news-components/main-news-page";
import TopHeading from "@/components/news-components/top-heading";

function NewsPage(){
    return(
        <>
            <NavBar/>
            <TopHeading/>
            <MainNewsPage/>
            <Footer/>
        </>
    );
}

export default NewsPage;
