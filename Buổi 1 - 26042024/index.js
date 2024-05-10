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
// const employees = [
//     { id: 1, name: "John", workingDays: 22 },
//     { id: 2, name: "Jane", workingDays: 20 },
//     { id: 3, name: "Mark", workingDays: 25 },
// ];
// // Đối với bài toán tính tổng các số dựa vào lưu trữ và sử dụng kết quả trước đó để cộng giá trị tiếp theo.
// const sumWD = (employees) => {
//     let sum = 0
//     for (let i = 0; i< employees.lenght; i++){
//         const person = employees[i];
//         sum += person['workingDays'];
//     }
//     console.log(sum)
// }
// // sumWD(employees)

// Câu 7
const employees7 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
];
// const findEmployeeWithMaxSalary = (employees) => {
//     if (employees.length === 0) return null; // Trường hợp danh sách nhân viên rỗng
//     let maxSalaryEmployee = employees[0]; // Giả sử nhân viên có mức lương cao nhất là nhân viên đầu tiên
//     for (let i = 1; i < employees.length; i++) {
//         if (employees[i].salary > maxSalaryEmployee.salary) {
//             maxSalaryEmployee = employees[i]; // Cập nhật nhân viên có mức lương cao nhất
//         }
//     }
//     const { id, name, salary } = maxSalaryEmployee; // Destructuring object
//     return { id, name, salary }; // Trả về dữ liệu bằng cách sử dụng object destructuring
// }

// const maxSalaryEmployee = findEmployeeWithMaxSalary(employees);
// // console.log(maxSalaryEmployee);
/*===== THẦY CHỮA =====*/
// Cách 1: Sử dụng logic tìm kiếm số lớn nhất (logic tương tự làm ở trên)
// Cách 2: dùng method find -> Trả về kết quả là một phần tử
// Cách 3: 
// B1: Lấy ra tất cả các mức lương -> cần lưu trữ vị trí
// B2: Tìm kiếm giá trị lớn nhất
// B3: Tìm kiếm vị trí của giá trị đó
// B4: Lấy tương ứng nhân viên với vị trí đó
// const findMaxSalary = (listEmployee) => {
//     const listSalary = listEmployee.map((item) => item.salary);
//         const MAX = Math.max(...listSalary);
//         const idxOfMax = listSalary.findIndex((item) => {
//             return item === MAX;
//         }); // phương thức trả về vị trí của phần tử đầu tiên thoả mãn điều kiện trả về, nếu k tìm được giá trị sẽ là -1
//         console.log(listEmployee[idxOfMax]);
// }
// findMaxSalary(employees7);

// Câu 8
const employees8 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];
// Logic: tìm max (số ngày đi làm - số ngày đi muộn)
// console.log("===BÀI 8===")
// const pr8 = (listEmployee) => {
//     // Tính toán công làm
//     const listWorked = listEmployee.map((item) => {
//         return item.workingDays - item.lateDays
//     });
//     const MAX_WORKED = Math.max(...listWorked);
//     console.log(MAX_WORKED);
//     // Filter, find
//     const employeeMaxWorked = listEmployee.find(item => (item.workingDays - item.lateDays) === MAX_WORKED)
//     console.log(employeeMaxWorked)
// }
// pr8(employees8)

// const findHardWorkEmployee = (employees) => {
//     let maxLateDayEmployee = employees[0]; // Giả sử nhân viên có giờ đi trễ thấp nhất là nhân viên đầu
//     for (let i = 1; i < employees.length; i++) {
//         if (employees[i].lateDays < maxLateDayEmployee.lateDays) {
//             maxLateDayEmployee = employees[i];
//         }
//     }
//     const { id, name, workingDays, lateDays} = maxLateDayEmployee
//     return {id, name, workingDays, lateDays}
// }

// const maxLateDayEmployee = findHardWorkEmployee(employees);
// console.log(maxLateDayEmployee)


// Câu 9
console.log("===BÀI 9===")
const employees9 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];
// const groupedEmployees = {};

// employees9.map(employee => {
//     const { name, ...rest } = employee;
//     if (!groupedEmployees[name]) {
//         groupedEmployees[name] = [rest];
//     } else {
//         groupedEmployees[name].push(rest);
//     }
// });

// console.log(groupedEmployees);
const newObj = {};
employees9.forEach((element) => {
    // mỗi một lần duyệt -> lấy được name hiện tại 
    if (!newObj[element.name]){
        newObj[element.name] = [];
        newObj[element.name].push(element);
    }else{
        newObj[element.name].push(element);
    }
    
});
console.log(newObj)

// Câu 10
console.log("===BÀI 10===")
const employees10 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];
// Hiệu suất = (workingDays - lateDays)/salary
// Theo định nghĩa đề bài: workingDays/salary
const pr10 = (employees10) => {
    // Tính toán công làm
    const listWorked = employees10.map((item) => {
        return item.workingDays/item.salary
    });
    const MAX_WORKED = Math.max(...listWorked);
    // Filter, find
    const employeeMaxWorked = employees10.find(item => (item.workingDays/item.salary) === MAX_WORKED)
    console.log(employeeMaxWorked)
}
pr10(employees10)

// Câu 11:
console.log("===BÀI 11===")
const employees11 = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];

const histogram = () => {
    // Tạo object để lưu trữ số lượng nhân viên trong mỗi mốc công làm việc
    const result = {};
    // Duyệt qua mảng nhân viên và cập nhật số lượng nhân viên trong mỗi mốc công làm việc
    employees11.forEach(employee => {
        const { workingDays } = employee;
        if (!result[workingDays]) {
            result[workingDays] = 1;
        } else {
            result[workingDays]++;
        }
    });
    // Hiển thị biểu đồ phân bố số công làm việc
    console.log(result);
}
histogram(employees11)



// Câu 12:
console.log("===BÀI 12===")
const employees12 = [
    { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
];

// Tạo danh sách mới với thông tin tổng hợp
const summaryList = (employees12) => {
    const result = employees12.map(employee => ({
        name: employee.name,
        email: employee.email,
        summary: {
            totalWorkingDays: employee.workingDays,
            totalLateDays: employee.lateDays
    }}))
    console.log(result)
    return result

}
summaryList(employees12)