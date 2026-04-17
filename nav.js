(function () {
  const NAV_HTML = `
<a href="index.html" class="logo">
  <svg class="logo-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="52" r="37"
      stroke="white" stroke-width="17"
      stroke-dasharray="194 39"
      stroke-linecap="butt"
      transform="rotate(30 50 52)"/>
    <line x1="48" y1="52" x2="86" y2="52"
      stroke="white" stroke-width="17"
      stroke-linecap="butt"/>
    <polyline points="18,18 50,56 80,14"
      stroke="white" stroke-width="13"
      stroke-linecap="round"
      stroke-linejoin="round"/>
  </svg>
  <div>
    <span class="logo-text">Worship Hub</span>
    <span class="logo-sub">Gateway Vineyard</span>
  </div>
</a>

<ul class="nav-links">
  <li><a href="index.html">Home</a></li>
  <li><a href="values.html">Values</a></li>
  <li><a href="get-involved.html">Get Involved</a></li>
  <li><a href="roles.html">Team Roles</a></li>
  <li><a href="rotas.html">Rotas</a></li>
  <li class="has-drop">
    <a href="#">Resources</a>
    <div class="drop">
      <a href="worship-leaders.html">Worship Leaders</a>
      <a href="song-bank.html">Song Bank</a>
      <a href="songwriting.html">Songwriting</a>
      <a href="training.html">Training</a>
      <a href="apps.html">Apps</a>
      <a href="call-times.html">Call Times</a>
      <a href="vocal-warmups.html">Vocal Warmups</a>
    </div>
  </li>
  <li><a href="whos-who.html">Who's Who</a></li>
</ul>

<button class="burger" onclick="toggleDrawer()" aria-label="Menu">
  <span></span><span></span><span></span>
</button>`;

  const DRAWER_HTML = `
<a href="index.html" onclick="closeDrawer()">Home</a>
<a href="values.html" onclick="closeDrawer()">Our Values</a>
<a href="get-involved.html" onclick="closeDrawer()">Get Involved</a>
<a href="roles.html" onclick="closeDrawer()">Worship Team Roles</a>
<a href="rotas.html" onclick="closeDrawer()">Rotas</a>
<a href="#" onclick="closeDrawer()" style="color:var(--gold)">Resources</a>
<a href="worship-leaders.html" onclick="closeDrawer()" class="sub">Worship Leaders</a>
<a href="song-bank.html" onclick="closeDrawer()" class="sub">Song Bank</a>
<a href="songwriting.html" onclick="closeDrawer()" class="sub">Songwriting</a>
<a href="training.html" onclick="closeDrawer()" class="sub">Training</a>
<a href="apps.html" onclick="closeDrawer()" class="sub">Apps</a>
<a href="call-times.html" onclick="closeDrawer()" class="sub">Call Times</a>
<a href="vocal-warmups.html" onclick="closeDrawer()" class="sub">Vocal Warmups</a>
<a href="whos-who.html" onclick="closeDrawer()">Who's Who</a>`;

  // Inject nav
  const nav = document.getElementById('site-nav');
  if (nav) nav.innerHTML = NAV_HTML;

  // Inject drawer
  const drawer = document.getElementById('drawer');
  if (drawer) drawer.innerHTML = DRAWER_HTML;

  // Highlight active page
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#site-nav a, #drawer a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === path) {
      a.classList.add('active');
    }
  });
})();

function toggleDrawer() {
  document.getElementById('drawer').classList.toggle('open');
}
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
}
