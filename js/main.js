/* JS Document */

function init(){
  ticketLinks = document.getElementsByClassName('ticket-links');
  ticket = document.getElementsByClassName('ticket');
  ticketContentLinks = document.getElementsByClassName('ticket-content-links');
  ticketContent = document.getElementsByClassName('ticket-content');

  ticketLinks[0].className += " active";
  ticket[0].style.display = "block";
  ticketContentLinks[0].className += " active";
  ticketContent[0].style.display = "block";
}

window.onload = init;

function openTab(evt, tabs, content, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName(content);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName(tabs);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    console.log(evt.currentTarget.className);
    evt.currentTarget.className += " active";
  }

  function newTicket() {
    console.log("I would initialize a new ticket in the DB and display it for editting. Would result in either a new page or pop-up form.");
  }

  function msgLoad() {

  }