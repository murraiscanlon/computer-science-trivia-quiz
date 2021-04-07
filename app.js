window.onload = sendApiRequest()


//An asynchronous function to fetch data from the API
async function sendApiRequest(){
    let response = await fetch(`https://opentdb.com/api_category.php`);
    // console.log(response)

    let data = await response.json()
    // console.log(data)

    getCategories(data)




}

function getCategories(data){


    let select = $('#categories');
    select.html('');
    length = data.trivia_categories.length;
    for (let i = 0; i < length; i++) { //starts loop
        select.append('<option id="' + data.trivia_categories[i].name + '">' + data.trivia_categories[i].name + '</option>');
        // console.log("category: " + data.trivia_categories[i].name); //What ever you want
    } //ends loop
//lksdjflskdfj
}//end


