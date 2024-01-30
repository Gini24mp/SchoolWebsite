function Staff(){
    const staff = [
        {
            name: "Arthur Melo",
            title: "Design Director",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.",
        },
        {
            name: "Amelia Anderson",
            title: "Lead Developer",
            image: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.",
        },
        {
            name: "Olivia Wathan",
            title: "Lead Designer",
            image: "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.",
        },
        {
            name: "John Doe",
            title: "Software Engineer",
            image: "https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.",
        }

    ]
    return(
    <section className=" dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                Our <span className="text-rose-800">Staff</span>
            </h1>

            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Illo incidunt ex placeat modi magni quia error alias, 
                adipisci rem similique, at omnis eligendi optio eos harum.
            </p>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                {staff.map((member, index) => (
                    <div className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group  dark:border-gray-700 dark:hover:border-transparent" key={index}>
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={member.image} alt="" />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white ">
                                {member.name}
                                </h1>

                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 ">
                                    {member.title}
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 ">
                            {member.description}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}

export default Staff;