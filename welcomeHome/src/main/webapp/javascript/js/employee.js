let jsonData = `[{"id":1,"first_name":"Ellswerth","last_name":"Stanlike","email":"estanlike0@biblegateway.com","gender":"Non-binary"},
{"id":2,"first_name":"Matthieu","last_name":"McClymond","email":"mmcclymond1@cbslocal.com","gender":"Genderqueer"},
{"id":3,"first_name":"Titus","last_name":"Flucker","email":"tflucker2@pcworld.com","gender":"Polygender"},
{"id":4,"first_name":"Eldin","last_name":"Curuclis","email":"ecuruclis3@pen.io","gender":"Non-binary"},
{"id":5,"first_name":"Normie","last_name":"Lippett","email":"nlippett4@imgur.com","gender":"Polygender"},
{"id":6,"first_name":"Krissie","last_name":"Bremley","email":"kbremley5@reddit.com","gender":"Agender"},
{"id":7,"first_name":"Vin","last_name":"Osbaldstone","email":"vosbaldstone6@vistaprint.com","gender":"Genderqueer"},
{"id":8,"first_name":"Gillan","last_name":"Houson","email":"ghouson7@zimbio.com","gender":"Agender"},
{"id":9,"first_name":"Madelene","last_name":"Hannigan","email":"mhannigan8@gmpg.org","gender":"Agender"},
{"id":10,"first_name":"Denny","last_name":"Kennea","email":"dkennea9@columbia.edu","gender":"Agender"}]`;


        let objData = JSON.parse(jsonData);

        document.addEventListener('DOMContentLoaded', function () {
            // 사원번호 성 이름 이메일 성별 삭제
            let table = document.createElement('table');
            table.setAttribute('id', 'empList');
            let thead = document.createElement('thead');
            let tbody = document.createElement('tbody');
            
            thead.appendChild(makeTitleRow());

            for (let i = 0; i < objData.length; i++) {
                let newTr = makeRow(objData[i], i)
                tbody.appendChild(newTr);
            }

            table.style.border = '1px';
            table.style.border = 'solid';
            table.style.borderCollapse = 'collapse';

            table.appendChild(tbody);
            table.appendChild(thead);
            let div = document.getElementById('show');
            div.appendChild(table);

        });


        function makeTitleRow(){
            let tr = document.createElement('tr');
            let title = ['사원번호', '성', '이름', '이메일', '성별', '삭제'];
            for (let i = 0; i < title.length; i++) {
                let th = document.createElement('th');
                let thTxt = document.createTextNode(title[i]);
                th.appendChild(thTxt);
                tr.appendChild(th);
            }
            return tr;
        }

        function makeRow(objData, i){
            let tr = document.createElement('tr');

            tr.addEventListener( 'mouseover', mover, true );
            tr.addEventListener( 'mouseout', mout, true );
            tr.addEventListener( 'click', trClick, false ); // true 상위요소부터 이벤트를 처리하겠다 / flase 하위요소로 이벤트 전달 (기본값 false)
            
            // tr.addEventListener('mouseover', function(){
            //     this.style.backgroundColor = 'lightpink';
            // });

            // tr.addEventListener('mouseout', function(){
            //     this.style.backgroundColor = '';
            // });
                        
            tr.setAttribute('class', 'tr' + (i + 1))
            let cnt = 1;
            for (let field in objData) {                
                //console.log(`필드: ${field}, 값 : ${objData[field]}`);
                let td = document.createElement('td');
                td.setAttribute('class', 'td' + cnt);
                let txt = document.createTextNode(objData[field]);
                
                td.appendChild(txt);
                tr.appendChild(td);
                cnt++;
            }

            let btnTd = document.createElement('td');
            let btn = document.createElement('input');

            btnTd.setAttribute('class', 'btnTd');
            btn.setAttribute('value', '삭제');
            btn.setAttribute('type', 'button');

            btn.addEventListener('click', delBtnClick); // callback함수
            

            btnTd.appendChild(btn);
            tr.appendChild(btnTd);
            return tr;
        }

        let delBtnClick = (arg) => {
            // console.log(args.target);
            // console.log(this);
            // console.log(args.target.parentNode.parentNode.childNodes[2].innerHTML);
            // console.log(args.target.parentNode.parentNode.childNodes[2].nextSibling);
            // console.log(args.target.parentNode.parentNode.childNodes[2].previousSibling);
            arg.stopPropagation();  // 이벤트의 전파를 차단.
            arg.target.parentElement.parentElement.remove();
            //this.parentNode.parentNode.remove();
        }    
        
        let mover = function (arg)  {
            // arrow funcion일 경우에는 this 키워드는 window 오브젝트.
            //arg.stopPropagation();
            //arg.target.parentElement.style.backgroundColor = 'lightPink';

            this.style.backgroundColor = 'lightPink';
        }
        let mout = function (arg){
            //funcion 일 경우에는 this 키워드는 event 대상.
            this.style.backgroundColor = '';
        }      
        
        let trClick = function (arg){
            window.alert(this.children[0].innerHTML);
            arg.target.parentElement.remove();
        }
        