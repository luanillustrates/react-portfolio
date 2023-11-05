import React, { useState } from 'react';
import validator from 'validator';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(' ');
  function handleEmail(event) {
    let new_Email = event.target.value;
    setEmail(new_Email);
    if (!validator.isEmail(new_Email)) {
      setMessage('Enter a valid email');
    } else {
      setMessage('');
    }
  }

  return (
    <>
      <h1 className="mb-8 ml-6 text-9xl font-bold">Contact</h1>
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
          <div className="form-group">
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
              value={email}
              onChange={handleEmail}
            />
            <span style={{ fontWeight: 'bold', color: 'red' }}>{message}</span>
          </div>
          <label className="label">
            <span className="label-text">Enquiry</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="enter your query"
          ></textarea>
          <button className="btn btn-outline btn-primary mt-10 ">Submit</button>
        </div>
      </div>
    </>
  );
}
