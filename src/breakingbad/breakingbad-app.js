
/**
 * @returns {Promise<Object>} Quote information
 */
const fetchQuote = async() => {

    const res = await fetch( 'https://animechan.xyz/api/random' );
    const data= await res.json();

    console.log(data);
    return data;

}


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const Breakingbadapp = async( element ) => {
    document.querySelector('#app-tittle').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';
    // await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const characterLabel = document.createElement('h3');
    const animeLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderquote = ( data ) => {
        quoteLabel.innerHTML = data.quote;
        characterLabel.innerHTML = data.character;
        animeLabel.innerHTML = data.anime;
        element.replaceChildren( quoteLabel, characterLabel, animeLabel, nextQuoteButton );

    }


    fetchQuote()
        .then( renderquote );


}
