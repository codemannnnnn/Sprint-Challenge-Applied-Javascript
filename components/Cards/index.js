// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardContainers = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then ( res => {
        let articles = res.data.articles
        // console.log(articles);
        Object.keys(articles).forEach( key => {
            articles[key].forEach( item => {
                cardContainers.appendChild(cards(item))
                // console.log(obj);
            })
        })
    })
    .catch ( error => {
        console.log('error', error);

    })



function cards (obj) {
  let card = document.createElement('div')
  let headline = document.createElement('div')
  let author = document.createElement('div')
  let imgContainer = document.createElement('div')
  let img = document.createElement('img')
  let name = document.createElement('span')

  imgContainer.appendChild(img)
  author.appendChild(imgContainer)
  author.appendChild(name)
  card.appendChild(author)
  card.appendChild(headline)

  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  headline.textContent = obj.headline
  name.textContent = `By: ${obj.authorName}`

  img.src = obj.authorPhoto

  return card


}
