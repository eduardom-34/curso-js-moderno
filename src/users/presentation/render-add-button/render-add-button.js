import './render-add-button.css';




/**
 * 
 * @param {HTMLDivElement} element
 */
export const renderAddbutton = ( element ) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append( fabButton );

    //TODO: 
    fabButton.addEventListener('click', () => {
        throw Error('No implementado');
    })

}


