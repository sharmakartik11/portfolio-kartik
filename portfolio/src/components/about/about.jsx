import "./about.css";

export default function about() {
  return (
    <div>
      <section class="about" id="about-section">
        <h2 class="heading">
          about <span class="highlight">me</span>
        </h2>
        <p class="sub-heading">I handle web. Yes, the whole internet ;)</p>
        <div class="seperator"></div>

        <div class="about-me-container">
          <div class="left-col">
            <img
              src="img/portfolio-image.jpeg"
              class="about-image"
              alt="kartik-sharma-img"
            />
          </div>
          <div class="right-col">
            <p class="about-para">
              My name is Kartik and I joined the Northeastern University in
              Boston, MA to pursue a Master's in Information Systems with my
              expected graduation in May 2024. Over the past four years, I
              worked as a senior software developer at Accenture. I have strong
              skills in front-end website development with technologies such as
              Javascript and React. <br />
              While I'm not working, I enjoy making digital art and playing
              badminton and pool. I love meeting new people and getting to know
              their life stories. I also like to collaborate with industry
              professionals and am always open to learning from their
              experiences.
              <br />
              The UX courses I intend to take and the development experience I
              already have will enable me to understand a product's lifecycle
              well.
            </p>
            <a
              href="img/KartikSharmaResume.pdf"
              class="btn"
              target="_blank"
              style={{ padding: "10px 20px" }}
            >
              resume
              <i
                class="fa fa-download"
                style={{
                  fontSize: "18px !important",
                  color: "#fff",
                  marginLeft: "10px",
                  marginRight: "-18px",
                }}
              ></i>
            </a>
          </div>
        </div>
      </section>

      <section class="about" id="framework-section">
        <h2 class="heading">languages and frameworks</h2>
        <p class="sub-heading">Technologies on which I have worked on</p>
        <div class="seperator"></div>
        <div class="skill-container">
          <div class="skill-card" style={{ backgroundColor: "#f06529" }}>
            <p class="skill">HTML</p>
          </div>
          <div class="skill-card" style={{ backgroundColor: "#379ad6" }}>
            <p class="skill">CSS</p>
          </div>
          <div class="skill-card" style={{ backgroundColor: "#cc6699" }}>
            <p class="skill">ES6</p>
          </div>
          <div class="skill-card" style={{ backgroundColor: "#f7df1e" }}>
            <p class="skill">JavaScript</p>
          </div>
          <div class="skill-card large" style={{ backgroundColor: "#5ed9fb" }}>
            <p class="skill">ReactJS</p>
          </div>
          <div class="skill-card large" style={{ backgroundColor: "#83cd29" }}>
            <p class="skill">Python</p>
          </div>
          <div class="skill-card" style={{ backgroundColor: "#326690" }}>
            <p class="skill">SQL</p>
          </div>
          <div class="skill-card" style={{ backgroundColor: "#ffa000" }}>
            <p class="skill">Java</p>
          </div>
          <div class="skill-card large" style={{ backgroundColor: "#5ed9fb" }}>
            <p class="skill">Redux</p>
          </div>
        </div>
      </section>
    </div>
  );
}
