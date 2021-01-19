/* eslint-disable no-plusplus */

const host = 'https://anikolaevski-ahj10-http.herokuapp.com';
const port = '';

function RefillListTbody(data) {
  console.log(data);
}

function requestList() {
  const url = `${host}${port}/?method=allTickets`;

  async function run(link) {
    const response = await fetch(link);
    if (response.ok) {
      const data = await response.json();
      RefillListTbody(data);
    }
  }

  run(url);
}

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('Module started!');
  requestList();
});
