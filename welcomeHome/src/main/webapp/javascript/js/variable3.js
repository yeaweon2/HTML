const fields = { 
    name : '학생이름',
    kor : '국어',
    math : '수학',
    eng : '영어'
}
const students = [];
// 학생이름name, 국어kor, 수학math, 영어eng => student1 오브젝트 

const student1 = { name : '안의정', kor : 90, math : 60 , eng : 50 };
const student2 = { name : '오혜지', kor : 75, math : 78 , eng : 80 };
const student3 = { name : '권가영', kor : 69, math : 47 , eng : 70 };

students.push(student1);
students.push(student2);
students.push(student3);

document.write('<table>');
document.write('<thead><tr>');
    document.write('<tbody><tr>');
for( field in fields ){
    document.write('<th>'+ fields[field] +'</th>');
}
// document.write('</tr></thead>');
document.write('</tr>');

for( let i = 0 ; students.length ; i++){
    document.write('<tr>');
    for( col in student1 ){
        document.write('<td>' + students[i][col]+ '</td>');
    }
    document.write('</tr>');
}

document.write('</tbody>');
document.write('</table>');