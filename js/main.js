/* JS Document */

function init() {
  var i, ticketLinks, ticket, ticketContentLinks, ticketContent;

  ticketLinks = document.getElementsByClassName('ticket-links');
  ticket = document.getElementsByClassName('ticket');
  ticketContentLinks = document.getElementsByClassName('ticket-content-links');
  ticketContent = document.getElementsByClassName('ticket-content');

  ticketLinks[0].className += " active";
  ticket[0].style.display = "block";
  ticketContentLinks[0].className += " active";
  ticketContent[0].style.display = "block";

  document.getElementById("ticket1").addEventListener("click", function(){ tabTicket("ticket1")});
  document.getElementById("ticket2").addEventListener("click", function(){ tabTicket("ticket2")});
  document.getElementById("ticket3").addEventListener("click", function(){ tabTicket("ticket3")});

  document.getElementById("message").addEventListener("click", function(){ tabContent("message")});
  document.getElementById("contact-info").addEventListener("click", function(){ tabContent("contact-info")});
  document.getElementById("faq").addEventListener("click", function(){ tabContent("faq")});
}

function tabTicket(ticket) {
  ticketLinks = document.getElementsByClassName('ticket-links');
  
  for (i = 0; i < ticketLinks.length; i++) {
    ticketLinks[i].className = ticketLinks[i].className.replace(" active", "");
  }

  document.getElementById(ticket).className += " active";

  tabContent("message");
}

function tabContent(content) {
  ticketContentLinks = document.getElementsByClassName('ticket-content-links');

  for (i = 0; i < ticketContentLinks.length; i++) {
    ticketContentLinks[i].className = ticketContentLinks[i].className.replace(" active", "");
  }

  document.getElementById(content).className += " active";

  openContent(content+"-d");
}

function openContent(content) {
  ticketContent = document.getElementsByClassName('ticket-content');

  for (i = 0; i < ticketContent.length; i++) {
    ticketContent[i].style.display = "none";
  } 

  document.getElementById(content).style.display = "block";
}

function newTicket() {
  console.log("I would initialize a new ticket in the DB and display it for editting. Would result in either a new page or pop-up form.");
}

function msgLoad() {

}

window.onload = init;