export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 sm:pt-20 overflow-hidden flex items-center">
      <img
        src="/photo-stack.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative px-4 sm:px-6 md:px-20 lg:px-40 text-center md:text-left">
        <h1 className="archivo-black-regular text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 leading-tight animate-in slide-in-from-bottom duration-600">
          <span className="text-white sm:bg-gradient-to-b sm:from-gray-500 sm:via-white sm:to-gray-500 sm:bg-clip-text sm:text-transparent drop-shadow-md block">Preserve your </span>
          <span className="text-white sm:bg-gradient-to-b sm:from-gray-500 sm:via-white sm:to-gray-500 sm:bg-clip-text sm:text-transparent drop-shadow-md block">memories forever</span>
        </h1>
        <p className="text-white text-xl sm:text-xl md:text-2xl max-w-3xl mx-auto lg:mx-0 mb-6 sm:mb-8 font-semibold leading-relaxed drop-shadow-md animate-in slide-in-from-bottom duration-600 delay-400"
        >Turn your old photos into digital memories you can keep for life
        </p>
      </div>
    </section>
  )
}