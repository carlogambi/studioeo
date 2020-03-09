
function galleryEO(imgList){
    const id = parseInt(Math.random()*1000000);
return  `
<div id="gallery${id}" class="gallery">
  <div id="gal${id}">
  ${
      imgList.map((item,index) => `<img id="${index}" src="${item} alt="">`).join('')
  }
  </div>
  <span id="left${id}" ><</span>
  <span id="right${id}" >></span>
  <script>
    var ancestor = document.getElementById('gal${id}'),
    descendents = ancestor.getElementsByTagName('*');
    var elementi = Array.from(descendents);
    var totalWidth = 0;

    for( i = 1; i <= elementi.length; i++){ totalWidth = totalWidth + $("#"+i).outerWidth(true); }
    console.log(totalWidth);
    totalWidth = totalWidth - $("#gal").innerWidth();
    console.log(totalWidth);
    var GAL = $("#gal${id}"),
        n = GAL.find(">*").length;
        c = 0;
    var i = 0;

    $("#left${id}").on("click", function(){  if(i > 0 ){  i-=200; GAL.animate({ scrollLeft: i });    }      console.log(i);  });
    $("#right${id}").on("click", function(){  if(i <= totalWidth ){  i+=200; GAL.animate({ scrollLeft: i });    }      console.log(i);  });
  </script>
</div>
`;
}