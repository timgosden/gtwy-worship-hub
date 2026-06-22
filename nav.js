(function () {
  const NAV_HTML = `
<a href="index.html" class="logo">
  <svg class="logo-svg" viewBox="8 8 85 85" xmlns="http://www.w3.org/2000/svg">
    <path fill="white" d="M50.6,10.2c-0.1,0-0.1,0-0.2,0c-22.4,0-40.6,18.2-40.6,40.6s18.2,40.6,40.6,40.6C72.9,91.4,91,73.2,91,50.8
      l0.1-40.7L50.6,10.2z M58.6,19.5l8.5,17.3h0.1l8.5-17.3h5.9L67.3,48.8h-0.2L52.6,19.5H58.6z M50.5,82.1c-17.3,0-31.3-14-31.3-31.3
      c0-16.3,12.5-29.7,28.4-31.2l3,6.1c0,0-0.1,0-0.1,0c-6.7,0-13,2.6-17.7,7.3c-4.7,4.7-7.3,11-7.3,17.7c0,6.7,2.6,13,7.3,17.7
      c4.7,4.7,11,7.3,17.7,7.3s13-2.6,17.7-7.3c3.2-3.2,5.5-7.2,6.6-11.5H50.6v-6.2h25h6.2C81.8,68.1,67.8,82.1,50.5,82.1z"/>
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
