
let  readlineSync = require('readline-sync');
let listaDeTareas = [ ];

let menu = async () => {
let exit= false ; 
while( exit == false)

{console.log(' 1. Ageregar Tarea :');
console.log (' 2. Eliminar Tarea :');
console.log (' 3. Completar tarea  :');
console.log (' 4. Todas las tareas :');
console.log (' 5 .Finalizar Tareas :');


 let pregunta = readlineSync.question(' Que opcion desea escoger :');
 switch ( pregunta){
   case"1" :
    addTrea ()
    .then((agregarTodo)=>{
      console.log("Tarea Creada" , agregarTodo)
    })
    .catch ( (error)=>{
      console.error("error al accionar tarea " , error );
    })


    break; 
   
   case"2" :await complete()
   break; 

   case"3" : await eliminarTareas()
 
   break; 

   case "4" :
    console.log ( " lista de tareas  :" ,  listaDeTareas)
    break; 
    
    case "5" :
      exit = true
      break;
     default: 
     console.log ('opcion  invalida ');
     break;

 }
} ; 



}

 
const addTrea = ()=> {
 let pp =  readlineSync.question('Digite Su Id :')
 let cc =  readlineSync.question('Descripcion De La Tarea :')
 
  return new Promise((resolve, reject) => {
    let agregarTodo = { id2 :pp , Ds:cc , z : false  } 
    listaDeTareas.push( agregarTodo) 
    resolve(agregarTodo);
  

 })

 


};

const eliminarTareas = ()=>{
    console.log( listaDeTareas)
    const lola = readlineSync.question("Que Id Quieres ELiminar ");
    
    return new Promise((resolve, reject) => {
      const axiLista =  listaDeTareas.filter( (agregarTodo) => agregarTodo.pp !== lola );
       listaDeTareas = axiLista 
       resolve(a)
    })
}
 
let complete = ()=> {
   console.log( listaDeTareas);
   let lua = readlineSync.question( " Que Id Desea Completar : ")
   return new Promise((resolve, reject) => {
    const val = listaDeTareas.map( ( agregarTodo)=>{ 
    
      if ( agregarTodo.pp == lua  ){ 
        return {
          ...agregarTodo,completado : !agregarTodo.completado
        }
       } 
       else { 
        return agregarTodo; 
      }
     } )

     listaDeTareas = val 

     resolve(val)
   })

   



}
   
menu();






 
