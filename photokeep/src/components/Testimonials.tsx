const customer_reviews = [
    {
        name:"Debora",
        rating:5,
        review:"Our stacks of photo albums were warping, and the photos were sticking to the pages and ruining the pictures. Matteo scanned all our photo albums, eliminated them, and we uploaded our pictures to the cloud, where we are able to enjoy the pictures and memories forever! Great job!"
    },
    {
        name:"Mary",
        rating:4,
        review:"I handed over my old albums that were falling apart. Matteo picked them up himself and treated everything carefully. The scans came back clean, bright, and perfectly organized. My parents loved being able to see their memories on a slideshow again. Simple, fast, and honestly a huge relief"
    },
    {
        name:"Paul",
        rating:4.5,
        review:"I didn't have time to scan hundreds of photos. Matteo handled pickup, kept me updated, and delivered sharp, organized digital files. Everything was labeled, easy to browse, and backed up on my cloud. Great service, fair price, and zero hassle. I've already recommended him to friends" 
    }
]

export default function Testimonials(){
    return (
        <section id="testimonials"
        className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div>
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span>What our clients are saying...</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}