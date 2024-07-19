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
        System.out.println("CompanyController.deptPost");
        return companyService.deptPost(dName, dPhone);
    }

    //  2. 부서 전체 출력
    @GetMapping("/dept/get")
    public List<DeptDto> deptGet(){
        System.out.println("CompanyController.deptGet");
        return companyService.deptGet();
    }

    // 3. 부서 수정
    @PutMapping("/dept/put")
    public boolean deptPut(@RequestBody DeptDto deptDto) {
        System.out.println("CompanyController.deptPut: " + deptDto);
        return companyService.deptPut(deptDto.getDno(), deptDto.getDname(), deptDto.getDphone());
    }

    //  4. 부서 삭제
    @DeleteMapping("/dept/delete")
    public boolean deptDelete(@RequestBody DeptDto deptDto) {
        return companyService.deptDelete(deptDto.getDno());
    }

    // 5. 인사 등록
    @PostMapping("/person/post")
    public boolean personPost(@RequestBody PersonDto personDto){
        return companyService.personPost(personDto.getDno(), personDto.getName(), personDto.getPhone(), personDto.getPosition());
    }

    // 6. 인사 전체 출력
    @GetMapping("/person/get")
    public List<PersonDto> personGet(){
        System.out.println("CompanyController.personGet");
        return companyService.personGet();
    }

    // 7. 인사 수정
    @PutMapping("/person/put")
    public boolean personPut(Integer pNo, Integer dNo, String name, String phone, String position){
        System.out.println("CompanyController.personPut");
        return companyService.personPut(pNo, dNo, name, phone, position);
    }

    // 8. 인사 삭제
    @DeleteMapping("/person/delete")
    public boolean personDelete(@RequestParam Integer pNo){
        return companyService.personDelete(pNo);
    }

}