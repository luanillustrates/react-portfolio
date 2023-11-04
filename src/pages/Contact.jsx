export default function Contact() {
  return (
    <>
      <h1 className="mb-5 text-9xl font-bold">Contact</h1>
      <div className="container mx-auto mt-10 flex justify-center">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="full name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Enquiry</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="enter your query"
          ></textarea>
        </div>
      </div>
    </>
  );
}
