import Container from "../layout/Container";
import logo from "./../assets/eu.jpg";

const About = () => {
  return (
    <Container>
      <h1 className="text-white">About me</h1>
      <div className="container-lg p-5 overflow-auto">
        <div className="row">
          <div className="col-sm">
            <img
              src={logo}
              alt="Rafa's picture."
              className="img-responsive img-thumbnail rounded-circle w-50"
            />
          </div>
          <div className="col-sm d-flex flex-column align-items-center justify-content-center">
            <h2>
              Hi, I'm <strong>Rafa</strong>!
            </h2>
            <h3 className="fs-5">
              a web developer/nurse/musician/craftswoman and whatever else I
              want, like, or wish to be.
            </h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
