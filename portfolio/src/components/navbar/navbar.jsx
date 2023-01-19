export default function navbar() {
  return (
    <div>
      <nav class="navbar">
        <h1 class="brand-logo">
          <span class="highlight">&lt; KS /&gt;</span>
        </h1>
        <ul class="links-container">
          <li class="links-item">
            <a href="#" class="link active">
              home
            </a>
          </li>
          <li class="links-item">
            <a href="#project-section" class="link">
              projects
            </a>
          </li>
          <li class="links-item">
            <a href="#contact-section" class="link">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
