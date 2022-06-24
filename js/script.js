let gridcontainer = document.getElementById('grid-container');
let button = document.getElementById('button');

button.addEventListener('click' , function(){
        
    gridcontainer.innerHTML='';

    for (let i = 0 ; i < 100 ; i++) {
        let gridbox = creategridboxeasy ();
    
        
        gridbox.innerHTML = i;
            
        creategridelementclass(gridbox , 'azure-box');
    
        gridcontainer.append(gridbox);
    
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


   