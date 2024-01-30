import NavBar from "@/components/basic/header";
import Footer from "@/components/basic/footer";
import MainNewsPage from "@/components/news/main-news-page";
import TopHeading from "@/components/news/top-heading";

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
