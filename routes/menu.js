const db = require('./miniDb');

class Menu {
  constructor(){

    function voceMenu(id){
      return  `<tr> <td id="${id}"class="voceMenu" onclick="render("${id}")" align="left">${id}</td></tr>`;
    }
    this.vociMenu = 'prova';
    db.forEach((item) => {  this.vociMenu =+ voceMenu(item.type); });
    console.log(this.vociMenu);
  }

  build(){
    return `
    <div id="menuBar">
      <table id="openMenu" >
      ${ this.vociMenu }
      </table>
      <table id="defMenu" >
        <td id="menuButton" align="center" onclick="$('#openMenu').toggle()">
            _<br>_<br>_<br>
        </td>
        <td id="openIcons">

        </td>
      </table>
    </div>
    `;
  }
}

module.exports = Menu;
