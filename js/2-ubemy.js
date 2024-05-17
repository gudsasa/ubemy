// // *
// // **
// // ***
// // ****
// // *****
// // ******

// let result = "";
// const length = 7;
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log("First levrl: ${i}");
//     for (let j = 0; j < 3; j++) {
//         console.log("Second level: ${j}");
//         for (let k = 0; k < 5; k++) {
//             if (k === 3) continue first;
//             console.log("Thirt level: ${k}");
//         }
//     }

// function firstTask() {
//     for (let i = 5; i < 11; i++) {
//         console.log(i);
//     }
// }
// firstTask();

// function secondTask() {
//     for (let i = 20; i > 12; i--) {
//         if (i === 12) break;
//             console.log(i);
//     }
// }
// secondTask();

// function thirdTask() {
//     // Пишем решение вот тут
//     for (let i = 2; i < 11; i++){
//         console.log(i);
//     }
// }
// thirdTask();

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask();

// function fourthTask() {
//     let i = 2;

//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }

// fourthTask();

// // Место для первой задачи
// function firstTask() {
//     // Пишем решение вот тут
//     for (let i = 5; i < 11; i++) {
//         console.log(i);
//     }
// }
// firstTask();
// // Место для второй задачи
// function secondTask() {
//     // Пишем решение вот тут
//     for (let i = 20; i > 12; i--) {
//         if (i === 13) break;
//         console.log(i);
//     }
// }
// secondTask();
// // Место для третьей задачи
// function thirdTask() {
//     // Пишем решение вот тут
//     for (let i = 2; i < 11; i++) {
//         console.log(i);
//     }
// }
// thirdTask();

// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// function fourthTask() {
//     // Пишем решение вот тут
//     let i = 2;

//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }

// function fourthTask() {
//     // Место для пятой задачи

//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     function fifthTask() {
//         const arrayOfNumbers = [];

//         for (let i = 5; i < 11; i++) {
//             arrayOfNumbers[i - 5] = i;
//         }

//         console.log(arrayOfNumbers);
//         fifthTask();

//         // Не трогаем
//         return arrayOfNumbers;
//     }
// }

// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
//     return result;
// }

// firstTask();

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    // Пишем решение вот тут
    console.log(result);
    return result;
    // Не трогаем
    return result;
}
firstTask();