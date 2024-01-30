function ApplyMessageStyle(member, index){
    return(
        <div className="p-6 rounded shadow-md dark:bg-gray-900" key={index}>
            <p>{member.message}</p>
            <div className="flex items-center mt-4 space-x-4">
                <img src={member.image} alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                <div>
                    <p className="text-lg font-semibold">{member.name}</p>
                    <p className="text-sm dark:text-gray-400">{member.position}</p>
                </div>
            </div>
        </div>
    );

}

function SMTMessage(){
    const smt = [
        {
            name: "Ahmed Omer",
            position: "CEO",
            image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=739&q=80",
            message: "An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.",
        },
        {
            name: "Jane Doe",
            position: "Co-founder",
            image: "https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            message: "An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.",
        },
        {
            name: "Steve Ben",
            position: "UI/UX",
            image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80",
            message: "An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.",
        },
        {
            name: "Patterson Johnson",
            position: "Software Engineer",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            message: "An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.",
        }
    ]
    return(
    <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container px-6 mx-auto">
            <div className="grid items-center gap-4 xl:grid-cols-5">
                <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                    <h2 className="text-4xl font-bold text-rose-800">Message from our School Management Team</h2>

                    <p className="dark:text-gray-400">
                        Pri ex magna scaevola moderatius. Nullam accommodare no vix, 
                        est ei diceret alienum, et sit cetero malorum. Et sea iudico 
                        consequat, est sanctus adipisci ex.
                    </p>

                </div>

                <div className="p-6 xl:col-span-3">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid content-center gap-4">
                            {
                                smt.slice(0, 2).map((member, index) => ApplyMessageStyle(member, index))
                            }
                        </div>

                        <div className="grid content-center gap-4">
                            {
                                smt.slice(2, 4).map((member, index) => ApplyMessageStyle(member, index))
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    );
}

export default SMTMessage;