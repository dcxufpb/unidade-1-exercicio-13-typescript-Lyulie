// let array = [1,2,3,4,5,6,7]

// let k = (
//     array : number[], 
//     num : number,
//     lo: number = 0, 
//     hi: number = array.length - 1
// ) => {
//     console.log(array[0].valueOf())
//     if (num == array[0].valueOf()){
//         return "noss"
//     }
    
//     let mid : number = Math.floor(hi/2)
    
//     if(num > array[mid]){
//         lo = mid + 1

//         k(array.slice(lo, hi + 1), num)
//     } else if (num < array[mid]){
//         hi = mid

//         k(array.slice(0, hi), num)
//     }

//     return -1
// }

// let x = k(array, 5)
// console.log(x)

// let k = (arr : number[] = [1,2,3,4,5,6]) => {
//     if(arr.length == 0) return;
//     console.log(arr[arr.length-1])
//     k(arr.slice(0, arr.length - 1))
// }

// k(undefined)

// const DATA_HORA = "11/11/11 11:11:11V" 

// const numero_para_um = (text : string) => {
//     let output = ""
//     for(let k of text){
//         if (`${+ k}`.length === 3 || k === " ") output += k
//         else output += "1"
//     }
//     return output
// }

// console.log(numero_para_um(DATA_HORA))
