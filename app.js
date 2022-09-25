const markRead = document.querySelector('#mark');
const num = document.querySelector('#notif-num');
const the = document.querySelector('span');

function read() {
  const unread = document.querySelectorAll('.unread');
  const circle = document.querySelectorAll('.circle');


  for(let markAll of unread) {
    markAll.classList.remove('unread');
  }

  for(let cir of circle) {
    cir.classList.remove('circle');
  }

  the.innerHTML = 0;
}

markRead.addEventListener('click', read);
