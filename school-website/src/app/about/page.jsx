import NavBar from "@/components/header";
import Footer from "@/components/footer";
import History from "@/components/about-components/history";
import Founders from "@/components/about-components/founders";
import SMT from "@/components/about-components/smt";
import SMTMessage from "@/components/about-components/smt-message";
import Staff from "@/components/about-components/staff";

function AboutPage(){
    return (
        <>
            <NavBar />
            <History />
            <Founders />
            <SMT />
            <SMTMessage />
            <Staff />
            <Footer />
        </>
    );
}

export default AboutPage;