export function VideoBanner() {
  return (
    <section className="w-full mx-auto max-w-[2560px] h-[auto] sm:h-[400px] lg:h-[720px]">
      <video
        className="w-full h-[auto] object-cover"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src="/videos/mac_pro_m3_interface.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Below the Video */}
      <div className="w-full py-6 bg-white text-center text-lg sm:text-xl md:text-2xl font-semibold mt-4">
        <p>Welcome to the Contact Page.</p>
        <p>Experience the Mac Pro M3 Interface.</p>
      </div>
    </section>
  );
}
