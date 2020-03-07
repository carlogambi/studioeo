// tag to put in html <div style="width: 50vw; height: 20vh" data-path= "gallery/folder's/path/inside/public/folder" data-arrow-color="white" class="galleryContainer" id="galleryN1" ></div>
class GalleriesInDom{
  galList = [];
  constructor(){
    $(`div[ class = "galleryContainer" ]`).each((index, el) => {
      let id = '#galleryN'+(index+1);
      let path = $(id).attr('data-path');
      this.galList.push({id, path });
    });
  }
  getGalList(){ return this.galList; }
  getJSONgalList(){ return JSON.stringify(this.galList) }
}


 class TotalGallery{
  static totGal = [];
  static addGal(gal){ this.totGal.push(gal) }
  static getTotGal(){ return this.totGal; }
  static getGalById(id){ this.totGal.forEach((gal) => { if(gal.id === id){ return gal; } }); }
}

class Gallery{
  data = {}
  bricks = '';
  gallery;
  slider = undefined;
  sliderWidth = 0;
  sliderPosition = 0;
  sliderStepWidth = 0;
  sliderSteps = [];
  images;
  buttons = {};
  arrowsColor;
   constructor(oneGal, indexGal){
    this.data.id = oneGal.id;
    this.data.imgList = oneGal.files;
    this.data.path = oneGal.path;
    this.gallery = document.querySelector(this.data.id);
    this.arrowsColor = $(this.data.id).attr('data-arrow-color');
    console.log(this.arrowsColor);
    this.buildImgTagList();

  }
  buildImgTagList(){
    let imgTags = '';
    this.data.imgList.forEach((path, index)=> { imgTags += `<img img" id="${index}" src="${this.data.path}/${path}" alt="">\n`; });
    this.createGaleryTags(imgTags);
   }
   createGaleryTags(imgTags){
     this.bricks = `
              <div class="slider">${ imgTags } </div>
              <span class="galButtonL galleryButtons" ><</span>
              <span class="galButtonR galleryButtons" >></span>
              `;
    $(this.data.id).append(this.bricks);
     this.setGalleryNodes();
   }
   setGalleryNodes(){
     this.images = document.querySelectorAll(this.data.id+' .slider img');
     this.slider = document.querySelector(this.data.id+' .slider');
     this.buttons.left = document.querySelector(this.data.id+' .galButtonL');
     this.buttons.right = document.querySelector(this.data.id+' .galButtonR');
     this.images[this.images.length -1].onload = () => { this.setSliderWidth() };
   }
   setSliderWidth(){
     this.images.forEach((img) => { this.sliderWidth += img.clientWidth; });
     this.sliderWidth -= this.gallery.clientWidth;
     this.sliderStepWidth = parseInt(this.sliderWidth/ this.images.length);

     for (var i = 0; i >= -(this.sliderWidth); i-= this.sliderStepWidth) {
       this.sliderSteps.push(i);
     }
     this.sliderSteps[this.sliderSteps.length - 1] = -(this.sliderWidth)
     console.log('sw: '+this.sliderWidth);
     console.log(this.sliderSteps);
     this.styleButtons();
     this.setButtonsClick();

   }
   setButtonsClick(){
     this.buttons.left.onclick = () => { this.sliderPosition --; this.scroll();};
     this.buttons.right.onclick = () => { this.sliderPosition ++; this.scroll();};
   }
   scroll(){
     if(this.sliderPosition > this.sliderSteps.length - 1){ this.sliderPosition = this.sliderSteps.length - 1; }
     if(this.sliderPosition < 0){ this.sliderPosition = 0; }
     console.log(this.sliderPosition+' max: '+this.sliderWidth);
     this.slider.style.transition = 'transform 0.4s ease-in-out';
     this.slider.style.transform = 'translateX('+this.sliderSteps[this.sliderPosition]+'px)';
   }
   styleButtons(){
     console.log(this.gallery.clientHeight);
     const lBtnStyle = `color: ${this.arrowsColor};
                        position: relative;
                        transform-origin: 0% 50%;
                        bottom: ${(this.gallery.clientHeight/2)+this.buttons.left.clientHeight+20}px`;
     this.buttons.left.style.cssText = lBtnStyle;

     const rBtnStyle = `color: ${this.arrowsColor};
                        position: relative;
                        transform-origin: 100% 50%;
                        bottom: ${(this.gallery.clientHeight/2)+this.buttons.left.clientHeight+20}px;
                        right: -${this.gallery.clientWidth*0.8}px;
                        `;
     this.buttons.right.style.cssText = rBtnStyle;
   }
}




// $(window).load(() => {
//   let g = new GalleriesInDom;
//   console.log(g.getGalList());
//   $.post( "../gallery/getimg", { paths: g.getJSONgalList() }, ( response ) => {
//     let toRender = JSON.parse(response);
//     toRender.forEach((item, index) => {
//       TotalGallery.addGal(new Gallery(item, index));
//     });
//     console.log(TotalGallery.getTotGal());
//   });

// });
