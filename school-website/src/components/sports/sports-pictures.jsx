function SportPictures(){
    return(
        <section>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6  lg:px-8">
                <div className="text-center">
                <h2 className="text-xl font-bold text-rose-800 sm:text-3xl">Our sports memories</h2>

                </div>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <li>
                    <a href="#" className="group block overflow-hidden">
                    <img
                        src="/images/sports.jpg"
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative  pt-3">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Basketball
                        </h3>

                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" className="group block overflow-hidden">
                    <img
                        src="/images/sports.jpg"
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative  pt-3">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Basketball
                        </h3>


                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" className="group block overflow-hidden">
                    <img
                        src="/images/sports.jpg"
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative  pt-3">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Basketball
                        </h3>
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" className="group block overflow-hidden">
                    <img
                        src="/images/sports.jpg"
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative  pt-3">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Basketball
                        </h3>

                    </div>
                    </a>
                </li>
                </ul>
            </div>
            </section>
    );
}

export default SportPictures;