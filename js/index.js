let showdata = document.getElementById("showData")
let btn ;


function open(){
    $(".openNav").animate({left : 0},600)

    $(".openANDclose").addClass("fa-x")
    $(".openANDclose").removeClass("fa-bars")

    $(".allLinks li").eq(0).animate({top : 0}, 400)
    $(".allLinks li").eq(1).animate({top : 0}, 500)
    $(".allLinks li").eq(2).animate({top : 0}, 600)
    $(".allLinks li").eq(3).animate({top : 0}, 700)
    $(".allLinks li").eq(4).animate({top : 0}, 800)

}
 function close() {
    let widthNav = $(".openNav .allTab").outerWidth()
    $(".openNav").animate({left : -widthNav},600)
 
     $(".openANDclose").removeClass("fa-x")
     $(".openANDclose").addClass("fa-bars")
 
     $(".allLinks li").eq(4).animate({top : 400}, 600)
     $(".allLinks li").eq(3).animate({top : 400}, 700)
     $(".allLinks li").eq(2).animate({top : 400}, 800)
     $(".allLinks li").eq(1).animate({top : 400}, 900)
     $(".allLinks li").eq(0).animate({top : 400}, 1000)
 }

 close() 

  $(".openNav i.openANDclose").click(function(){

    if($(".openNav").css("left") == "0px"){
        close()
   }

   else{
    open()
   }

})






async function showProduct(index){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${index}`)
    respose = await data.json()
    // console.log(respose.meals)
    displayProduct(respose.meals)
   
    
}



function displayProduct (param){
    let cartonaa = "";

    for(let i = 0 ; i < param.length; i++){

        cartonaa += `<div class="col-md-4">

        <div onclick="showAllDatiels('${param[i].idMeal}') " class="yummyFood position-relative overflow-hidden toClick">
            <img class="w-100 " src="${param[i].strMealThumb}" alt="">

            <div class=" layerFood position-absolute d-flex align-items-center text-black">
                <h3>${param[i].strMeal}</h3>
            </div>

        </div>
    </div>
        
        `
    }

    showdata.innerHTML = cartonaa 
}




// ////////////////////////////////////////////////////////////   

async function showCategory(){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    respose = await data.json()

    // console.log(respose.categories)
    displayCategory(respose.categories)
    close() 
}

function displayCategory (param){
    let cartonaa = "";

    for(let i = 0 ; i < param.length; i++){

        cartonaa += `<div class="col-md-4">

        <div onclick="showFliterCategory('${param[i].strCategory}') " class="yummyFood position-relative overflow-hidden toClick">
            <img class="w-100 " src="${param[i].strCategoryThumb}" alt="">

            <div class=" layerFood position-absolute text-center text-black">
                <h3>${param[i].strCategory}</h3>
                <p>${param[i].strCategoryDescription}</p>
            </div>

        </div>
    </div>
        
        `
    }

    showdata.innerHTML = cartonaa 
}



async function showFliterCategory(param){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param}`)
    respose = await data.json()

    //console.log(respose.meals)


    // *****another soluation call this function *****

    // displayProduct(respose.meals)

    displayFliterCategory(respose.meals)
}


function displayFliterCategory (index){
    let cartonaa = "";

    for(let i = 0 ; i < index.length; i++){

        cartonaa += `<div class="col-md-4">

        <div onclick="showAllDatiels('${index[i].idMeal}')" class="yummyFood position-relative overflow-hidden toClick">
            <img class="w-100 " src="${index[i].strMealThumb}" alt="">

            <div class=" layerFood position-absolute d-flex align-items-center text-black">
                <h3>${index[i].strMeal}</h3>
            </div>

        </div>
    </div>
        
        `
    }

    showdata.innerHTML = cartonaa 
}

// ////////////////////////////////jjj///////////////////////





async function showArea(){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    respose = await data.json()

    console.log(respose.meals)
    displayArea(respose.meals)
    close() 
    
}

function displayArea (param){
    let cartonaa = "";

    for(let i = 0 ; i < param.length; i++){

        cartonaa += `<div class="col-md-2 text-center">

        <div onclick="showFLiterArea('${param[i].strArea}') " class="yummyFood text-center toClick">
           
                 <i class="fa-solid fa-house fa-3x text-center"></i>
           
                <h3>${param[i].strArea}</h3>
            
            

        </div>
    </div>
        
        `
    }

    showdata.innerHTML = cartonaa 
}


