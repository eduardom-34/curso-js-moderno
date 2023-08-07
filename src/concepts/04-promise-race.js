

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseRaceComponent = ( element ) =>{

    element.innerHTML = 'Loading...';

    const rendervalue = ( value ) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        fastPromise(),
        slowPromise(),
    ]).then( rendervalue );

}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
})

const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 3500);
})

const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 3000);
})

