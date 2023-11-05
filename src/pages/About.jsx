export default function About() {
  return (
    <>
      <h1 className="mb-8 ml-6 text-9xl font-bold">About Me</h1>
      <div className="container mx-auto mt-10 flex justify-center columns-3">
        <div className="w-full justify-center">
          <h2 className="mb-5 text-7xl font-bold">Hello!</h2>
          <p className="my-5 text-2xl font-semibold">
            My name is Luan, and I&#39;m a budding full stack developer in the
            MERN stack. I have experience in the field of graphic design and
            illustration.
          </p>
        </div>
        <div className="w-full">
          <img
            src="src\assets\images\about.jpg"
            alt="profile picture"
            className="mask mask-parallelogram-3"
          />
        </div>
      </div>
    </>
  );
}
