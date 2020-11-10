import WindowManager from '../../window/windowManager';
import globals from '../../globals/globals';
import exhibitionWindowButtons from '../../buttons/exhibitionWindowButtons';
import './exhibitions.css'

export default () => {
    $('body').append(`
    <div class="icon" id="exhib"  style="" >
        <img src="desktopIcons/exhibitions.svg" alt="" >
        <span class="iconText" >exhibitions.eo</span>
    </div>
    `);
    $('#exhib').on('click touchstart', () => {
            WindowManager.creaWindow('', 'exhibitions', (window) => {
                globals.exhibitions.list.forEach((exh) => {  
                    let exhibStructId = (exh.nome).replace(/\s/gm, '8');
                    console.log(exhibStructId);
                    // let exhibStruct = `
                    //     <div class="exhibWinitemList" id="${exhibStructId}">
                    //     <h2>${exh.nome}</h2>
                    //     <p>${exh.caption}</p>
                    //     <h4>${exh.data}</h4>
                    //     </div>
                    //     <img class="exhibWinitemListImg" src="${globals.exhibitions.mainFolder}/${exh.images.key}/main.jpg" />
                    // `;
                    let exhibStruct = `
                    <div class="exhibWinitemList" id="${exhibStructId}">
                    <img src="${globals.exhibitions.iconsFolder}/${exh.icon}"/>
                    </div>
                    `;
                    $('#wContent' + window.id).append(exhibStruct);
                    $('#' + exhibStructId).on('click touchstart', () => {
                        exhibitionWindowButtons(exhibStructId.replace(/8+/gm, ' '))
                      });
            });
        });
    });
}