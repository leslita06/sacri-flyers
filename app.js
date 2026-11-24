(function(){var v='sobre',f='carre';
function draw(){document.querySelectorAll('.card').forEach(function(c){var d=JSON.parse(c.dataset.imgs)[v][f];var m=c.querySelector('.media');
m.innerHTML=d.map(function(u,i){return '<img src="'+u+'?v=241124c" alt="" loading="lazy">'}).join('');m.scrollLeft=0;
c.classList.toggle('st',f==='story');var dt=c.querySelector('.dots');if(dt){dt.innerHTML=d.map(function(_,i){return '<i class="'+(i?'':'on')+'"></i>'}).join('');
m.onscroll=function(){var k=Math.round(m.scrollLeft/m.clientWidth);dt.querySelectorAll('i').forEach(function(x,j){x.classList.toggle('on',j===k)})}}
c.querySelector('.dl').innerHTML=d.map(function(u,i){return '<a href="'+u.replace('img/','hd/')+'" download>Télécharger'+(d.length>1?' '+(i+1):'')+'</a>'}).join('')})}
document.querySelectorAll('[data-v]').forEach(function(b){b.onclick=function(){v=b.dataset.v;document.querySelectorAll('[data-v]').forEach(function(x){x.classList.toggle('on',x===b)});draw()}});
document.querySelectorAll('[data-f]').forEach(function(b){b.onclick=function(){f=b.dataset.f;document.querySelectorAll('[data-f]').forEach(function(x){x.classList.toggle('on',x===b)});draw()}});
document.querySelectorAll('.copy').forEach(function(b){b.onclick=function(){var t=b.parentNode.querySelector('textarea').value;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){b.textContent='Copiée';b.classList.add('ok')},function(){b.textContent='Sélectionnez le texte ci-dessus'})}});
draw()})();