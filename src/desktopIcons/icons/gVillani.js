import WindowManager from "../../window/windowManager";
import globals from "../../globals/globals";

export default () => {
    $('body').append(`
    <div class="icon" id="gVillani"  >
        <img src="desktopIcons/stocastica.svg" alt="" >
        <span class="iconText" >GioeleVillani.eo</span>
    </div>
    `);

    let gVillaniWindowExist = false;
    const gVillaniInfoButton = '<span  id="gVillainInfo"  style="font-size: 17px;cursor: help; padding:3px;">info</span>';
    $('#gVillani').on('click', () => {
        while(gVillaniWindowExist === false){
        WindowManager
        .creaWindow(
          '<div id="TARGET_ID"></div>'
          , 'Gioele Villani  ' + gVillaniInfoButton, (window) => {
            $(`#${window.id}_cbtn`).on('click', () =>{
              gVillaniWindowExist = false;
            });
            $('#gVillainInfo').on('click', () => {
                WindowManager.creaWindow(globals.customs.infoGioeleVillani, 'Gioele Villani');
            })
          });
          startP5Program();
          gVillaniWindowExist = true;
          }
          console.log({gVillaniWindowExist});
        });
}
