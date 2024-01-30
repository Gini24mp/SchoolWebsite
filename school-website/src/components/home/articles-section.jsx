import Image from "next/image";

function ArticlesSection() {
    const articles = [
        {
            title: "New Library building opened",
            date: "13.01.2022",
            author: "Anna Maria Doe",
            image: "/images/library.jpg",
            description: "Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.",
            href: "#",
        },
        {
            title: "New sports field opened",
            date: "12.01.2022",
            author: "Halley Frank",
            image: "/images/sports-field.jpg",
            description: "Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam orci, nec ornare metus semper sed. Integer volutpat ornare erat sit amet rutrum.",
            href: "#",
        },
        {
            title: "New lab opened",
            date: "10.01.2022",
            author: "Joe Svan",
            image: "/images/lab.jpg",
            description: "Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec.",
            href: "#",
        },
    ]

    return(
        <section className=" text-center bg-gray-100">
            <h2 className="mb-12 pb-4 text-center text-3xl font-bold text-rose-800">
            Latest Articles
            </h2>

            <div className="grid px-1 gap-6 lg:grid-cols-3 xl:gap-x-12">
                {articles.map((article) => (
                    <div className="mb-6 lg:mb-0" key={article.title}>
                    <div
                        className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                    >

                    <div className="flex">
                        <div
                            className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init data-te-ripple-color="light"
                        >
                        <Image
                            src={article.image}
                            className="w-full"
                            alt="Article image"
                            width={500}
                            height={500}
                        />
                        <a href={article.href}>
                            <div
                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="mb-3 text-lg font-bold">{article.title}</h5>
                        <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                        <small>Published <u>{article.date}</u> by
                            {article.author}</small>
                        </p>
                        <p className="mb-4 pb-2">
                            {article.description}
                        </p>
                        <a href={article.href} data-te-ripple-init data-te-ripple-color="light"
                            className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                            Read more
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </section>

    );

}

export default ArticlesSection;

