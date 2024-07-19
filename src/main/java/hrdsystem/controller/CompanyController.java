package hrdsystem.controller;

import hrdsystem.model.dto.DeptDto;
import hrdsystem.model.dto.PersonDto;
import hrdsystem.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/company")
public class CompanyController {
    @Autowired
    CompanyService companyService;

    //  1. 부서 등록
    @PostMapping("/dept/post")
    public boolean deptPost(String dName, String dPhone){
        return companyService.deptPost(dName, dPhone);
    }

    //  2. 부서 전체 출력
    @GetMapping("/dept/get")
    public List<DeptDto> deptGet(){
        return companyService.deptGet();
    }

    // 3. 부서 수정
    @PostMapping("/dept/put")
    public boolean deptPut(int dNo, String dName, String dPhone){
        return companyService.deptPut(dNo, dName, dPhone);
    }

    //  4. 부서 삭제
    @DeleteMapping("/dept/delete")
    public boolean deptDelete(int dNo){
        return companyService.deptDelete(dNo);
    }

    // 5. 인사 등록
    @PostMapping("/person/post")
    public boolean personPost(int dNo, String name, String phone, String position){
        return companyService.personPost(dNo, name, phone, position);
    }

    // 6. 인사 전체 출력
    @GetMapping("/person/get")
    public List<PersonDto> personGet(){
        return companyService.personGet();
    }

    // 7. 인사 수정
    @PutMapping("/person/put")
    public boolean personPut(int pNo, int dNo, String name, String phone, String position){
        return companyService.personPut(pNo, dNo, name, phone, position);
    }

    // 8. 인사 삭제
    @DeleteMapping("/person/delete")
    public boolean personDelete(int pNo){
        return companyService.personDelete(pNo);
    }

}