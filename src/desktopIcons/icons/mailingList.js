import WindowManager from "../../window/windowManager";
import './mailingList.css'
export default () => {
    $('body').append(`
    <div class="icon" id="mailList" >
        <img src="desktopIcons/mailingList.svg" alt="" >
        <span class="iconText" >MailList.eo</span>
    </div>
    `);

    $('#mailList').on('click', () => {
        WindowManager.creaWindow(`
        <div class="addMailForm" align="center">
            <span id="title">ADD TO MAILING LIST</span>
            <br>
            <input type="text" id="emailInput" placeholder="write here you email" autofocus>
            <br><br><br>
            <span id="button">add</span>
            <div id="emailMsgBox"></div>
        </div>
        `, 'studioeo mailing list', (w) => {
            $('.addMailForm #button').on('click keyup touchstart', () => {
                $.post('/addMail', { email: $('#emailInput').val() }, (res) => {
                    $('#emailMsgBox').empty().append(() => {
                        if(!res.isValid){ 
                            return res.email + ' is not a valid email'; 
                        }
                        if(res.isPresent){
                            return res.email + ' already in our mailing list =)'
                        }
                        if(!res.isPresent && res.isValid){
                            return res.email + ' added to our mailing list =)'
                        }
                    })
                    
                });
            });
        });
    });
}