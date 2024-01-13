import NavBar from "@/components/header";
import Footer from "@/components/footer";
import TopHeading from "@/components/admissions-components/top-heading";
import PrimaryApplications from "@/components/admissions-components/primary-applications";
import HighApplications from "@/components/admissions-components/high-applications";

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