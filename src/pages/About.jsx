export default function About() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h2 className="mb-5 text-7xl font-bold">Hello!</h2>
          <p className="my-5 text-2xl font-semibold">
            My name is Luan, and I'm a budding full stack developer in the MERN
            stack. I have experience in the field of graphic design and
            illustration.
          </p>
        </div>
      </div>
      <h1 className="mb-5 text-9xl font-bold">About Me</h1>
    </div>
  );
}
