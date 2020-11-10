import exhibitions from "./icons/exhibitions";
import gVillani from "./icons/gVillani";
import about from "./icons/about";
import mailingList from "./icons/mailingList";
import './desktopIcons.css';
import './desktopIconsSm.css';
import './positions.css';
import './positionsSm.css';

export default () => {
    exhibitions();
    about();
    gVillani();
    mailingList();

    let media = window.matchMedia('(max-width: 768px)');
    if(media.matches){

    }else{
        $('.icon').draggable();
    }
}