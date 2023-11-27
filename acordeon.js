function acordeon( selector ){/* Selecciona todos los "elementos" que coinciden con el nombre del elemento especificado */
    const elemento = document.querySelector( selector );
    if( ! elemento ) return;
  
    const items = elemento.querySelectorAll( 'li' ); /* asigna la variable "items" a todas las etiquetas "li"  */
    if( items.length == 0 ) return; /* si no hay items, return */
  
   /* elemento.style.setProperty( '--items-qtty', items.length - 1 );  inactivo */
    Array.from( items ).forEach( item => { /* Array, recorre los items del acordeon y los hace clickeables  */
      item.addEventListener('click', e => { 
        
        const anterior = elemento.querySelector( '.open' ); /* selecciona el item con la clase open y lo asigna a la const "anterior" */
        if( anterior ) anterior.classList.remove( 'open' ); /* Si se tiene un "anterior", le quita la clase "open" al clickear en otro item */
  
        item.classList.add( 'open' ); /* le agrega la clase open al item clickeado para que muestre su info */
      } );
    } );
    console.log( elemento ); /* console log para ver el elemento al seleccionarlo */
  }
  
  acordeon( '.acordeon' ); /* Para apuntar el query selector a la clase acordeon */
    
