/* eslint-disable no-plusplus */

const host = 'https://anikolaevski-ahj10-http.herokuapp.com';
const port = '';

function RefillListTbody(data) {
  console.log(data);
}

function requestList() {
  const url = `${host}${port}/?method=allTickets`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('loadend', () => {
    // TODO: request finished
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.responseText);
        // console.log(data);
        RefillListTbody(data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  });
  xhr.send();
}



document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('Module started!');
  requestList();
});
