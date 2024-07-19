console.log("person.js");
personGet()

// ==================== 1. 인사 등록 ============================== //
function personPost() {
    console.log("personPost()");
    let dNo = document.querySelector("#personDeptNo").value.trim();
    let name = document.querySelector("#personName").value.trim();
    let phone = document.querySelector("#personPhone").value.trim();
    let position = document.querySelector("#personPosition").value.trim();

    if (!dNo || !name || !phone || !position) {
        alert("모든 필드를 입력해주세요.");
        return;
    }

    $.ajax({
        method: 'POST',
        url: '/company/person/post',
        data: JSON.stringify({ dno: parseInt(dNo), name: name, phone: phone, position: position }),
        contentType: "application/json",
        success: function (result) {
            console.log(result);
            if (result) {
                alert("인사 등록 성공");
                location.href = "/company/person";  // 인사 관리 페이지로 이동
            } else {
                alert("인사 등록 실패");
            }
        },

    });
}

function clearPersonInput() {
    document.querySelector("#personDeptNo").value = "";
    document.querySelector("#personName").value = "";
    document.querySelector("#personPhone").value = "";
    document.querySelector("#personPosition").value = "";
}

// ==================== 2. 인사 전체 출력 ============================== //
function personGet() {
    console.log("personGet()");
    $.ajax({
        async: false,
        method: 'GET',
        url: '/company/person/get',
        success: function (result) {
            console.log(result);
            if (result) {
                let personList = document.querySelector("#personList");
                personList.innerHTML = ""; // 기존 내용을 지움
                result.forEach(person => {
                    personList.innerHTML += `
                        <div class="person">
                            <p>인사 번호: ${person.pno}</p>
                            <p>부서 번호: ${person.dno}</p>
                            <p>이름: ${person.name}</p>
                            <p>전화번호: ${person.phone}</p>
                            <p>직책: ${person.position}</p>
                        </div>
                        <hr/>
                    `;
                });
                alert("인사 전체 출력 성공");
            } else {
                alert("인사 전체 출력 실패");
            }
        },
    });
}

// ==================== 3. 인사 수정 ============================== //
function personUpdateInput() {
    console.log("personUpdateInput()");
    let personInput = document.querySelector("#personUpdate");
    let html = `<div>
                    <form>
                        수정할 인사 번호: <input id="personUpdateNo" type="text"/> <br/>
                        부서 번호: <input id="personUpdateDeptNo" type="text"/> <br/>
                        이름: <input id="personUpdateName" type="text"/> <br/>
                        전화번호: <input id="personUpdatePhone" type="text"/> <br/>
                        직책: <input id="personUpdatePosition" type="text"/> <br/>
                        <button onclick="personUpdate()" type="button"> 인사 수정 </button>
                        <button onclick="updateClear()" type="button"> 지우기 </button>
                    </form>
                </div>`;
    personInput.innerHTML = html;
}

function personUpdate() {
    console.log("personUpdate()");
    let pNo = document.querySelector("#personUpdateNo").value;
    let dNo = document.querySelector("#personUpdateDeptNo").value;
    let name = document.querySelector("#personUpdateName").value;
    let phone = document.querySelector("#personUpdatePhone").value;
    let position = document.querySelector("#personUpdatePosition").value;

    $.ajax({
        method: 'PUT',
        url: '/company/person/put',
        data: { pNo: pNo, dNo: dNo, name: name, phone: phone, position: position },
        success: function (result) {
            console.log(result);
            if (result) {
                alert("인사 수정 성공");
                location.href = "/company/person";
            } else {
                alert("인사 수정 실패");
            }
        }
    });
}

function updateClear() {
    console.log("updateClear()");
    let personInput = document.querySelector("#personUpdate");
    personInput.innerHTML = `<div id="personUpdate">
                                <a onclick="personUpdateInput()">
                                    인사 수정
                                </a>
                            </div>`;
}

// ==================== 4. 인사 삭제 ============================== //
function personDeleteInput() {
    console.log("personDeleteInput()");
    let personInput = document.querySelector("#personDelete");
    let html = `<div>
                    <form>
                        삭제할 인사 번호: <input id="personDeleteNo" type="text"/> <br/>
                        <button onclick="personDelete()" type="button"> 인사 삭제 </button>
                        <button onclick="deleteClear()" type="button"> 지우기 </button>
                    </form>
                </div>`;
    personInput.innerHTML = html;
}

function personDelete() {
    console.log("personDelete()");
    let pNo = document.querySelector("#personDeleteNo").value;

    $.ajax({
        method: 'DELETE',
        url: '/company/person/delete',
        data: { pNo: pNo },
        success: function (result) {
            console.log(result);
            if (result) {
                alert("인사 삭제 성공");
                location.href = "/company/person";
            } else {
                alert("인사 삭제 실패");
            }
        }
    });
}

function deleteClear() {
    console.log("deleteClear()");
    let personInput = document.querySelector("#personDelete");
    personInput.innerHTML = `<div id="personDelete">
                                <a onclick="personDeleteInput()">
                                    인사 삭제
                                </a>
                            </div>`;
}
