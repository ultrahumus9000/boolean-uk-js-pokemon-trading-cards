// write your code here!
// This variable has the data you're working with

// console.log(data);



// Challenge 2
// See if you can find a way to toggle between the different images of each card! (this is a hard one! You might want to use google...)

// create a card structure with the class

function displaycard(num){
    for(let i =0; i<num; i++){
        //add details
        let articleEl = document.createElement('article')
        let h2El = document.createElement('h2')
        let imgEl = document.createElement('img')
        let divEl = document.createElement('div')
        let gameEl = document.createElement('span')
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
            // chanllenge1
            const gameIndices = data[i].game_indices
            for(const indice of gameIndices ){
               gameEl.innerText = gameEl.innerText + indice.version.name +'/ '
               divEl.append(
                gameEl
               )
            }
            //chanllenge1
        let sectionEl = document.querySelector('section')
        sectionEl.append(articleEl)
        articleEl.append(h2El, imgEl,divEl)
    }   
}
displaycard(20)

 

