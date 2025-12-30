const customer_reviews = [
    {
        name:"STANDARD GRADE",
        price:"0.30",
        options:["300 DPI Scan","Standard JPEG output","Free Cloud Upload","Optional USB Drive: $5","Organized into simple dated folders"]
    },
    {
        name:"ENHANCED GRADE",
        price:"0.50",
        options:["600 DPI Scan","High Quality JPEG output","Free Cloud Upload","Optional USB Drive: $5","Organized into simple dated folders"]
    },
    {
        name:"PREMIUM GRADE",
        price:"0.70",
        options:["600+ DPI Scan","Ultra High Quality JPEG output","Free Cloud Upload","Free USB Drive included","Organized into simple dated folders"]
    },
]
export default function Pricing(){
    return (
        <section id="pricing"
        className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div>
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span>Pricing</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}
