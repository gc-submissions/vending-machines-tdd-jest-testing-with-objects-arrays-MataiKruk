(()=>{var e={420:e=>{calculateChange=(e,t)=>t-e,isSufficientPayment=(e,t)=>t>=e,calculateTotal=e=>{let t=0;for(item of e)t+=item.price;return t},addItem=(e,t,n)=>{e.push({name:t,price:n})},removeItem=(e,t)=>{e.splice(t,1)},e.exports={calculateChange,isSufficientPayment,calculateTotal,addItem,removeItem}},842:e=>{formatCurrency=e=>e<0?`-$${(-e).toFixed(2)}`:`$${e.toFixed(2)}`,getCoins=e=>{const t={quarters:0,dimes:0,nickels:0,pennies:0};for(;e/25>=1;)e-=25,t.quarters++;for(;e/10>=1;)e-=10,t.dimes++;for(;e/5>=1;)e-=5,t.nickels++;for(;e/1>=1;)e-=1,t.pennies++;return t},e.exports={formatCurrency,getCoins}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{let{formatCurrency:e,getCoins:t}=n(842);const{addItem:r,calculateTotal:a,isSufficientPayment:i,calculateChange:c,removeItem:o}=n(420);e=e||(e=>e);const d=[{name:"Candy Bar",price:.95},{name:"Bag of Chips",price:1.29},{name:"Can of Soda",price:1.8},{name:"Bottle of Milk",price:3},{name:"Box of Cherries",price:5.13}];!function(){const n=document.getElementById("menu"),s=document.getElementById("selectedItems"),m=document.getElementById("total"),u=document.getElementById("cashInput"),l=document.getElementById("cashForm"),f=document.getElementById("changeDue"),g=document.getElementById("cashInserted"),p=document.getElementById("paymentInsufficientMessage"),I=document.getElementById("change"),h=I.querySelectorAll(".change-count"),y=document.getElementById("resetButton");d.forEach(((t,r)=>{n.insertAdjacentHTML("beforeend",`<li>${e(t.price)} - ${t.name}\n        <button data-index="${r}">Buy</button>\n      </li>`)}));let x=[];function v(){s.innerHTML="",x.forEach(((t,n)=>{s.insertAdjacentHTML("beforeend",`<tr>\n        <td>${t.name}</td>\n        <td>${e(t.price)}</td>\n        <td><button data-index="${n}">Remove</button></td>\n      </tr>`)}));const t=a(x);m.innerText=e(t)}n.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));if(!isNaN(t)){const e=d[t];r(x,e.name,e.price),v()}})),s.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));isNaN(t)||(o(x,t),v())})),l.addEventListener("submit",(n=>{n.preventDefault();const r=Number(u.value)||0,o=a(x);let d=0;try{d=c(o,r)}catch(n){console.error(n)}if(g.innerText=e(r),f.innerText=e(d),i(o,r)){const e=t(Math.round(100*d));h[0].innerText=e.quarters,h[1].innerText=e.dimes,h[2].innerText=e.nickels,h[3].innerText=e.pennies,I.hidden=!1,p.hidden=!0}else I.hidden=!0,p.hidden=!1})),y.addEventListener("click",(()=>{x=[],v(),u.value="",g.innerText="",f.innerText="",I.hidden=!0,p.hidden=!0}))}()})()})();