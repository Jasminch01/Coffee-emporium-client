const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[800px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/y897spk/6.jpg)",
            backgroundSize : 'cover',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-white">
            <p className="text-3xl font-bold">Would you like a Cup of Delicious Coffee?</p>
            <p>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! <br /> Enjoy the beautiful moments and make them memorable.</p>
            <button className="p-2 bg-orange-300 mt-3">Learn more</button>
        </div>
      </div>
      <div className="bg-orange-200 p-5">

      </div>
    </div>
  );
};

export default Banner;
