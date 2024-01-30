
function Founders(){
    const founders = [
        {   
            picture: "https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg",
            name: "Hentoni Doe",
            position: "Chief Technical Officer",
        },
        {
            picture: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            name: "Jonathan Doe",
            position: "CEO-Founder",
        },
        {
            picture: "https://tailus.io/sources/blocks/classic/preview/images/woman.jpg",
            name: "Anabelle Doe",
            position: "Chief Operations Officer",
        }
    ]
    return(
        <div >
            <div className="container mx-auto px-6 md:px-12 xl:px-32">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-center text-2xl text-rose-800 font-bold md:text-4xl">Our Founders</h2>
                </div>

                <div className="grid gap-12 items-center md:grid-cols-3">
                    {founders.map((founder, index) => (
                        <div className="space-y-4 text-center" key={founder.name}> 
                            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                                src={founder.picture} alt={founder.name} loading="lazy" width="640" height="805" />
                            <div>
                                <h4 className="text-2xl">{founder.name}</h4>
                                <span className="block text-sm text-gray-500">{founder.position}</span>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            
            <figure className="py-3 max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-gray-900 dark:text-white">Proverbs Private College is great institution</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Jonathan Doe</cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Founder</cite>
                    </div>
                </figcaption>
            </figure>

        </div>
    );
}

export default Founders;