package hrdsystem.service;


import hrdsystem.model.dao.CompanyDao;
import hrdsystem.model.dto.DeptDto;
import hrdsystem.model.dto.PersonDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    @Autowired
    CompanyDao companyDao;


    //  1. 부서 등록
    public boolean deptPost(String dName, String dPhone){
        System.out.println("CompanyService.deptPost");
        return companyDao.deptPost(DeptDto.builder().dname(dName).dphone(dPhone).build());
    }

    // 2. 부서 전체 출력
    public List<DeptDto> deptGet(){
        System.out.println("CompanyService.deptGet");
        return companyDao.deptGet();
    }

    // 3. 부서 수정
    public boolean deptPut(int dNo, String dName, String dPhone) {
        System.out.println("CompanyService.deptPut: dNo=" + dNo + ", dName=" + dName + ", dPhone=" + dPhone);
        return companyDao.deptPut(DeptDto.builder().dno(dNo).dname(dName).dphone(dPhone).build());
    }


    //  4. 부서 삭제
    public boolean deptDelete(Integer dNo){
        System.out.println("CompanyService.deptDelete");
        return companyDao.deptDelete(DeptDto.builder().dno(dNo).build());
    }

    // 5. 인사 등록
    public boolean personPost(Integer dNo, String name, String phone, String position){
        System.out.println("CompanyService.personPost");
        return companyDao.personPost(PersonDto.builder().dno(dNo).name(name).phone(phone).position(position).build());
    }

    // 6. 인사 전체 출력 arrayList
    public List<PersonDto> personGet(){
        System.out.println("CompanyService.personGet");
        return companyDao.personGet();
    }


    // 7. 인사 수정
    public boolean personPut(Integer pNo, Integer dNo, String name, String phone, String position){
        System.out.println("CompanyService.personPut");
        return companyDao.personPut(PersonDto.builder().pno(pNo).dno(dNo).name(name).phone(phone).position(position).build());
    }


    // 8. 인사 삭제
    public boolean personDelete(Integer pNo){
        System.out.println("CompanyService.personDelete");
        return companyDao.personDelete(pNo);
    }

}
