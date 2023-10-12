// for work with time use this:
// var a = new Date()

// console.log(a.getFullYear());
// console.log(a.getMonth() + 1);
// console.log(a.getDate());
// console.log(a.getHours());
// console.log(a.getMinutes());
// console.log("Time is: " + a.getHours() + ":" + a.getMinutes());


// for set your time use this:
// a.setHours(13), a.setMinutes(13)
// console.log("My set time is: " +
//     a.getHours() + ":" +
//         a.getMinutes())



// for example for a different work with arrays:
// var b = [4,6,5,4,3,2,-1];

// console.log(b.length);
// console.log(b.join(", || "));
// console.log(b.sort());
// console.log(b.sort().reverse());
// console.log(b.sort().join(", |"));
// console.log(b.sort().join(", |").split(" "));



// this example for how make classes & objects:
// class xbox_console {
//     constructor(color, size, CPU, GPU, memory) {
//         this.color = color
//         this.size = size
//         this.CPU = CPU
//         this.GPU = GPU
//         this.memory = memory
//     }
//     info360() {
//         console.log("Xbox 360: " + xbox_360.CPU + ", " + xbox_360.GPU +
//             ", " + xbox_360.color); 
//     }
//     infoONE() {
//         console.log("Xbox ONE: " + xbox_one.CPU + ", " + xbox_one.GPU +
//             ", " + xbox_one.color);
//     }
// }
// // this is objects:
// let xbox_360 = new xbox_console("black", "300x240", "XCGPU", null,
//     "512mb GDDR3");

// let xbox_one = new xbox_console("white", "400x280", "8xCore 1.8_GHz",
//     "G/CPU_juguar", "8Gb GDDR5");  

// xbox_one.CPU = "8xCore_1.8_GHz";

// xbox_360.info360()
// xbox_one.infoONE()