export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden">
      
      <img
        src="/photo-stack.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-in slide-in-from-bottom duration-1000">
          Preserve your memories forever
        </h1>

        <h3 className="text-sm sm:text-base lg:text-lg text-white animate-in slide-in-from-bottom duration-1000">
          Turn your old photos into digital memories you can keep for life
        </h3>
      </div>

    </section>
  )
}
