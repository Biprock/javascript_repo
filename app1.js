//console.log("MERGED CLASS 2 ES6");

//let ranks = [1, 2, 3, 4];

//console.log(
//  ranks.map((e, index) => {
//    return e * 100;
//  })
//);

//console.log(
 // ranks.forEach((e, index) => {
 //   return e * 100;
 // })
//);

//let mapnewarr = ranks.map((e, index) => {
//    console.log(e)
//    console.log(index)
//    if(e%2===0)
//        return e
//})
//console.log(mapnewarr);

//let filternewarr = ranks.filter((e, index) => {
//    console.log(e)
  //  console.log(index)
//    if(e%2===0)
    //    return e
//})
//console.log(filternewarr);



let concert = false;

let attendConcert = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (concert) {
            resolve("BOB ATTENDED THE CONCERT");
        }
        else {
            reject("BOB FAILED TO ATTEND THE CONCERT");
        }
    },2000 );
});

//console.log(attendConcert)
//console.log(attendConcert)


attendConcert.then((data)=>console.log(data));


attendConcert.catch((error)=>console.log(error));