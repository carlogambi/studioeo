function isMobile() {
  var check = false;
  (function(a){
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
      check = true;
     })(navigator.userAgent||navigator.vendor||window.opera);
 return check;
 };
 
 
 
 
 class InitPosition {
  static stepTop  = 40;
  static stepLeft = 20;
  static left  = 100;
  static top  = 0;
  presentWindows = 0;
  static add(){    
    this.presentWindows ++;
    this.left = this.left + this.stepLeft;
    this.top = this.top + this.stepTop;
    return { left: this.left, top: this.top };
  }
  static remove(){    
    this.presentWindows --;
    this.left = this.left - this.stepLeft;
    this.top = this.top - this.stepTop;
  }
}

class WindowManager{
  static windowList = [];
  static zIndxRef = [];
  static creaWindow(text, title){
    this.windowList.push(new Window(text, title));
  }
  static setTopWindow(id){
    this.idOnTop = id;
    $('.window').css('z-index', '1');
    $(this.idOnTop).css('z-index', '10');
  }
  static manage(todo, windowId){
    switch(todo){
      case 'onTop':
      let varHolder;
      this.zIndxRef.forEach((item, index) => {
          if(item.wId == windowId){
            varHolder = item;
            this.zIndxRef.splice(index, 1);
            this.zIndxRef.push(varHolder);
          } });
      break;
      case 'add':
      this.windowList.push(document.getElementById('#' + windowId));
      this.zIndxRef.push({ zI: null, wId: windowId });
      break;
      case 'remove':
      this.zIndxRef.forEach((item, index) => { if(item.wId == windowId){ this.zIndxRef.splice(index, 1); } });
      break;
      default:
      alert(` called WindowManager.manage(todo, windowId),\n todo switchcase include only:\n 'add' 'remove' 'onTop'`);
    }
    this.refreshIndex();
  }
  static refreshIndex(){
    this.zIndxRef.forEach((wRef, index) => {
      wRef.zI = index*10;
      $('#' + wRef.wId).css('z-index',` ${wRef.zI}`);
      $('#' + wRef.wId + ' .wContent').css('z-index',` ${wRef.zI +2}`);
      });
    console.log(this.zIndxRef);
  }

}

class Window{
  title;
  content;
  bricks;
  elementRef;
  zIndex;
  id;
  constructor(content, title){
    this.title = title;
    this.content = content.data;
    this.id = this.title.replace(/ /gi, "_");
    this.id = this.id +  Math.trunc(Math.random()*(Math.pow(10, 7)));
    this.bricks = `<div id="${this.id}" class="window"  >
                        <div class="wHeader">
                            <span class="title">${this.title}</span>
                            <span class="close" id="${this.id}_cbtn">x</span>
                        </div>
                        <div class="wContent" align= "center">
                        ${this.content}
                        </div>
                    </div>`;
    this.buildTag();
  }
  buildTag(){
    $('body').append(this.bricks);
    this.setLogics();
  }
  setLogics(){

    if (isMobile() == true) {
      $('#' + this.id ).on('click', () => { WindowManager.manage('onTop', this.id);}); 

      var m = document.getElementById(this.id);
      var header = m.getElementsByClassName('wHeader');
      console.log({header});
      header.ontouchmove = function(event){     
        console.log('hey');
        
          var rect = m.getBoundingClientRect();
          var ew = m.offsetWidth;
          var eh = m.offsetHeight;
          var tx = event.touches[0].clientY;
          var ty = event.touches[0].clientX;
          var ewcorrected = ew / 4;
          var ehcorrected = eh / 2;
          m.style.top = tx - ewcorrected + 'px';
          m.style.left = ty - ehcorrected + 'px';
       }
    } else {
      $('#' + this.id).draggable().on('click', () => { WindowManager.manage('onTop', this.id); }); 
    }
    let initPos = InitPosition.add();
    console.log(initPos);
    $('#' + this.id).css({ position: 'absolute' , top: initPos.top + 'px', left: initPos.left + 'px'});
    console.log('altezza: ' + $('#' + this.id + " .wHeader").css('height'));
    $(`#${this.id}_cbtn`).on('click', () => { InitPosition.remove(); $('#' + this.id).remove(); console.log('hey'); WindowManager.manage('remove',this.id); });
    WindowManager.manage('add',this.id);

  }
}

class VoceMenu {
  id;
  text;
  bricks;
  element;
  parentClass;

  constructor(text, index, targetClass){
    this.text = text;
    this.id = this.text + index;
    this.bricks = `<div class="voxMenu" id="${this.id}">${this.text}</div>`;
    this.parentClass = targetClass;
    this.buildTag();
  }
  buildTag(){
     $('.' + this.parentClass).append(this.bricks);
     this.element = document.querySelector(`div .${this.parentClass} #${this.id}`);
     this.setClickEvent();
   }
   setClickEvent(){
     this.element.onclick = () => {
       $.post('/getArgument', { arg: this.text }, (data) => {
         console.log(data);
         WindowManager.creaWindow(data, this.text);
       });
     };
   }

   getTag(){ return this.element; }
}

class Menu {
  class = "menu";
  voxContainerClass = 'toggleContent';
  voxContainer;
  bricks;
  element;
  icon;
  voxList = [];
  constructor(voxList){
    this.bricks = `<div class="${this.class}" align = "center">
                      <div class="${this.voxContainerClass}" align="center"></div>
                      <div class="menuIcon">M</div>
                  </div>`;
    $('body').append(this.bricks);
    voxList.forEach((vox, index) => { this.voxList.push(new VoceMenu(vox, index, this.voxContainerClass)) });
    console.log(this.voxList[ this.voxList.length - 1 ].element);
    this.voxList[ this.voxList.length - 1 ].element.onload = () => { console.log('last vox loaded'); }
    this.element = document.querySelector('.' + this.class);
    this.icon = document.querySelector('.' + this.class + ' .menuIcon');
    console.log('.' + this.class + ' .' + this.voxContainerClass);
    this.voxContainer = document.querySelector('.' + this.class + ' .' + this.voxContainerClass);
  $('.voxMenu').toggle();
  this.setClickEvent();
  }
  setClickEvent(){
    this.icon.onclick = () => {
      $('.voxMenu').toggle();
    };
  }

}

function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);  
}

$(window).load(() => {
  $.post( "/getVociMenu", {some:'some'}, ( data ) => {
    let menuVox = JSON.parse(data.menuList);
    let menu = new Menu(menuVox);
    console.log(menuVox);
  });
  if (isMobile() == true) {
    swapStyleSheet('styles/indexSM.css');
  } 
});

