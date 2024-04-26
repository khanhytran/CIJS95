// Câu 1
const square = (number) => number ** 2; //tương đương với return
//console.log(square(4))
// Câu 2
const checkIncludeLetter = (pharse, letter) => {
    // Ở trong string, js cung cấp một phương thức: include() -> để kiểm tra có chứa cái gì đó hay không
    return pharse.includes(letter);
}
// Nghiệp vụ nâng cao: tìm kiếm không phân biệt hoa/thường
// 1. chuyển tất cả về lower
// 2. chuyển tất cả về upper
// return pharse.toLowerCase().includes(letter.toLowerCase());
// console.log(checkIncludeLetter('hello world', 'world'))

// Câu 3
const addPrefix = (list, prefix) => {
    for (let i = 0; i < list.lenght; i++) {
        list[i] = `${prefix}: ${list[i]}`
    }
    console.log(list)
}
// addPrefix([1,2,3], 'number')

// Câu 4
const doubleList = (list) => {
    const result = list.map((value, index) => {
        return value * 2;
    });
    console.log(result)
}
// doubleList([1,2,3,4])
// cách khác: 
/** const doubleArr = (arr) => {
        const result = arr.map(x => x*2);
        console.log(result);
    }
    doubleArr([1, 2, 3, 4]); **/ 

/* Câu 6:
Filter tương tự như map, kết quả trả lại là một mảng các phần tử thỏa điều kiện*/
 
const fnFilterNumber = (list) => {
    const result = list.filter((value) => {
        return value %2 !== 0
    });
    console.log(result)
}
// fnFilterNumber([1,2,3,4,5,6,7])

// Câu 6
const employees = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];
// Đối với bài toán tính tổng các số dựa vào lưu trữ và sử dụng kết quả trước đó để cộng giá trị tiếp theo.
const sumWD = (employees) => {
    let sum = 0
    for (let i = 0; i< employees.lenght; i++){
        const person = employees[i];
        sum += person['workingDays'];
    }
    console.log(sum)
}
sumWD(employees)