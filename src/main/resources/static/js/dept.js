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
        method: 'POST',
        url: '/company/dept/post',
        data: { dName: dept1, dPhone: phone1 },
        success: function (result) {
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
    deptInput.innerHTML = `<div id="deptPost">
                            <a onclick="deptInput()">
                                부서 등록
                            </a>
                        </div>`;
}


// ==================== 2. 부서 전체 출력 ============================== //
function deptGet() {
    $.ajax({
        method: 'GET',
        url: '/company/dept/get',
        success: function (result) {
            console.log(result);
            if (result) {
                let deptList = document.querySelector("#deptList");
                deptList.innerHTML = ""; // 기존 내용을 지움
                result.forEach(dept => {
                    deptList.innerHTML += `
                        <div class="dept">
                            <p>부서 번호: ${dept.dno}</p>
                            <p>부서 이름: ${dept.dname}</p>
                            <p>전화번호: ${dept.dphone}</p>
                        </div>
                        <hr/>
                    `;
                });
                alert("부서 전체 출력 성공");
            } else {
                alert("부서 전체 출력 실패");
            }
        }
    });
}

// ==================== 3. 부서 수정 ============================== //
function deptUpdateInput() {
    let deptInput = document.querySelector("#deptUpdate");
    let html = `<div>
                    <form>
                        수정할 부서번호 : <input id ="deptInput3" type="text"/> <br/>
                        변경된 전화번호 : <input id="phoneInput3" type="text"/> <br/>
                        <button onclick ="deptUpdate()" type ="button"> 부서 수정 </button>
                        <button onclick ="updateClear()" type="button"> 지우기 </button>
                    </form>
                </div>`;
    deptInput.innerHTML = html;
}

function deptUpdate() {
    let dept3 = document.querySelector("#deptInput3").value;
    let phone3 = document.querySelector("#phoneInput3").value;

    $.ajax({
        method: 'PUT',
        url: '/company/dept/put',
        data: { dNo: dept3, dPhone: phone3 },
        success: function (result) {
            console.log(result);
            if (result) {
                alert("부서 수정 성공");
                location.href = "/";
            } else {
                alert("부서 수정 실패");
            }
        }
    });
}

function updateClear() {
    let deptInput = document.querySelector("#deptUpdate");
    deptInput.innerHTML = `<div id="deptUpdate">
                            <a onclick="deptUpdateInput()">
                                부서 수정
                            </a>
                        </div>`;
}

// ==================== 4. 부서 삭제 ============================== //
function deptDeleteInput() {
    let deptInput = document.querySelector("#deptDelete");
    let html = `<div>
                    <form>
                        삭제할 부서 번호 : <input id="deptInput4" type="text" /> <br />
                        <button onclick="deptDelete()" type="button"> 부서 삭제 </button>
                        <button onclick="deleteClear()" type="button"> 지우기 </button>
                    </form>
                </div>`;
    deptInput.innerHTML = html;
}

function deptDelete() {
    let dept4 = document.querySelector("#deptInput4").value;

    $.ajax({
        method: 'DELETE',
        url: '/company/dept/delete',
        data: { dNo: dept4 },
        success: function (result) {
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

function deleteClear() {
    let deptInput = document.querySelector("#deptDelete");
    deptInput.innerHTML = `<div id="deptDelete">
                            <a onclick="deptDeleteInput()">
                                부서 삭제
                            </a>
                        </div>`;
}
