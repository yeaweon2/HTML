makeTable();

function makeTable() {
    console.log("실행!");
    let tableTag = document.getElementById('list');
    let tHeadTag = document.createElement('tHead');
    let tbodyTag = document.createElement('tbody');
    tbodyTag.setAttribute('id', 'tbdy');
    tbodyTag.setAttribute('class', 'tbdy');

    let trHead = document.createElement('tr');
    trHead.setAttribute('class', 'thHead');
    let thCol = ['번 호', '제 목', '이 름', '날 짜','선 택'];
    for (col in thCol) {
        let thHead = document.createElement('th');
        let th = document.createTextNode(thCol[col]);
        thHead.appendChild(th);
        trHead.appendChild(thHead);
    }
    tHeadTag.appendChild(trHead);  
    tableTag.appendChild(tHeadTag);
    tableTag.appendChild(tbodyTag);

    let trs = document.querySelectorAll("#list > tbody > tr");
    if (trs.length == 0) {
        document.frm.boNo.value = trs.length + 1;
    }

    var date = new Date();
    var currentDate = date.toISOString().substring(0, 10);
    document.getElementById('boRegDate').value = currentDate;

    let updateBtn = document.querySelector("#inputForm>.frm>#writerInfo>tbody>#btnRow>.infoBtn>input[type='button']");
    updateBtn.addEventListener('click', updateContent);

    let delBtn = document.getElementById('delBtn');
    delBtn.addEventListener('click', delList);
}

function addList(e) {
    e.preventDefault();
    let boNo = document.frm.boNo.value;
    let boTitle = document.frm.boTitle.value;
    let boWriter = document.frm.boWriter.value;
    let boRegDate = document.frm.boRegDate.value;

    if (document.frm.boNo.value == "") {
        alert("번호를 입력하세요.");
        document.frm.boNo.focus();
        return;
    }

    if (document.frm.boTitle.value == "") {
        alert("제목을 입력하세요.");
        document.frm.boTitle.focus();
        return;
    }

    if (document.frm.boWriter.value == "") {
        alert("이름을 입력하세요.");
        document.frm.boWriter.focus();
        return;
    }

    if (document.frm.boRegDate.value == "") {
        alert("날짜를 입력하세요.");
        document.frm.boRegDate.focus();
        return;
    }
    let tbodyTag = document.getElementById('tbdy');


    //let altRow = document.querySelectorAll("#list>tbody>tr:not(.thHead)");

    let list = document.querySelector("#list>tbody");
    let childCnt = list.children.length+1;


    if (childCnt % 2 == 0) {
        let makeTr = createTrTag(boNo, boTitle, boWriter, boRegDate);
        makeTr.setAttribute('class', 'altRow');
        tbodyTag.appendChild(makeTr);
        makeTr.addEventListener('mouseout', mout);
    } else {
        tbodyTag.appendChild(createTrTag(boNo, boTitle, boWriter, boRegDate));
    }

    
    document.frm.boNo.value = childCnt+1;
    var date = new Date();
    var currentDate = date.toISOString().substring(0, 10);
    document.getElementById('boRegDate').value = currentDate;

}

function createTrTag(num, title, writer, regDate) {
    let trTag = document.createElement('tr');
    trTag.setAttribute('id', num);
    
    for (let i = 0; i < arguments.length; i++) {

        let tdTag = document.createElement('td');
        let txt = document.createTextNode(arguments[i]);

        tdTag.setAttribute('class', 'td' + (i + 1));
        tdTag.appendChild(txt);
        trTag.appendChild(tdTag);
    }

    let checkBoxTdTag = document.createElement('td');
    let checkBoxInputTag = document.createElement('input');
    checkBoxInputTag.setAttribute('type', 'checkBox');
    checkBoxTdTag.setAttribute('id', 'checkBoxTd');
    checkBoxTdTag.appendChild(checkBoxInputTag);
    trTag.appendChild(checkBoxTdTag);

    trTag.addEventListener('mouseover', mover);
    trTag.addEventListener('mouseout', mout);
    trTag.addEventListener('click', rowClck);
    return trTag;
}

// let trs = document.querySelectorAll("#list > tbody > tr");
// for( let i = 0 ; i < trs.length ; i++){
//     trs[i].addEventListener('click','');
// }

function resetBtnClick() {

    let list = document.querySelector("#list>tbody");
    let childCnt = list.children.length;
    document.frm.boNo.value = childCnt + 1;

    var date = new Date();
    var currentDate = date.toISOString().substring(0, 10);
    document.getElementById('boRegDate').value = currentDate;
}

function mover() {
    this.style.backgroundColor = 'yellow';
}

function mout() {
    this.style.backgroundColor = '';
}

function rowClck() {
    // form 화면의 각 요소의 값 <= this.children[0].innerHTML
    document.frm.boNo.value = this.children[0].innerHTML;
    document.frm.boTitle.value = this.children[1].innerHTML;
    document.frm.boWriter.value = this.children[2].innerHTML;
    document.frm.boRegDate.value = this.children[3].innerHTML;

    //document.getElementById('boNo').value = this.children[0].innerHTML;
    //document.getElementById('boTitle').value = this.children[1].innerHTML;
    //document.getElementById('boWriter').value = this.children[2].innerHTML;
    //document.getElementById('boRegDate').value = this.children[3].innerHTML;
}

// 수정버튼을 클릭하면 실행될 eventHandler(코드)        
function updateContent() {
    // 폼태그 안에 사용자가 수정한 값을 테이블에서 찾아와서 (tr=id) 하위요소 값 변경.
    let numInput = document.getElementById('boNo');
    let titInput = document.getElementById('boTitle');
    let wriInput = document.getElementById('boWriter');
    let regInput = document.getElementById('boRegDate');

    console.log(numInput.value); // 수정하고자 하는 게시판의 글번호.
    let searchId = numInput.value;
    let findTr = document.getElementById(searchId);
    
    findTr.children[1].innerHTML = titInput.value;
    findTr.children[2].innerHTML = wriInput.value;
    findTr.children[3].innerHTML = regInput.value;
}

function delList(){
    // 체크된 요소 선택
    let checkedBoxs = document.querySelectorAll("#checkBoxTd>input[type='checkBox']:checked");
    console.log(checkedBoxs);
    for(let i = 0; i < checkedBoxs.length ; i++){
        checkedBoxs[i].parentNode.parentNode.remove();
    }
    altRowSelect();
    let len = rowLength();
    let boNo = document.getElementById('boNo');
    boNo.value = len+1;
}

function rowLength(){
    let altRow = document.querySelectorAll("#list>tbody>tr");
    return altRow.length;
}

function altRowSelect(){    
    let altRow = document.querySelectorAll("#list>tbody>tr");
    for(let i = 0; i < altRow.length ; i++){
        if( i%2 == 1 ){
            altRow[i].setAttribute('class', 'altRow');
        }else{
            altRow[i].setAttribute('class', '');
            //altRow[i].className = '';
        }
    }
}