async function showFLiterArea(param){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${param}`)
    respose = await data.json();

     console.log(respose);
    displayFliteArea(respose.meals);
    
}


function displayFliteArea (param){
    let cartonaa = "";

    for(let i = 0 ; i < param.length; i++){

        cartonaa += `<div class="col-md-4">

        <div onclick="showAllDatiels('${param[i].idMeal}')" class="yummyFood  position-relative overflow-hidden toClick">
            <img class="w-100 " src="${param[i].strMealThumb}" alt="">

            <div class=" layerFood position-absolute d-flex align-items-center text-black">
                <h3>${param[i].strMeal}</h3>
            </div>

        </div>
    </div>
        
        `
    }

    showdata.innerHTML = cartonaa
}










// ////////////////////////////////////////////////////////////////

async function showIngradients(){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    respose = await data.json()

    console.log(respose.meals)
    displayIngradients(respose.meals.slice(0,22))
    close() 
    
}

function displayIngradients (param){
    let cartonaa = "";

    for(let i = 0 ; i < param.length; i++){

        cartonaa += `<div class="col-md-2 text-center">

            <div onclick="showFLiterIngradiants('${param[i].strIngredient}') " class="yummyFood text-center toClick">
           
              
                 <i class="fa-solid fa-bookmark fa-3x text-center"></i>
                <h3>${param[i].strIngredient}</h3>

                <p>${param[i].strDescription.slice(0,60)}</p>
            
            

        </div>
    </div>
        
        `
    }

    showdata.innerHTML = cartonaa 
}


async function showFLiterIngradiants(param){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${param}`)
    respose = await data.json()

    // console.log(respose.meals)
    displayFliteIngradiants(respose.meals)
    
}


function displayFliteIngradiants (param){
    let cartonaa = "";

    for(let i = 0 ; i < param.length; i++){

        cartonaa += `<div class="col-md-4">

        <div onclick="showAllDatiels('${param[i].idMeal}')" class="yummyFood position-relative overflow-hidden toClick">
            <img class="w-100 " src="${param[i].strMealThumb}" alt="">

            <div class=" layerFood position-absolute d-flex align-items-center text-black">
                <h3>${param[i].strMeal}</h3>
            </div>

        </div>
    </div>
        
        `
    }

    showdata.innerHTML = cartonaa
}


// ////////////////////////////////////////////////////////////

