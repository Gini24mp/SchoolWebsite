import Image from "next/image";

function TimeLineSection(){
    return(
        <section>
            <div class="bg-gray-100 text-black ">
            <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                <p class="ml-2 text-rose-800 uppercase tracking-loose">Our Story</p>
                <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">How we got here</p>
                <p class="text-sm md:text-base text-black mb-4">
                Here's we got here. The timeline of the events that took place to make the school possible.
                </p>
                <a href="#"
                class="bg-transparent mr-auto hover:bg-rose-800 text-rose-800 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-rose-800 hover:border-transparent">
                Learn More</a>
            </div>
            <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div class="container mx-auto w-full h-full">
                <div class="relative wrap overflow-hidden p-10 h-full">
                    <div class="border-2-2 border-rose-800 absolute h-full border"
                    style={{ right: '50%', border: '2px solid #9F1239', borderRadius: '1%' }}
                   ></div>
                    <div class="border-2-2 border-rose-800 absolute h-full border"
                    style={{ left: '50%', border: '2px solid #9F1239', borderRadius: '1%' }}
                    ></div>
                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                        <p class="mb-3 text-base text-rose-800">1 May, 2018</p>
                        <h4 class="mb-3 font-bold text-lg md:text-2xl">Founding</h4>
                        <p class="text-sm md:text-base leading-snug text-black text-opacity-100 first-letter:text-4xl first-letter:font-bold first-letter:text-rose-800">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua.  
                        </p>
                    </div>
                    </div>
                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1  w-5/12 px-1 py-4 text-left">
                        <p class="mb-3 text-base text-rose-800">6 May, 2020</p>
                        <h4 class="mb-3 font-bold text-lg md:text-2xl">Opening</h4>
                        <p class="text-sm md:text-base leading-snug text-black text-opacity-100 first-letter:text-4xl first-letter:font-bold first-letter:text-rose-800">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua.
                        </p>
                    </div>
                    </div>
                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                        <p class="mb-3 text-base text-rose-800"> 10 May, 2021</p>
                        <h4 class="mb-3 font-bold text-lg md:text-2xl">New Library Opened</h4>
                        <p class="text-sm md:text-base leading-snug text-black text-opacity-100 first-letter:text-4xl first-letter:font-bold first-letter:text-rose-800">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua.
                        </p>
                    </div>
                    </div>

                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>

                    <div class="order-1  w-5/12 px-1 py-4">
                        <p class="mb-3 text-base text-rose-800">12 May, 2021</p>
                        <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">First Matric Class</h4>
                        <p class="text-sm md:text-base leading-snug text-black text-opacity-100 first-letter:text-4xl first-letter:font-bold first-letter:text-rose-800">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        </section>
    );
}

export default TimeLineSection;