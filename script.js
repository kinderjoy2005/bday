function showPage(id){

  document.querySelectorAll(".page")
    .forEach(page=>{
      page.classList.remove("active");
    });

  document
    .getElementById(
      typeof id==="number"
      ? "page"+id
      : id
    )
    .classList.add("active");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}

setTimeout(()=>{

  const btn =
    document.getElementById("page2Btn");

  if(btn){
    btn.style.display="inline-block";
  }

},5000);