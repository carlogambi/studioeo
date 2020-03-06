
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
    this.bricks = `<div id="${this.id}" class="window">
                        <div class="wHeader">
                            <span class="title">${this.title}</span>
                            <span class="close" id="${this.id}_cbtn">x</span>
                        </div>
                        <div class="wContent">
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
    $('#' + this.id).draggable().on('click', () => { WindowManager.manage('onTop', this.id); });
    $(`#${this.id}_cbtn`).on('click', () => { $('#' + this.id).remove(); console.log('hey'); WindowManager.manage('remove',this.id); });
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
    this.bricks = `<div class="${this.class}" >
                      <div class="${this.voxContainerClass}" align="center"></div>
                      <div class="menuIcon">_<br>_<br>_<br> </div>
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





$(window).load(() => {
  $.post( "/getVociMenu", {some:'some'}, ( data ) => {
    let menuVox = JSON.parse(data.menuList);
    let menu = new Menu(menuVox);
    console.log(menuVox);
  });

});

//_------------------runtime-----------------------------------------------


/*
$('#menuButton, #upperMenuButton').on('click', () => {
  let display = $('#openMenu').css('display');
  if(display == 'none'){
    $('#openMenu').css({'display': 'inherit'});
    $('#menuButton').empty().append('x');
  }else {
      $('#openMenu').css({'display': 'none'});
          $('#menuButton').empty().append('_<br>_<br>_<br>');
  }
});


  let zindex = 10;
function creaWind(text)  {
  console.log(text);
  let id = text+(parseInt(Math.random()*(10000000000000000)));
  $('#openIcons').append(`
    <span class="icoButton " id="ico${id}" onclick="$('#${id}').toggle();$('.draggable').css({'z-index': '10'});$('#${id}').css({'z-index': '20'});">
    ${text}
    </span>
    `);
    let add = '';
    if(text == 'exhibitions'){ add = 'submenu'; }else{ $('.window').css({  'height': '77vh'})};

  $('body').append(`
    <div class="draggable ${add}" id="${id}" onclick="$('.draggable').css({'z-index': '10'});$(this).css({'z-index': '20'});">
      <table class="window">
      <tr>
        <td >
        <div id="windowContent${id}" class="princContainer"align="center">
        </div>

        </td>
      </tr>
        <tr>
          <td class="windowMenu">
          <span onclick="$('#${id}').remove();$('#ico${id}').remove()">
          x</span>
          <span onclick="$('#${id}').toggle()">
          -</span>
          </td>
        </tr>
      </table>
    </div>
    `);
    if(add == ''){  $('.window').css({  'height': '77vh'})};
    zindex+=10;
    $(`#${id}`).draggable().css({'z-index': '20'});
    $.post( `/give/${text}`, {test:'test'}, ( data ) => {
      console.log(data);
     $(`#windowContent${id}`).append(data.output.meat);
    });
    /*
    switch (text) {
      case 'about':
      $.post( "/about", {test:'test'}, ( data ) => {
      $(`#windowContent${id}`).append(data.output.meat);
      });
      case 'exhibitions':
      $.post( "/exhibitions", {test:'test'}, ( data ) => {
      //$(`#windowContent${id}`).append(data.output.meat);
      });
        break;
    }
    *//*
    return id;
}
*/
