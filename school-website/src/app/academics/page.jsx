import NavBar from "@/components/basic/header";
import Footer from "@/components/basic/footer";
import TopHeading from "@/components/academics/top-heading";
import PrimarySubjects from "@/components/academics/primary-subjects";
import HighSubjects from "@/components/academics/high-subjects";


function AcademicsPage(){
    return(
        <>
            <NavBar />
            <TopHeading />
            <PrimarySubjects />
            <HighSubjects />
            <Footer />
        </>
    );
}

export default AcademicsPage;