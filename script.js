// async function sum(){
//     let store=await fetch("https://dummyjson.com/products");
//     let data=await store.json();
//      console.log(data.products);

//     let cards=document.querySelectorAll('.card');
//     cards.forEach(function(item,i){
//         item.getElementsByTagName('img')[0].src=data.products[i].images[0];
        
//     })
// }
// sum()
subM=document.querySelector('.filter');
       let dataValue=document.querySelectorAll('.card');
       dataValue.forEach(function(item){
        subM.addEventListener('click', function(){
            let m=document.getElementById("min").value;
            let n=document.getElementById("max").value;
            mValue=parseInt(m);
            nValue=parseInt(n);
             let dataItem=item.getAttribute("value");
             if(dataItem >= mValue && dataItem <= nValue){
                item.style.display="block";
             }
             else{
                item.style.display="none";
             }
        })
        
       })