var actions=document.querySelectorAll("[data-action]"),counterValue=document.querySelector(".counter-value"),counter=JSON.parse(localStorage.getItem("counter"))||0;console.log(counter),counterValue.textContent=counter,actions.forEach((function(e){return e.addEventListener("click",(function(){var t=e.dataset.action;"increase"===t&&(counter+=1),"decrease"===t&&(counter-=1),"reset"===t&&(counter=0),"save"===t&&localStorage.setItem("counter",counter),"clear-save"===t&&localStorage.removeItem("counter"),counterValue.textContent=counter,console.log(counter)}))}));
//# sourceMappingURL=practice.d572c578.js.map