export default function Contact() {
    return (
        <>
        <h1>Contact Me</h1>
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="full name" className="input input-bordered w-full max-w-xs" />
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered w-full max-w-xs" />
            <textarea className="textarea textarea-bordered" placeholder="enter your query"></textarea>
        </div>
        </>
    );
}