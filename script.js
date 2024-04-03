async function sum(){
    let store=await fetch("https://dummyjson.com/products");
    let data=await store.json();
    // console.log(data.products);

    let cards=document.querySelectorAll('.card');
    cards.forEach(function(item,i){
        item.getElementsByTagName('img')[0].src=data.products[i].images[0];
    })
}
sum()