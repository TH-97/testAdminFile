
$("#tree").treeview({
  collapsed: true,
  animated: "fast"
  });

  var floor = document.querySelector("#floor");
  floor.addEventListener("click",() => {
    console.log(1);
    var main = document.querySelector("#main");
    main.innerHTML = '<iframe src="1F.html" style="width: 100%; height: 100%; border:none"></iframe>';
  });

  var floor2 = document.querySelector("#floor2");
  floor2.addEventListener("click",() => {
    var main = document.querySelector("#main");
    main.src = "2F.html";
  });

  
  
  var penalt = document.querySelector("#penalt");
  penalt.addEventListener("click",() =>{
    var main = document.querySelector("#main");
    main.innerHTML = '<iframe src="PenaltyDetails.html" style="width: 100%; height: 100%; border:none"></iframe>';
  });

  var suggestInquiry = document.querySelector("#suggestInquiry");
  suggestInquiry.addEventListener("click",() =>{
    var main = document.querySelector("#main");
    main.innerHTML = '<iframe src="suggestInquiry.html" style="width: 100%; height: 100%; border:none"></iframe>';
  });

  var noticeInquiry = document.querySelector("#noticeInquiry");
  noticeInquiry.addEventListener("click",() =>{
    var main = document.querySelector("#main");
    main.innerHTML = '<iframe src="noticeInquiry.html" style="width: 100%; height: 100%; border:none"></iframe>';
  });