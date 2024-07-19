console.log("person.js");

// ==================== 1. 인사 등록 ============================== //
function personInput() {
    let personInput = document.querySelector("#personPost");
    let html = `<div>
                    <form>
                        부서 번호: <input id="personDeptNo" type="text"/> <br/>
                        이름: <input id="personNameInput" type="text"/> <br/>
                        전화번호: <input id="personPhoneInput" type="text"/> <br/>
                        직책: <input id="personPositionInput" type="text"/> <br/>
                        <button onclick="personPost()" type="button"> 인사 등록 </button>
                        <button onclick="postClear()" type="button"> 지우기 </button>
                    </form>
                </div>`;
    personInput.innerHTML = html;
}

function personPost() {
    let dNo = document.querySelector("#personDeptNo").value;
    let name = document.querySelector("#personNameInput").value;
    let phone = document.querySelector("#personPhoneInput").value;
    let position = document.querySelector("#personPositionInput").value;

    $.ajax({
        method: 'POST',
        url: '/company/person/post',
        data: { dNo: dNo, name: name, phone: phone, position: position },
        success: function (result) {
            console.log(result);
            if (result) {
                alert("인사 등록 성공");
                location.href = "/";
            } else {
                alert("인사 등록 실패");
            }
        }
    });
}

function postClear() {
    let personInput = document.querySelector("#personPost");
    personInput.innerHTML = `<div id="personPost">
                            <label for="personName">이름 :</label>
                            <input type="text" id="personName" placeholder="이름">
                            <label for="personPhone">전화번호 :</label>
                            <input type="tel" id="personPhone" placeholder="전화번호">
                            <label for="personPosition">직책 :</label>
                            <input type="text" id="personPosition" placeholder="직책">
                            <div class="actions">
                                <button onclick="personInput()">인사 등록</button>
                                <button onclick="clearPersonInput()">지우기</button>
                            </div>
                        </div>`;
}

// ==================== 2. 인사 전체 출력 ============================== //
function personGet() {
    $.ajax({
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
                            <p>부서 번호: ${person.dNo}</p>
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
        }
    });
}

// ==================== 3. 인사 수정 ============================== //
function personUpdateInput() {
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
                location.href = "/";
            } else {
                alert("인사 수정 실패");
            }
        }
    });
}

function updateClear() {
    let personInput = document.querySelector("#personUpdate");
    personInput.innerHTML = `<div id="personUpdate">
                                <a onclick="personUpdateInput()">
                                    인사 수정
                                </a>
                            </div>`;
}

// ==================== 4. 인사 삭제 ============================== //
function personDeleteInput() {
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
    let pNo = document.querySelector("#personDeleteNo").value;

    $.ajax({
        method: 'DELETE',
        url: '/company/person/delete',
        data: { pNo: pNo },
        success: function (result) {
            console.log(result);
            if (result) {
                alert("인사 삭제 성공");
                location.href = "/";
            } else {
                alert("인사 삭제 실패");
            }
        }
    });
}

function deleteClear() {
    let personInput = document.querySelector("#personDelete");
    personInput.innerHTML = `<div id="personDelete">
                                <a onclick="personDeleteInput()">
                                    인사 삭제
                                </a>
                            </div>`;
}
