let toastBox = document.getElementById('toast');
let selection = document.querySelectorAll('.selection');

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errrorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

selection.forEach(element =>{
    element.addEventListener('click', e=>{

const node = document.createElement("div");
node.classList.add('toastElement');

if(element.classList.contains('success')){
    node.innerHTML = successMsg;
} else if(element.classList.contains('error')){
    node.innerHTML = errrorMsg;
} else{
    node.innerHTML = invalidMsg;
}
toastBox.appendChild(node);

setTimeout(()=>{
    node.remove();
}, 3000);

    })
})