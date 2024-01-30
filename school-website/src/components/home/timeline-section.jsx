function TimeLineSection(){

    const events = [
        {
            date: "1 May, 2018",
            title: "Founding",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            date: "6 May, 2020",
            title: "Opening",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            date: "10 May, 2021",
            title: "New Library Opened",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            date: "12 May, 2021",
            title: "First Matric class",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ]

    const timeline = events.map((event, index) => {
        if(index%2 === 0){
            return(
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline" key={event.title}>
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base text-rose-800">{event.date}</p>

                        <h4 className="mb-3 font-bold text-lg md:text-2xl">{event.title}</h4>
                        
                        <p className="text-sm md:text-base leading-snug text-black text-opacity-100 first-letter:text-4xl first-letter:font-bold first-letter:text-rose-800">
                            {event.description}  
                        </p>

                    </div>

                </div>
            );
        }else{
            return(
                <div className="mb-8 flex justify-between items-center w-full right-timeline" key={event.title}>
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                        <p className="mb-3 text-base text-rose-800">{event.date}</p>

                        <h4 className="mb-3 font-bold text-lg md:text-2xl">{event.title}</h4>
                        
                        <p className="text-sm md:text-base leading-snug text-black text-opacity-100 first-letter:text-4xl first-letter:font-bold first-letter:text-rose-800">
                        {event.description}
                        </p>

                    </div>
                </div>
            );
        }
    });

    return(
        <section>
            <div className="bg-gray-100 text-black ">
            
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                <h2 className="ml-2 font-bold text-5xl text-rose-800 uppercase tracking-loose">Our Story</h2>
                <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">How we got here</p>
                <p className="text-sm md:text-base text-black mb-4">
                Here's we got here. The timeline of the events that took place to make the school possible.
                </p>
                <a href="/about"
                className="bg-transparent mr-auto hover:bg-rose-800 text-rose-800 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-rose-800 hover:border-transparent">
                Learn More</a>
            </div>

            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div className="container mx-auto w-full h-full">

                    <div className="relative wrap overflow-hidden p-10 h-full">

                        <div className="border-2-2 border-rose-800 absolute h-full border"
                            style={{ right: '50%', border: '2px solid #9F1239', borderRadius: '1%' }}
                        ></div>

                        <div className="border-2-2 border-rose-800 absolute h-full border"
                            style={{ left: '50%', border: '2px solid #9F1239', borderRadius: '1%' }}
                        ></div>

                        {timeline}

                    </div>
                </div>
            </div>
            </div>
            </div>
        </section>
    );
}

export default TimeLineSection;