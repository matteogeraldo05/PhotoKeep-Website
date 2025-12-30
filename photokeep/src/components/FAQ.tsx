const questions_and_answers = [
    {
        question:"What is the cost for this service?",
        answer:"Prices vary based on the DPI and any selected add-ons. For detailed information, please visit our pricing page"
    },
    {
        question:"Do you digitize underdeveloped film?",
        answer:"Unfortunately I only work with physical prints. I don't process negatives, slides, or underdeveloped film, and if you're unsure what you have, send a photo to me and i'll be happy to help"
    },
    {
        question:"Why pick PhotoKeep?",
        answer:"Your photos stay local and secure. I handle everything myself, keep the pricing simple, and return your photos quickly and safely"
    },
    {
        question:"Why should I digitize my photos?",
        answer:"Printed phoros fade, bend, and get damaged over time. Digitizing keeps them safe, easy to share, and backed up so you never lose decades of family memories"
    },
    {
        question:"What is DPI?",
        answer:"DPI (dots per inch) measures image sharpness. Higher DPI means cleaner detail and better quality scans."
    },
    {
        question:"How does pick up and drop off work?",
        answer:"I can come to your door, pick up your photos, and return them once they're digitized. If you'd rather drop them off instead, just message me and we'll set up an appoitment"
    }
]

export default function FAQ(){
    return (
        <section id="faq"
        className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div>
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span>Frequently Asked Questions</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}