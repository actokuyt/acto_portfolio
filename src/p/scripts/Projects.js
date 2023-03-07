import { Nav, Col, Container, Tab, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/CSS.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Culpa aliquip est sit Lorem magna veniam nulla sit laborum
              exercitation.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="first">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  In nulla incididunt consequat ipsum eiusmod.
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  In nulla incididunt consequat ipsum eiusmod.
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
