
    // the global  variables declaration
var itemName = document.getElementById("productName");
var itemCategory = document.getElementById("productCategory");
var itemPrice = document.getElementById("productPrice");
var itemDescription = document.getElementById("productDescription");
var mainIndex = 0 ;
var tbody = document.getElementById("tbody");

var str = "";

// this make decision whether the localstorage is empty or not
if(localStorage.getItem("item") == null){
    var productslist = [];
    alert("YOUR CRUD SYSTEM IS EMPTY " );
} else {
    var productslist = JSON.parse(localStorage.getItem("item"));
    display_at_reload();
}

                                //    HERE IS THE FUNCTIONS OF THE CODE 

                                

// the adding products function
function addProduct(){
   
    var singleproduct = {
          productName : itemName.value,
          productCategory : itemCategory.value,
          productPrice : itemPrice.value,
          productDescription : itemDescription.value,
    }
    if(document.getElementById('change').innerHTML == 'add product' ){
        productslist.push(singleproduct);
        displaydata();
    }else{
        productslist.splice(mainIndex,1,singleproduct);
        document.getElementById('change').innerHTML = 'add product';
        display_at_reload();
        clr();
    }
    localStorage.setItem("item", JSON.stringify(productslist));
    
    // this is from the array that called productslist
    console.log(productslist);
    // this is from the localStorage: that we converted from strings to object
    console.log(localStorage.getItem("item"));
}

                              //   this is the functions that clears the form
function clr(){
    itemName.value= '' ;
    itemCategory.value= '' ;
    itemPrice.value= '' ;
    itemDescription.value= '' ;
}


    //   the retrieving function
function displaydata(){
    
    for(var i = productslist.length-1 ; i < productslist.length ; i++){   
    str += `<tr>
             <th>${i}</th>
          <td>${productslist[i].productName}</td>
          <td>${productslist[i].productCategory}</td>
          <td>${productslist[i].productPrice}</td>
          <td>${productslist[i].productDescription}</td>
          <td><button class="btn btn-outline-danger" onclick="dlt(${i})" >delete</button></td>
           <td><button class="btn btn-outline-success "  onclick="update(${i})">update</button></td>
         </tr>`;
    }
    console.log(str);
    tbody.innerHTML = str;

}
// this function works with the localstorage to retrieve the stored data in the browser
function display_at_reload(){
    str = "";
    for(var i = 0 ; i < productslist.length ; i++){        
        str += `<tr>
                 <th>${i}</th>
              <td>${productslist[i].productName}</td>
              <td>${productslist[i].productCategory}</td>
              <td>${productslist[i].productPrice}</td>
              <td>${productslist[i].productDescription}</td>
              <td><button class="btn btn-outline-danger " onclick="dlt(${i})">delete</button></td>
               <td><button class="btn btn-outline-success " onclick="update(${i})">update</button></td>
             </tr>`;
        }
        tbody.innerHTML = str;
}

               // SEARCHING FOR PRODUCTS BY THEIR NAMES 

function searchproduct(){
    var hey = "";
    var searchinput = document.getElementById("ftr");
    tbody.innerHTML = ``;
    for(var i = 0 ; i<productslist.length ; i++){
   if( productslist[i].productName.includes(searchinput.value) == true ){
       
        hey += `
        <tr>
             <th>${i}</th>
          <td>${productslist[i].productName}</td>
          <td>${productslist[i].productCategory}</td>
          <td>${productslist[i].productPrice}</td>
          <td>${productslist[i].productDescription}</td>
          <td><button class="btn btn-outline-danger" onclick="dlt(${i})">delete</button></td>
           <td><button class="btn btn-outline-success" onclick="update(${i})"  >update</button></td>
         </tr>`;
         tbody.innerHTML = hey;
        }        
    }     
}
        //   the delete function
function dlt(i){
   
 productslist.splice(i,1);     
  console.log(productslist);
  localStorage.setItem("item" , JSON.stringify(productslist));
  display_at_reload();
}
            //    the update of yesterday
function update(i){
    mainIndex = i;
    itemName.value = productslist[i].productName;
    itemCategory.value = productslist[i].productCategory;
    itemPrice.value = productslist[i].productPrice;
    itemDescription.value = productslist[i].productDescription;
    document.getElementById('change').innerHTML = 'update product';
    console.log(productslist);
    // localStorage.setItem("item" , JSON.stringify(productslist));
    
  }


/************trying the update ************************************************************8 */

// 
// productslist[0].productCategory.innerHTML="";
// productslist[0].productPrice.innerHTML="";
// productslist[0].productDescription.innerHTML="";


// productslist 
// 0: {productName: "sony ericson", productCategory: "mobile", productPrice: "2000", productDescription: "good"}
// 1: {productName: "samsung ", productCategory: "mobile", productPrice: "3000", productDescription: "good"}
// 2: {productName: "LG", productCategory: "TV", productPrice: "5000", productDescription: "good"}
// 3: {productName: "playstation", productCategory: "games", productPrice: "2000", productDescription: "poor"}

// function update(){
//     for(var i = 0 ; i<productslist.length ; i++ ){
//         if(productslist[i].productName == "LG"){
//             itemName.innerHTML= productslist[i].productName ;
//             itemCategory.innerHTML= productslist[i].productCategory ;
//             itemPrice.innerHTML= productslist[i].productPrice ;
//             itemDescription.innerHTML= productslist[i].productDescription ;
//         }
//     }
// }

