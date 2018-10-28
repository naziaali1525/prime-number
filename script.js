// function check() {
//     let numb = parseInt(document.querySelector("input").value);

//     let i;
//     for (i = 2; i < numb; i++) {
//         if (numb % i === 0) {
//             break;
//         }

//     }
//     if (i === numb) {
//         alert("prime");

//     } else {
//         alert("Not prime");
//     }
// }

function check(numb) {
    let i;
    for (i = 2; i < 100; i++) {
        if ( numb % i === 0) {
       break;
          
        }
    }
    if (i === numb) {
      return true;

    } else {
       return false;
    }
}
for (let i =2 ; i <= 100; i++){
    if(check(i)){
      console.log(i);
    }
}




