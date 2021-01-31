
function autoCompleteSearch(){
    console.log('autocmplet');
    var input = document.getElementById('search-bar').innerHTML;
    var autoComplete = new google.maps.places.AutoComplete(input);
}
