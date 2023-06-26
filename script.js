//  heart  button

let likes=document.getElementsByClassName('like')
console.log(likes)
for (var i = 0;i<likes.length ;i++){
    const like = likes[i]
    console.log(like)



like.addEventListener('click',function(){   

        if ( like.style.color=="black"){
                like.style.color="red"
    }
        else {
            like.style.color="black"
            }

} )
}


// “+” buttons
var pluss=document.getElementsByClassName('plus-btn')
console.log(pluss)
for ( var i=0;i < pluss.length;i++)
{
    const inc = pluss[i] 
    inc.addEventListener("click", function () {
        inc.previousElementSibling.value++
        total()
        })
}



// “-” buttons

var  minuss=document.getElementsByClassName("minus-btn")
console.log(minuss)

for ( let i=0; i< minuss.length; i++)
{
    const  minus = minuss[i] 
    minus.addEventListener("click", function () {
        if ( minus.nextElementSibling.value >1){
        
        minus.nextElementSibling.value--
        total()
    }
        })
}

//Delete items from the cart

var del = document.getElementsByClassName("delete")
console.log(del)
for ( let i=0; i< del.length; i++)
{
    const deletee = del[i] 
    deletee.addEventListener("click",function(){
        console.log(this);
        this.parentElement.remove()
        total()

}
)
}

const  tot = document.getElementById("finalPrice")
const items = document.getElementsByClassName('Item')

function total() {
var some=0
for (let i = 0; i <items.length; i++) {
    const item= items[i] 
        some=some + item.querySelector('.Quant').value * item.querySelector('.price').innerText
}
return (console.log(tot.value = some))
}
