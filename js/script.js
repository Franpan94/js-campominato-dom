let gridcontainer = document.getElementById('grid-container');
let button = document.getElementById('button');
let bomblist = [];

button.addEventListener('click' , function(){
      console.log(button);  
    gridcontainer.innerHTML='';

    for (let i = 0 ; i < 100 ; i++) {
        
        let gridbox = creategridboxeasy ();

        gridbox.innerHTML = i;

        creategridelementclass(gridbox , 'azure-box');

        gridcontainer.append(gridbox);
    
    }

    
    for(let b=0 ; b < 16 ; b++) {

        let gridboxbomb = creategridboxeasy ();

        let bomb = createbomb (bomblist , 1 , 16);

        gridboxbomb.innerHTML = bomb;

        creategridelementclass(gridboxbomb , 'red-box');

        bomblist.push(bomb);

        gridcontainer.append(gridboxbomb);

   }

})




// Funzioni

function creategridboxeasy (){
    
    let grid = document.createElement('div');

    grid.classList.add('box' , 'dimensioneasy');

    return grid;

}

function creategridelementclass(gridelement , gridclass) {

     gridelement.addEventListener('click' , function() {
        
        gridelement.classList.toggle(gridclass);

     }
)}

function createbomb(list, min, max) {
    
    let randombomb;

    let control = false;

    while( control === false) {

       randombomb =  Math.round(Math.random() * (max - min) + min);

        if(!list.includes(randombomb)) {

            control = true;
        }
    } 

    return randombomb;
}


   