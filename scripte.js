let inputs=document.getElementById("inp");
let text=document.querySelector(".text");


function add(){
    if(inputs.value==""){
        alert("please enter..");
    }else{
        let element=document.createElement("ul");
        element.innerHTML=`${inputs.value}<i class="ri-delete-bin-6-fill"></i>`;
        text.appendChild(element);
        inputs.value="";
        element.querySelector("i").addEventListener("click",remove);
        function remove(){
            element.remove();
            
        }

    }
}