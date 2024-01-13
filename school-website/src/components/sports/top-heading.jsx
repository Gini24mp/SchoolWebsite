function TopHeading(){
    return(
        <>
        <h1 class="mb-4 text-4xl text-center text-rose-800 font-extrabold leading-none tracking-tight  py-3 md:text-5xl lg:text-6xl dark:text-white">Sports</h1>
        <section>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                    <img
                        alt="Saint Paul High School Academics"
                        src="/images/sports.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                <div className="lg:py-16">
                    <article className="space-y-4 text-gray-600">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                        eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae
                        eius quidem quam repellat.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
                        voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
                        dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
                        aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
                        voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
                    </p>
                    </article>
                </div>
                </div>
            </div>
            </section>     
        </>

    );
}

export default TopHeading;