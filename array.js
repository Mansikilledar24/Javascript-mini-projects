// const arr1 = [0,1,2,3,4]// to create array
// // array can store multiple type of data in it
// const myHero = ["shaktiman" , "naagraj"]

// const myarr = new Array(0,1,2,3,4,2) 
// console.log(myarr[1])// to access the array element of a perticular index
// myarr.push(5)// to add the element at the end of the array
// myarr.push(6)
// console.log(myarr)//to print the complete array
//  myarr.pop()//to remove the last element of the array
//  console.log(myarr)
//  myarr.unshift(9)//to add element at 0th position
//  console.log(myarr)
//  myarr.shift()// to remove the oth element from the list
//  console.log(myarr)
//  console.log(myarr.includes(6))//to check where the element is present in the array or not and returns a bollean kind of output
//  console.log(myarr.indexOf(2))//to return the index of that element fron the array ,it returns the first occurance of the element of index , and if the element is not found it returns -1

//  const Nwearr = myarr.join()//adds all the element as a string
//  console.log(myarr)
//  console.log(Nwearr)
// console.log("A", myarr)// name the array
// //slice
// const mynew1 = myarr.slice(1,3)//returns a copy of elements with out including the last element , it does not make changes in the oraginal array
// console.log(mynew1)
// console.log("B", myarr)
// //splice
// const mynew2 = myarr.splice(1,3)//returns the array including the last element of the range , it make changes in the orignal array
// console.log(mynew2)
// console.log("C",myarr)

//push

// const marvel_Heros = ["thor" , "Ironman" ,"spiderman"]
// const dc_Heros = ["Superman" ,"Flash ", " Batman"]

// // marvel_Heros.push(dc_Heros)// adds the second array in the array form only
// // console.log(marvel_Heros)
// // console.log(marvel_Heros[3][1])//to access the array element which is added in array format

// // // push addes the elemen tin the existing array

// //concat
// // const all_Hero = marvel_Heros.concat(dc_Heros)// this methord adds the element as normal element in the array but it concats only in new array
// // console.log(all_Hero)

// const all_Hero = [...marvel_Heros,...dc_Heros]
//  console.log(all_Hero)

// // difference between concat and spread is that in concat only two array can be merged but in spread methord we can merge n no of the element together


// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array)

// console.log(Array.isArray("Mansi"))
// console.log(Array.from("Mansi"))
 let score1 =100
 let score2 =200
 let score3 = 300

 console.log(Array.of(score1,score2,score3))
 