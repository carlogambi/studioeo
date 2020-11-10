import disaccordi from "./disaccordi";
import monster from "./monster";
import orogenesi from "./orogenesi";
import scenari from "./scenari";

 export default {
        list: [
        disaccordi,
        monster,
        orogenesi,
        scenari
        ],
        fileStruct:(number) => { return number+'.jpg' },
        mainFolder: 'exhibitions',
        iconsFolder: 'icons'
    }
