 // ajax : Asynchronous Javascript And XML
 // String : 102Hong8020 103Hong8020 104Hong8020
 // xml : <id>102</id><name>Hong</name><score>80</score>
 document.addEventListener('DOMContentLoaded', function () {

     ajax('dataset2.xml', 1);

     let btns = document.querySelectorAll('.pagination > button');

     for (let i = 0; i < btns.length; i++) {
         btns[i].addEventListener('click', function () {
             // 클릭이벤트 시 button의 클래스를 초기화.
             for (let i = 0; i < btns.length; i++) {
                 btns[i].className = '';
             }
             ajax('dataset2.xml', this.innerHTML);
             this.className = 'active';
         });
     }
 });

 function ajax(url, page) {
     let xhtp = new XMLHttpRequest(); // new Object();
     xhtp.open('get', url);
     xhtp.send();
     xhtp.onreadystatechange = function () {
         if (xhtp.readyState == 4 && xhtp.status == 200) {
             //console.log(xhtp.response);
             //console.log(JSON.parse(xhtp.response));
             //console.log(xhtp.responseXML);
             //document.getElementById('show').innerHTML = makePage(xhtp.responseXML);
             makePage(xhtp.responseXML, page);
         }
     }
 }

 function makePage(data, page) {
     // 기존자료삭제
     let divShow = document.querySelector('#show');
     let cnt = divShow.children.length;

     for (let i = 0; i < cnt; i++) {
         divShow.removeChild(divShow.children[0]);
         //divShow.removeChild(divShow.firstChild); ==> 중간에 TextNode가 있을경우 잘못삭제될수도있음.
     }

     // paging처리
     let startCnt, endCnt;
     startCnt = (page - 1) * 20; // 0
     endCnt = page * 20 - 1; // 9

     let records = data.getElementsByTagName('record');
     endCnt = endCnt > records.length - 1 ? records.length - 1 : endCnt;

     for (let i = startCnt; i <= endCnt; i++) {

         let div = document.createElement('div');
         div.className = 'row';

         let span = document.createElement('span');
         span.className = 'idCls';
         span.innerText = records[i].children[0].innerHTML;

         let strongFirst = document.createElement('strong');
         strongFirst.className = 'first';
         strongFirst.innerText = records[i].children[1].innerHTML;

         let strongLast = document.createElement('strong');
         strongLast.className = 'last';
         strongLast.innerText = records[i].children[2].innerHTML;

         let strongEmail = document.createElement('strong');
         strongEmail.className = 'email';
         strongEmail.innerText = records[i].children[3].innerHTML;

         div.appendChild(span);
         div.appendChild(strongFirst);
         div.appendChild(strongLast);
         div.appendChild(strongEmail);

         let show = document.getElementById('show');
         show.appendChild(div);
     }
 }