import Image from "next/image";

function Footer() {
    const pages = [
        { Page : "Home", href: "/"},
        { Page : "About", href: "/about"},
        { Page : "Admissions", href: "/admissions"},
        { Page : "News", href: "/news"},
        { Page : "Academics", href: "/academics"},
        { Page : "Arts & Culture", href: "/arts"},
        { Page : "Sports", href: "/sports"},
        { Page : "Contact Us", href: "/contact"},
      ];
    
      const pageLinks = pages.map((page)=>
        <a key={page.Page} className="hidden md:block cursor-pointer text-gray-600 hover:text-black uppercase" href={page.href}> {page.Page} </a>
      );

    return(
    <footer>
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="md:w-2/3 w-full px-4 text-rose-800 flex flex-col">
                <div className="w-full text-7xl font-bold">
                    <h1 className="w-full md:w-2/3">
                        Get in touch
                    </h1>
                </div>
                <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                    <p className="w-full md:w-2/3 text-black">To get in touch with our school, please feel free to contact us. We are here to answer any questions you may have and provide assistance.</p>
                    <div className="w-44 pt-6 md:pt-0">
                        <a href="/contact" className="bg-rose-800 justify-center text-white text-center rounded-lg shadow px-10 py-3 flex items-center">Contact Us</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex mt-24 mb-12 flex-row justify-between">
                        <div className="">
                        <Image
                            src="/images/school-badge.svg"
                            width={80}
                            height={80}
                            alt="Proverbs Private College Badge"
                        />  
                        </div>

                        {pageLinks}
                        
 
                    </div>
                    <hr className="border-gray-600"/>
                    <p className="w-full text-center my-12 text-gray-600">Copyright © 2024 Saint Paul High School</p>
                </div>
            </div>
        </div>
    </footer>
    );

}

export default Footer;

