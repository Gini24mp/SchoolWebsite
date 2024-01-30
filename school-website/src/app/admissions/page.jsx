import NavBar from "@/components/basic/header";
import Footer from "@/components/basic/footer";
import TopHeading from "@/components/admissions/top-heading";
import PrimaryApplications from "@/components/admissions/primary-applications";
import HighApplications from "@/components/admissions/high-applications";

function AdmissionsPage(){
    return(
        <>
            <NavBar />
            <TopHeading />
            <PrimaryApplications />
            <HighApplications />
            <Footer />
        </>

    );
}

export default AdmissionsPage;