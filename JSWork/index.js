// console.dir(document);
// const div=document.getElementsByClassName("parent");
// console.log(div);
// // div[0].innerText="Abes En";
// div[0].innerHTML="<H2 style=color:red>Abes En</H2>";
// const h1=document.createElement("h1");
// h1.innerText="Element is created by DOM";
// h1.style.backgroundColor="cyan";
// h1.style.color="red";
// div[0].appendChild(h1);
// console.log(h1);

// const img=document.createElement('img');
// img.src="cart.png";
// img.setAttribute("height","200px")
// div[0].appendChild(img);
// console.log(img);
// // div[0].removeChild(img);
// const btn=document.getElementById("btn");
// console.log(btn);

// const display=document.getElementById("disp");
// console.log(display);


// function getData(){
//     console.log("Calling getdata function");
//     display.innerHtml="<h3>Welcome</h3>";
// }

// btn.addEventListener("click",getData);




// const promise1=new Promise(
//     (resolve,reject)=>{
//         let a=Math.floor(Math.random()*200 +1);
//         console.log(a);
//         if(a<100){
//             console.log("Resolved");
//         }
//         else{
//             console.log("oops!!Rejected");
//         }
//     }

    
// );
// promise1.then((msg)=>{console.log(msg)})
// .catch(error=>{console.log(error)})
// .finally(msg=>{console.log("All resources have been closed")})

// const promise2=new Promise(
//     (resolve,reject)=>{
//         resolve({name:"Archna",branch:"CSE"})
//     }
// );
// promise2.then((data)=>{console.log(data)})
// .catch(error=>{console.log(error)});
const response=fetch("https://dummyjson.com/products");
response.then(data =>{
    console.log(data);
    data.json().then(res=>{
        console.log(res.products[0].title+res.products[0].id);
    })
})

//ise sahi karo ye galat hai
const div=document.createElement('h2');
h2.innerHtml=res.products[0].title;
parent.append(h2);


