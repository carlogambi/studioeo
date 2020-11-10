import Window from './window'

export default class WindowManager{
    static windowList = [];
    static zIndxRef = [];
    static stepTop = 20;
    static stepLeft = 40;
    static numberOfWindows = 0;
  
    static creaWindow(text, title, onload){
      WindowManager.windowList.push(new Window(text, title, onload));
      console.log(WindowManager.windowList)
    }
    static setTopWindow(id){
      this.idOnTop = id;
      $('.window').css('z-index', '1');
      $(this.idOnTop).css('z-index', '10');
    }
    static manage(todo, window){
      switch(todo){
        case 'onTop':
        let varHolder;
        WindowManager.zIndxRef.forEach((item, index) => {
            if(item.wId == window.id){
              varHolder = item;
              WindowManager.zIndxRef.splice(index, 1);
              WindowManager.zIndxRef.push(varHolder);
            } });
        break;
        case 'add':
          WindowManager.numberOfWindows ++
          WindowManager.windowList.push(window);
          WindowManager.zIndxRef.push({ zI: null, wId: window.id });
        break;
        case 'remove':
          WindowManager.zIndxRef.forEach((item, index) => {
           if(item.wId == window.id){ 
             
            WindowManager.zIndxRef.splice(index, 1); 
            } 
          });
          WindowManager.windowList.forEach((w, index) => {
          if(w.id === window.id){
            w=null;
            WindowManager.windowList.splice(index, 1);
          } 
        });
         WindowManager.numberOfWindows --;
        break;
        default:
        alert(` called WindowManager.manage(todo, windowId),\n todo switchcase include only:\n 'add' 'remove' 'onTop'`);
      }
      this.refreshIndex();
    }
    static refreshIndex(){
      WindowManager.zIndxRef.forEach((wRef, index) => {
        wRef.zI = index*10;
        $('#' + wRef.wId).css('z-index',` ${wRef.zI}`);
        $('#' + wRef.wId + ' .wContent').css('z-index',` ${wRef.zI +2}`);
        });
      
    }
  
  }