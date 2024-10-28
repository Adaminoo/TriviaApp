// make a database of questions perchance? perchance use a second javascript file in order to make the database and then this javascript file will use the database?

const apiUrl = 'https://opentdb.com/api.php?amount=10';

fetch(apiUrl)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error:', error);
});