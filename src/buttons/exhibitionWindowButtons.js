import globals from "../globals/globals"
import WindowManager from "../window/windowManager";
import './exhibitionWindowButtons.css'
import './exhibitionWindowButtonsSm.css'


export default (id) => {

    let currentExhib;
    globals.exhibitions.list.forEach((exhib) => {
        if( exhib.nome === id ){ currentExhib = exhib; } 
    });

    const totImgs = currentExhib.images.total;
    let counter = 1;
    let imgList = '';
    while(counter <= totImgs){
        imgList += `<img class="exhibImg" src="${globals.exhibitions.mainFolder}/${currentExhib.images.key}/gallery/${globals.exhibitions.fileStruct(counter)}" />`;
        counter++;
    }

    const downloadList = currentExhib.downloads.map((path) => { 
        return `<a class="exhibDwnld" class="subBtn" href="${globals.exhibitions.mainFolder}/${currentExhib.images.key}/download/${path}" target = "blank"  align="center">${path}</a><br>` ;
    }).join('<br>');

    const winContent = `
        <div align = "center">
        <h1 class="exhibName" align="center">${currentExhib.nome}</h1>
        <h3 class="exhibInfo" align="center">${currentExhib.info}</h3>
        <h5 class="exhibCaption" align="center">${currentExhib.caption}</h5>
        <img class="exhibMainImg" src="${globals.exhibitions.mainFolder}/${currentExhib.images.key}/main.jpg" />
        <p class="exhibText">${currentExhib.corpoTesto.replace(/\.+/gm, '.<br>')}</p>
        ${downloadList}
        ${imgList}
        </div>
    `;
    let media = window.matchMedia('(max-width: 768px)');
    if(media.matches){
        $.post('/exhibPageMobile', {arg: winContent},  (data) => {
            console.log('redirecting')
            window.location.replace(window.location.href + "exhibition");
            });
        }else{
        WindowManager.creaWindow(winContent, currentExhib.nome, (window) => { WindowManager.manage('onTop', window) });
    }
}