async function showAllDatiels(param){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param}`);
    respose = await data.json()

    // console.log(respose.meals)
    
    displayAllDatiels(respose.meals);
    close() 
}



function displayAllDatiels (param){

    let cartonaa = `
    <div class="col-md-4 m-2 p-3">
    <img class="w-100" src="${param[0].strMealThumb}" alt="">
    <h2>${param[0].strMeal}</h2>
    </div>

   <div class="col-md-6 m-3 p-3 ">
    <h2>Instructions</h2>
    <p>${param[0].strInstructions}</p>
    <h4><span class="fw-bold">Category : </span>${param[0].strCategory}</h4>
    <h4><span class="fw-bold"> Area : </span>${param[0].strArea}</h4>

    <a href="${param[0].strYoutube}"><button class="btn btn-danger">Youtube</button></a>
    <a href="${param[0].strSource}"><button class="btn btn-warning">Source</button></a>
    </div>
    
    `
    showdata.innerHTML = cartonaa 
}


// //////////////////////////////////////////////////////////////





function ContactUs (){
    close()
    showdata.innerHTML = `
    <div class="contact">
            <div class="container text-center p-5">
                <div class="row p-3 g-4 d " >
                    <div class="col-md-6 ">
                        <input  onkeyup="AllInputs()" id="namevaliad" type="text" class="form-control" placeholder="Enter Your Name">
                        <div class="alert alert-danger d-none w-100  p-2 m-2" id="alertname">
                            Please enter valid name

                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <input  onkeyup="AllInputs()" id="emailvaliad" type="email" class="form-control" placeholder="Enter Your Email">
                        <div class="alert alert-danger d-none w-100  p-2 m-2" id="alertemail">
                            Please enter valid email

                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <input  onkeyup="AllInputs()" id="phonevaliad" type="number" class="form-control" placeholder="Enter Your phone">
                        <div class="alert alert-danger d-none w-100  p-2 m-2" id="alertphone">
                            Please enter valid phone

                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <input  onkeyup="AllInputs()" id="agevaliad" type="number" class="form-control" placeholder="Enter Your age">
                        <div class="alert alert-danger d-none w-100  p-2 m-2" id="alertage">
                            Please enter valid age

                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <input  onkeyup="AllInputs()" id="passvaliad" type="password" class="form-control" placeholder="Enter Your password">
                        <div class="alert alert-danger d-none w-100  p-2 m-2 " id="alertpass">
                            Please enter valid password

                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <input  onkeyup="AllInputs()" id="repassvaliad" type="password" class="form-control" placeholder="Enter Your repassword">
                        <div class="alert alert-danger d-none w-100  p-2 m-2 " id="alertrepass">
                            Please enter valid name

                        </div>
                    </div>
                    
                </div>
                <button class="btn btn-danger  " disabled id="btn" >Submit</button>
            </div>
        </div>

    
    `
 btn = document.getElementById("btn")
}
 


function AllInputs(){
  
if(regexName()){
        document.getElementById("alertname").classList.replace("d-block" , "d-none")
}else
{
        document.getElementById("alertname").classList.replace( "d-none" ,"d-block")
}
        
if(regexEmail()){
    document.getElementById("alertemail").classList.replace("d-block" , "d-none")
}else
{
    document.getElementById("alertemail").classList.replace( "d-none" ,"d-block")
}

if(regexPhone()){
    document.getElementById("alertphone").classList.replace("d-block" , "d-none")
}else
{
    document.getElementById("alertphone").classList.replace( "d-none" ,"d-block")
}

if(regexAge()){
    document.getElementById("alertage").classList.replace("d-block" , "d-none")
}else
{
    document.getElementById("alertage").classList.replace( "d-none" ,"d-block")
}

if(regexPassword()){
    document.getElementById("alertpass").classList.replace("d-block" , "d-none")
}else
{
    document.getElementById("alertpass").classList.replace( "d-none" ,"d-block")
}

if(regexRePassword()){
    document.getElementById("alertrepass").classList.replace("d-block" , "d-none")
}else
{
    document.getElementById("alertrepass").classList.replace( "d-none" ,"d-block")
}



if ( regexName() && regexEmail() && regexPhone() &&  regexAge() && regexPassword() && regexRePassword()){

btn.removeAttribute("disabled")
}else{
    btn.setAttribute("disabled" , true)
}


}



function regexName(){
   return /^[a-zA-Z ]+$/.test(document.getElementById("namevaliad").value)
}

function regexEmail(){
return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailvaliad").value)
}

function regexPhone(){
 return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phonevaliad").value)
}

function regexAge(){

return /^\S[0-9]{0,3}$/.test(document.getElementById("agevaliad").value)

}

function regexPassword(){

return /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(document.getElementById("passvaliad").value)

}

function regexRePassword(){
    return document.getElementById("repassvaliad").value == document.getElementById("passvaliad").value

}



// ///////////////////////////////////////////////////////////////////////////////////

let contSearch = document.getElementById("contSearch")



async function searchName(index){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${index}`)
    respose = await data.json()

  
   respose.meals ?  displayProduct(respose.meals) :  displayProduct([])

   
}

async function searchLetter(index){
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${index}`)
    respose = await data.json()

  
   respose.meals ?  displayProduct(respose.meals) :  displayProduct([])
   
}



function serch(){
    close()
    contSearch.innerHTML = ` <div class="row p-5">
    <div class="col-md-6" id="showFood">
        <input onkeyup="searchName(this.value)" type="text" class="form-control" placeholder="Search By Name">
    </div>
    <div class="col-md-6">
        <input onkeyup="searchLetter(this.value)" type="text" class="form-control" placeholder="Search By first Letter">
    </div>
  </div>
    
    `

    showdata.innerHTML = " "
}


// ////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    showProduct("").then(function() {
        $(".loading-screen").fadeOut(500)
        $("body").css("overflow", "visible")

    })
})