import Container from "../layout/Container";
import Card from "../layout/Card";
import { useProject } from "../context/ProjectContext";

const Projects = () => {
  const { data } = useProject();

  return (
    <Container>
      <h1 className="text-white">Projects</h1>
      <div className="container-lg d-flex flex-wrap">
        {data.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            description={item.description}
            url={item.url}
            image={item.image}
          />
        ))}
      </div>
    </Container>
  );
};
export default Projects;
