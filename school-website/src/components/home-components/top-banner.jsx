import { faker } from "@faker-js/faker"

function topbanner(){

    const imageUrl = faker.image.urlLoremFlickr({
        category: 'nature',
        height: 1080, 
        width: 1920, 
    });

    return(
        <section
            style={{
                backgroundImage: `url(${"/images/main-building.jpg"})`,
            }}
            className="relative bg-cover bg-center bg-no-repeat "
        >
        <div
            className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
                Saint Paul High School
                <strong className="block font-extrabold text-rose-700"> 
                Dare to Dream, Dare to Achieve.
                </strong>
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                Admissions
                </a>

                <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                About us
                </a>
            </div>
            </div>
        </div>
        </section>
    );
}

export default topbanner;