function principalSection(){

    return(
        <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8">
            <div className="max-w-3xl">
            <h2 className="text-9xl font-bold sm:text-4xl text-rose-800">
                Principal's Welcome
            </h2>
            </div>
    
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <img
                    alt="Principal"
                    src="images/principal.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
    
            <div className="lg:py-5">
                <article className="space-y-4 text-black text-xl">
                <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-rose-800">
                    Welcome to Proverbs Private College, a space where minds ignite and spirits soar! 
                    We're more than classrooms and textbooks; we're a vibrant community fostering 
                    academic excellence, compassion, and understanding. Our rigorous curriculum 
                    and dedicated staff challenge you to think critically and explore your passions, 
                    and inspire you to make a difference.
                </p>
    
                <p>
                    Whether you're a prospective student, curious visitor, or returning family member, 
                    I invite you to discover the magic of Proverbs . This welcoming haven will equip 
                    you with the tools and support to reach your full potential, empowering you to 
                    become a lifelong learner and leader ready to leave a positive mark on the world. 
                    Come, join us and ignite your journey!
                </p>
                </article>
            </div>
            </div>
        </div>
        </section>        
    );
}

export default principalSection;