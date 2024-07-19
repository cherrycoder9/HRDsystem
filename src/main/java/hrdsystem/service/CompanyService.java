package hrdsystem.service;


import hrdsystem.model.dao.CompanyDao;
import hrdsystem.model.dto.DeptDto;
import hrdsystem.model.dto.PersonDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyService {
    @Autowired
    CompanyDao companyDao;


    //  1. 부서 등록
    public boolean deptPost(String dName, String dPhone){
        return companyDao.deptPost(DeptDto.builder().dname(dName).dphone(dPhone).build());
    }

    // 3. 부서 수정
    public boolean deptPut(int dNo, String dName, String dPhone){
        return companyDao.deptPut(DeptDto.builder().dno(dNo).dname(dName).dphone(dPhone).build());
    }


    //  4. 부서 삭제
    public boolean deptDelete(int dNo){
        return companyDao.deptDelete(DeptDto.builder().dno(dNo).build());
    }

    // 5. 인사 등록
    public boolean personPost(int dNo, String name, String phone, String position){
        return companyDao.personPost(PersonDto.builder().dno(dNo).name(name).phone(phone).position(position).build());
    }

    // 6. 인사 출력
    public PersonDto personGet(int pNo){
        return companyDao.personGet(pNo);
    }

    // 7. 인사 수정
    public boolean personPut(int pNo, String name, String phone, String position){
        return companyDao.personPut(PersonDto.builder().pno(pNo).name(name).phone(phone).position(position).build());
    }

    // 8. 인사 삭제
    public boolean personDelete(int pNo){
        return companyDao.personDelete(pNo);
    }
}
