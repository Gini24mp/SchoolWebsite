import { faker } from "@faker-js/faker";

function visionSection(){

    const imageUrl = faker.image.urlLoremFlickr({
        category: 'nature',
        height: 1080, 
        width: 1920, 
    });

    return(
    <section className="bg-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-4 lg:px-8">
        <div className="max-w-3xl">
        <h2 className="text-9xl font-bold sm:text-4xl text-rose-800">
            Our Vision
        </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
                alt="Party"
                src="/images/vision-image.jpg"
                className="absolute inset-0 h-full w-full object-cover"
            />
        </div>

        <div className="lg:py-5">
            <article className="space-y-4 text-black text-xl">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-rose-800">
                Saint Paul High School envisions a future where graduates emerge not just prepared for 
                university, but equipped to lead lives of purpose and grace. They are lifelong learners, 
                driven by curiosity and the will to make a difference. They carry the torch of Saint Paul's values, 
                lighting the way for a brighter, more just world.
            </p>

            <p>
                This vision, vibrant and hopeful, serves as a beacon for students, faculty, and the community,
                uniting them in the pursuit of something greater than themselves. It paints a picture of a 
                school that transcends mere education, becoming a breeding ground for future leaders, changemakers, 
                and compassionate individuals.
            </p>
            </article>
        </div>
        </div>
    </div>
    </section>
    );
}

export default visionSection;