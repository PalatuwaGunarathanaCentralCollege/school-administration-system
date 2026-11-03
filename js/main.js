// O/L and A/L paper tabs
document.querySelectorAll('[data-exam-tab]').forEach(function(tab){tab.addEventListener('click',function(){var selected=tab.getAttribute('data-exam-tab');document.querySelectorAll('[data-exam-tab]').forEach(function(t){var active=t===tab;t.classList.toggle('active',active);t.setAttribute('aria-selected',active?'true':'false')});document.querySelectorAll('[data-exam-card]').forEach(function(card){card.hidden=card.getAttribute('data-exam-card')!==selected})})});

const menuBtn=document.getElementById('menuBtn'), nav=document.getElementById('navlinks');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const modal=document.getElementById('modal'), modalImg=document.getElementById('modalImg');
document.querySelectorAll('.gallery button').forEach(btn=>btn.addEventListener('click',()=>{modalImg.src=btn.dataset.img;modal.classList.add('open')}));
function closeModal(){modal.classList.remove('open');modalImg.src=''}
document.getElementById('modalClose').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const toast=document.getElementById('toast');let toastTimer;
document.querySelectorAll('a[href="#contact"]').forEach(a=>a.addEventListener('click',()=>{toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2800)}));
