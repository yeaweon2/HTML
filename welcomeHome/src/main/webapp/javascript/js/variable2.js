const object = new Object();
object.name = 'Kim';
object.age = 33;
object.hobby = 'cook';

const obj = {
    name: 'Hong', // key : value
    age: 20,
    hobby: ['music', 'dance', 'walking']
};

console.log('이름 : ' + obj.name);
console.log('나이 : ' + obj['age']);
console.log('취미 : ' + obj.hobby[0]);
console.log('취미 : ' + obj['hobby'][1]);

let hob = 'hobby';
console.log('취미 : ' + obj[hob][2]);

const mem1 = {
    id: 'user1',
    name: '홍길동',
    password: '1234'
};
const mem2 = {
    id: 'user2',
    name: '박민수',
    password: '1212'
};
const mem3 = {
    id: 'user3',
    name: '김철수',
    password: '2345'
};

const members = [mem1, mem2, mem3];

for (field in mem3) {
    console.log(field + ' / ' + mem3[field]);
}

for (let i = 0; i < members.length; i++) {
    console.log('----------------------------');
    // console.log('아이디 : ' + members[i].id);
    // console.log('이름 : ' + members[i]['name']);
    // console.log('패스워드 : ' + members[i].password);
    for (field in members[i]) {
        console.log(field + ' : ' + members[i][field]);
    }
}