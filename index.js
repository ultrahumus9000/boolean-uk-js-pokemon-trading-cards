// write your code here!
// This variable has the data you're working with

// console.log(data);

// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <section class="cards"></section>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

// Tips
// - Use functions to your advantage. Break each card into smaller parts, and think how you can turn them into functions.
// - Once you've got a card, think of a way to programmatically create all the others
// - Make sure you understand well the data structure before starting to create the cards

// Challenge
// Add an extra section to each card that contains information about which games each pokemon appeared in.

// Challenge 2
// See if you can find a way to toggle between the different images of each card! (this is a hard one! You might want to use google...)
/* <section class="cards">


<!-- Repeat this card article with the other pokemons -->
</section> */

// create a card structure with the class

function displaycard(num){
    for(let i =0; i<num; i++){
        //add details
        let articleEl = document.createElement('article')
        let h2El = document.createElement('h2')
        let imgEl = document.createElement('img')
        let divEl = document.createElement('div')
        //set class
        articleEl.setAttribute('class', 'card')
        h2El.setAttribute('class', 'card--title')
        imgEl.setAttribute('class', 'card--img')
        divEl.setAttribute('class', 'card--text')
        articleEl.setAttribute('class', 'card')
        h2El.innerText = data[i].name
        // varible
        imgEl.setAttribute('src', data[i].sprites.other["official-artwork"].front_default )
        imgEl.setAttribute('width','256')
        // varible
            const stats = data[i].stats
            for(const item of stats){
                let pEl = document.createElement('p')
                pEl.innerText = `${item.stat.name.toUpperCase()}: ${item.base_stat}`
                divEl.append(pEl)
            }

        let sectionEl = document.querySelector('section')
        sectionEl.append(articleEl)
        articleEl.append(h2El, imgEl,divEl)
    }   
}
displaycard(10)

 

