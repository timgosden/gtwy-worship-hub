(function(g) {
  var MS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var ML = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var DS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  function pd(s) {
    var p = s.split('-');
    return new Date(+p[2], MS.indexOf(p[1]), +p[0]);
  }

  function esc(s) {
    return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  g.renderRota = function(id, data, opts) {
    opts = opts || {};
    var el = document.getElementById(id);
    if (!el) return;
    var today = new Date(); today.setHours(0,0,0,0);

    var groups = [], map = {};
    var nextIdx = -1, globalIdx = 0;

    data.forEach(function(r) {
      var d = pd(r.date);
      var k = d.getFullYear() * 100 + d.getMonth();
      if (!map[k]) {
        map[k] = [];
        groups.push({ label: ML[d.getMonth()] + ' ' + d.getFullYear(), rows: map[k] });
      }
      var past = d < today;
      if (!past && nextIdx === -1) nextIdx = globalIdx;
      map[k].push({ r: r, d: d, past: past, globalIdx: globalIdx });
      globalIdx++;
    });

    var html = '';
    groups.forEach(function(grp) {
      html += '<p class="rota-month-heading">' + grp.label + '</p>';
      grp.rows.forEach(function(item) {
        var r = item.r, d = item.d;
        var noService = !r.members || r.members.length === 0;
        var isNext = item.globalIdx === nextIdx && !noService;
        var cls = 'rota-row'
          + (item.past ? ' past' : '')
          + (noService ? ' no-service' : '')
          + (isNext ? ' is-next' : '');

        var dc = '<div class="rota-date-col">'
          + '<span class="rota-day">' + DS[d.getDay()] + '</span>'
          + '<span class="rota-date-num">' + d.getDate() + '</span>'
          + '<span class="rota-month-abbr">' + MS[d.getMonth()] + '</span>'
          + '<span class="rota-time">' + r.time + '</span>'
          + '</div>';

        var body = '<div class="rota-body">';
        if (isNext) body += '<span class="rota-next-label">Next up</span>';
        if (noService) {
          body += '<p class="rota-no-members">' + esc(r.note || 'No service') + '</p>';
        } else {
          var meta = '';
          if (r.band) meta += '<span class="rota-band">' + esc(r.band) + '</span>';
          if (r.note) meta += '<span class="rota-note">' + esc(r.note) + '</span>';
          if (meta) body += '<div class="rota-meta">' + meta + '</div>';
          body += '<ul class="rota-members">';
          r.members.forEach(function(m) {
            var nc = 'rota-name' + (m.wl ? ' is-wl' : '') + (m.clash ? ' is-clash' : '');
            body += '<li class="rota-member"><span class="' + nc + '">' + esc(m.n) + '</span>';
            if (m.r) body += '<span class="rota-roles">' + esc(m.r) + '</span>';
            if (m.clash) body += '<span class="rota-badge clash">clash</span>';
            if (m.tbc)   body += '<span class="rota-badge tbc">tbc</span>';
            body += '</li>';
          });
          body += '</ul>';
        }
        body += '</div>';
        html += '<div class="' + cls + '" id="' + (isNext ? id + '-next' : '') + '">' + dc + body + '</div>';
      });
    });

    el.innerHTML = html;

    // Scroll to the next upcoming service (only if requested)
    if (opts.scroll) {
      var nextEl = document.getElementById(id + '-next');
      if (nextEl) {
        setTimeout(function() {
          var top = nextEl.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }, 150);
      }
    }
  };
})(window);
