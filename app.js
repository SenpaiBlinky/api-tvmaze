// include classes/id's when creating variables
// make sure to use the form element, but use preventDefault(); 
// with "event".on use submit instead of click ^^^^^^

$(function(){

    let $giphyAddButton = $("button#addGiphy");

    $giphyAddButton.on("click",async function() {
        let $giphyInput =  $("input").val();
        let $response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=4JXpQ427AGRNzlryZzUYDgjuI5w01j8T&q=${$giphyInput}&limit:1&offset:8`);
        console.log($response.data.data[8].url);
        let $image = $(`<img src="https://i.giphy.com/media/${$response.data.data[8].id}/giphy.webp">`);
        let $container = $("section");

        $container.append($image);

    })

    let $clearButton = $("button#clearGiphys");

    $clearButton.on("click", function() {
        let $container = $("section");
        $container.empty()
    })

});

