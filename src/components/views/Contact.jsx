import { useState } from "react";
import Container from "../layout/Container";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      subject,
      message,
    });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <Container>
      <h1 className="text-white">Contact me</h1>
      <div className="container-md p-3 overflow-auto box-form">
        <form onSubmit={handleSubmit}>
          <div className="row mb-2">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name:
            </label>
            <div className="col-sm-10">
              <input
                type="name"
                name="name"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="row mb-2">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email:
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="row mb-2">
            <label htmlFor="subject" className="col-sm-2 col-form-label">
              Type of require:
            </label>
            <div className="col-sm-10">
              <select
                name="subject"
                id="subject"
                className="form-select"
                placeholder="choose your subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                required
              >
                <option disabled>choose your subject</option>
                <option value="freela">Freelance project</option>
                <option value="webdev">Web Development</option>
                <option value="design">Interface design</option>
              </select>
            </div>
          </div>
          <div className="row mb-2">
            <label htmlFor="message" className="col-sm-2 col-form-label">
              Your message:
            </label>
            <div className="col-sm-10">
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="4"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              ></textarea>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-10"></div>
            <button type="submit" className="btn btn-primary col-sm-2">
              Send
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
