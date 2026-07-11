function loadNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  container.innerHTML = `
    <a href="index.html" class="nav-tab tab-home">Home</a>
    <a href="about.html" class="nav-tab tab-about">About</a>
    <a href="contentpage.html" class="nav-tab tab-content">Content</a>

    <a href="work1page.html" class="nav-tab tab-work1">Work I</a>
    <a href="work2page.html" class="nav-tab tab-work2">Work II</a>
    <a href="work3page.html" class="nav-tab tab-work3">Work III</a>
  `;
}

window.addEventListener('DOMContentLoaded', loadNavbar);