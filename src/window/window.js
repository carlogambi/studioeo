import WindowManager from './WindowManager';
import './window.css'
import './windowSm.css'
import './windowScrollBar.css'

export  default class Window{
    title;
    content;
    bricks;
    domRef;
    zIndex;
    id;
    constructor(content, title, onload){
      console.log({content, title})
      this.title = title;
      this.content = content;
      this.id = Math.trunc(Math.random()*(Math.pow(10, 7)));
      this.bricks = `<div id="${this.id}" class="window">
                          <div id="${this.id}wHeader" class="wHeader">
                              <img class="dragIcon" src="icons/drag.svg" />
                              <span class="title">${this.title}</span>
                              <span class="close" id="${this.id}_cbtn">x</span>
                          </div>
                          <div class="wContent" id="wContent${this.id}">
                          ${this.content}
                          </div>
                      </div>`;
      this.buildTag();
      if(onload){onload(this);}
    }
    buildTag(){
      $('body').append(this.bricks);
      this.domRef = document.getElementById(this.id);
      this.setLogics();
    }
    setLogics(){
      WindowManager.manage('onTop', this); 
      $('#' + this.id + 'wHeader').mousedown(() => {})
      $('#' + this.id).draggable({ cancel: '.wContent' }).on('click', () => { 
          WindowManager.manage('onTop', this); 
        }); 
      $(`#${this.id}_cbtn`).on('click touchstart', () => { 
          $('#' + this.id).remove();  
          WindowManager.manage('remove',this); 
        });
      WindowManager.manage('add',this);
      $('#' + this.id).css('left', WindowManager.stepLeft*WindowManager.numberOfWindows + 'px');
      $('#' + this.id).css('top', WindowManager.stepTop*WindowManager.numberOfWindows + 'px');
  
    }
    onTop(){
      WindowManager.manage('onTop', this); 
    }
  }