import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>Key Projects</h2>

      <div className="projects">

        <ScrollAnimation animateIn="fadeInUp">
          <div className="project">
            <div className="body">
              <h3>Real-Time Cryptocurrency Analytics Platform</h3>
              <p>
                Designed and developed a full-stack web application to analyze and visualize real-time cryptocurrency token data. Built interactive dashboards to help users understand token trends, trading volume, utility, and historical performance.
              </p>
              <p>
                Developed scalable backend APIs to handle high-frequency data and optimized system performance for real-time analytics.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>FastAPI</li>
                <li>PostgreSQL</li>
                <li>Docker</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp">
          <div className="project">
            <div className="body">
              <h3>LLM-Powered Knowledge Processing Pipeline</h3>
              <p>
                Built a System to aggregate and transform structured project outputs into optimized text formats for Large Language Model (LLM) processing like Google Notebook lm.
              </p>
              <p>
                Implemented formatting and chunking strategies to improve comprehension, enabling downstream visualization as knowledge graphs and mind maps.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>LLMs</li>
                <li>FastAPI</li>
                <li>Postgresql</li>
                <li>System Optimization</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp">
          <div className="project">
            <div className="body">
              <h3>Cloud-Deployed Backend Services</h3>
              <p>
                Developed and deployed backend services on cloud infrastructure with a focus on scalability, reliability, and maintainability.
              </p>
              <p>
                Containerized backend applications and managed multi-service environments to ensure seamless communication between APIs, databases, and caching layers.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>AWS</li>
                <li>Docker</li>
                <li>Redis</li>
                <li>REST APIs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp">
          <div className="project">
            <div className="body">
              <h3>Full-Stack Web Applications</h3>
              <p>
                Built multiple responsive web applications from concept to deployment, focusing on clean UI design, backend integration, and performance optimization.
              </p>
              <p>
                Worked closely with cross-functional teams to translate requirements into scalable technical solutions and ensure smooth delivery.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>FastAPI</li>
                <li>Git</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
