const search=document.getElementById('search');
const buttons=document.querySelectorAll('#filters button');
const cards=document.querySelectorAll('.card');
const noresults=document.getElementById('noresults');
let filter='all';
function apply(){
  const q=(search.value||'').toLowerCase().trim();
  let shown=0;
  cards.forEach(c=>{
    const okCat=filter==='all'||c.dataset.cat===filter;
    const okQ=!q||c.dataset.name.includes(q)||c.textContent.toLowerCase().includes(q);
    c.style.display=(okCat&&okQ)?'':'none';
    if(okCat&&okQ) shown++;
  });
  noresults.hidden=shown!==0;
}
buttons.forEach(b=>b.addEventListener('click',()=>{
  buttons.forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); filter=b.dataset.filter; apply();
}));
search.addEventListener('input',apply);
