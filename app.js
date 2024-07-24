// function mostrarSenha(){
//     let input = document.querySelector("#senha");
//     let btn = document.querySelector("#btn-senha");

//     if(input.type === "password"){
//         input.setAttribute("type", "text");
//         btn.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
//     }else{
//         input.setAttribute("type", "password");
//         btn.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
//     }
// }

let input = document.querySelector("#senha");
let icon = document.querySelector("#btn-senha");

icon.addEventListener('click', () => {
    if(input.type === "password"){
        input.setAttribute("type", "text");
        icon.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    }else{
        input.setAttribute("type", "password");
        icon.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
});