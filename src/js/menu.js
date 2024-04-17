export function menu(){
    const headerToggle=document.getElementById('headerToggle')
    const headerNav=document.querySelector('.header_nav')

    if(headerToggle){
        headerToggle.addEventListener("click",()=>{
            headerNav.classList.toggle("show");
            headerToggle.getAttribute("aria-expanded")==='true' /* 조건식 */
            ?headerToggle.setAttribute('aria-expanded','false') /* 참이면 */
            :headerToggle.setAttribute('aria-expanded','true'); /* 거짓이면 */
        });
    }
}