console.log("dept.js");


// ==================== 1. 부서 등록  ============================== //
function deptInput() {
    let deptInput = document.querySelector("#deptPost");
    let html = `<div>
                    <form>
                        부서 : <input id ="deptInput1" type="text"/> <br/>
                        전화번호 : <input id="phoneInput1" type="text"/> <br/>

                        <button onclick ="deptPost()" type ="button"> 부서 등록 </button>
                        <button onclick ="postClear()" type="button"> 지우기 </button>
                    </form>
                    </div>`;
    deptInput.innerHTML = html;
}

function deptPost() {
    let dept1 = document.querySelector("#deptInput1").value;
    let phone1 = document.querySelector("#phoneInput1").value;

    $.ajax({
        method: 'post',
        url: '/company/dept/post',
        data: { dName: dept1, dPhone: phone1 },
        success: function response(result) {
            console.log(result);
            if (result) {
                alert("부서 등록 성공");
                location.href = "/";
            } else {
                alert("부서 등록 실패");
            }
        }
    });
}

function postClear() {
    let deptInput = document.querySelector("#deptPost");
    deptInput.innerHTML = `<div id = "deptPost">
                            <a onclick = "deptInput()">
                                부서 등록
                            </a>
                        </div>`;
}


// =============================== 4. 부서 삭제 ==================================== //

function deptDeleteInput() {
    let deptInput = document.querySelector("#deptDelete");
    let html = `<div>
                    <form>
                        삭제할 부서 번호 : <input id ="deptInput4" type="text"/> <br/>
                    
                        <button onclick ="deptDelete()" type ="button"> 부서 삭제 </button>
                        <button onclick ="deleteClear()" type="button"> 지우기 </button>
                    </form>
                    </div>`;
    deptInput.innerHTML = html;
}

function deptDelete() {
    let dept4 = document.querySelector("#deptInput4").value;

    $.ajax({
        method: 'delete',
        url: '/company/dept/delete',
        data: { dNo: dept4 },
        success: function response(result) {
            console.log(result);
            if (result) {
                alert("부서 삭제 성공");
                location.href = "/";
            } else {
                alert("부서 삭제 실패");
            }
        }
    });
}

function postClear() {
    let deptInput = document.querySelector("#deptDelete");
    deptInput.innerHTML = `<div id = "deptPost">
                            <a onclick = "deptDeleteInput()">
                                부서 삭제
                            </a>
                        </div>`;
}