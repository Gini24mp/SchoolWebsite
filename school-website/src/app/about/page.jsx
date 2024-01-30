import NavBar from "@/components/basic/header";
import Footer from "@/components/basic/footer";
import History from "@/components/about/history";
import Founders from "@/components/about/founders";
import SMT from "@/components/about/smt";
import SMTMessage from "@/components/about/smt-message";
import Staff from "@/components/about/staff";

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