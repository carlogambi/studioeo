import WindowManager from "../../window/windowManager";
import globals from "../../globals/globals";
import './about.css';

export default () => {
    $('body').append(`
    <div class="icon" id="about" >
        <img src="desktopIcons/about.svg" alt="" >
        <span class="iconText" >ABOUT.eo</span>
    </div>
    `);
    $('#about').on('click touchstart', () => {
        WindowManager.creaWindow( globals.about.body ,'about');
    });
}