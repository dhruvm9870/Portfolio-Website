console.log("Script running.....")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
  document.querySelector('.sidebar').classList.toggle('sidebarGo');
  if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.sidebar').style.display='inline'
    document.querySelector('.cross').style.display='none'
  }
  else{
    document.querySelector('.ham').style.display='none'
    setTimeout(() => {
    document.querySelector('.cross').style.display='inline'
    }, 300);

  }
})

// <!-- -------------about---------------- -->
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}