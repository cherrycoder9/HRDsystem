console.log("dept.js");
deptGet()

// ==================== 1. 부서 등록  ============================== //
function deptPost() {
    let deptName = document.querySelector("#deptName").value.trim();
    let deptPhone = document.querySelector("#deptPhone").value.trim();

    if (!deptName || !deptPhone) {
        alert("부서명과 전화번호를 모두 입력해주세요.");
        return;
    }

    $.ajax({
        method: 'POST',
        url: '/company/dept/post',
        data: JSON.stringify({ dname: deptName, dphone: deptPhone }),
        contentType: "application/json",
        success: function (result) {
            console.log(result);
            if (result) {
                alert("부서 등록 성공");
                location.href = "/company/dept";  // 부서 관리 페이지로 이동
            } else {
                alert("부서 등록 실패");
            }
        }
    });
}

function clearDeptInput() {
    document.querySelector("#deptName").value = "";
    document.querySelector("#deptPhone").value = "";
}

// ==================== 2. 부서 전체 출력 ============================== //
function deptGet() {
    $.ajax({
        async: false,
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
                        수정할 부서번호 : <input id="deptInput3" type="text"/> <br/>
                        변경된 부서 이름 : <input id="nameInput3" type="text"/> <br/>
                        변경된 전화번호 : <input id="phoneInput3" type="text"/> <br/>
                        <button onclick="deptUpdate()" type="button"> 부서 수정 </button>
                        <button onclick="updateClear()" type="button"> 지우기 </button>
                    </form>
                </div>`;
    deptInput.innerHTML = html;
}

function deptUpdate() {
    let dno = document.querySelector("#deptInput3").value;
    let dname = document.querySelector("#nameInput3").value;
    let dphone = document.querySelector("#phoneInput3").value;

    if (!dno || !dname || !dphone) {
        alert("모든 필드를 입력해주세요.");
        return;
    }

    let data = {
        dno: parseInt(dno),
        dname: dname,
        dphone: dphone
    };

    console.log("Sending data:", data);

    $.ajax({
        method: 'PUT',
        url: '/company/dept/put',
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (result) {
            console.log("Server response:", result);
            if (result) {
                alert("부서 수정 성공");
                location.href = "/company/dept";
            } else {
                alert("부서 수정 실패");
            }
        },
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
                        삭제할 부서 번호 : <input id="deptInput4" type="text"/> <br/>
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
        data: JSON.stringify({ dno: dept4 }), // 'dNo'를 'dno'로 변경
        contentType: "application/json",
        success: function (result) {
            console.log(result);
            if (result) {
                alert("부서 삭제 성공");
                location.href = "/company/dept"; // 부서 관리 페이지로 이동
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
