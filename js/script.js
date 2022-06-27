let gridcontainer = document.getElementById('grid-container');
let button = document.getElementById('button');
let bomblist = [];
let bomb = createbomb (bomblist , 16);
let sum = 0;

button.addEventListener('click' , function(){

      
    gridcontainer.innerHTML='';

    for (let i = 0 ; i < 100 ; i++) {
        
        let gridbox = creategridboxeasy ();

        gridbox.innerHTML = i;

        creategridelementclass(gridbox , 'azure-box');
        
        gridbox.addEventListener('click' , function() {
    
        

        console.log('Hai cliccato il numero ' + i);    
            
    
         }
    )

        gridcontainer.append(gridbox);
        

        if(i === bomb) {
            
            creategridelementclass(gridbox , 'red-box');
            gridbox.addEventListener('click' , function() {
        
                console.log('Hai cliccato il numero ' + bomb + ', quindi hai perso');
                
                gridcontainer.innerHTML = 'Hai cliccato sulla bomba numero ' + bomb + ', perciò gioco terminato'
        
             }
        )
        } else {
            
            
            bomblist.push(bomb);
        
        }
    
        
    
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

function createbomb(list, num) {
    
    let randombomb;

    let control = false;

    while( control === false) {

       randombomb =  Math.round(Math.random() * num);

        if(!list.includes(randombomb)) {

            control = true;
        }
    } 

    return randombomb;
}


   