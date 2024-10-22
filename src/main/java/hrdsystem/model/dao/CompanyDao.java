package hrdsystem.model.dao;

import hrdsystem.model.dto.DeptDto;
import hrdsystem.model.dto.PersonDto;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Component
public class CompanyDao {

    Connection conn;
    PreparedStatement ps;
    ResultSet rs;


    private CompanyDao() {
        System.out.println("CompanyDao.CompanyDao");
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/hrdsystem", "root", "1234");
        } catch (Exception e) {
            System.out.println(e);
        }
    }


    //  1. 부서 등록
    public boolean deptPost(DeptDto deptDto){
        System.out.println("CompanyDao.deptPost");
        try{
            if(deptDto.getDname() == null || deptDto.getDphone() == null) {
                return false;  // null 값이 입력되면 false 반환
            }
            String sql = "insert into dept(dname, dphone) values(?,?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1,deptDto.getDname());
            ps.setString(2,deptDto.getDphone());

            int count = ps.executeUpdate();
            return count == 1;
        }catch(Exception e){
            System.out.println(e);
            return false;
        }
    }

    // 2. 부서 전체 출력
    public List<DeptDto> deptGet(){
        System.out.println("CompanyDao.deptGet");
        try{
            String sql = "select * from dept";
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();
            List<DeptDto> list = new ArrayList<>();
            while(rs.next()){
                DeptDto deptDto = new DeptDto();
                deptDto.setDno(rs.getInt("dno"));
                deptDto.setDname(rs.getString("dname"));
                deptDto.setDphone(rs.getString("dphone"));
                list.add(deptDto);
            }
            return list;
        }catch(Exception e){
            System.out.println(e);
        }
        return null;
    }

    // 3. 부서 수정
    public boolean deptPut(DeptDto deptDto) {
        System.out.println("CompanyDao.deptPut: " + deptDto);
        try {
            String sql = "update dept set dname = ?, dphone = ? where dno = ?";
            ps = conn.prepareStatement(sql);
            ps.setString(1, deptDto.getDname());
            ps.setString(2, deptDto.getDphone());
            ps.setInt(3, deptDto.getDno());

            int count = ps.executeUpdate();
            System.out.println("CompanyDao.deptPut: Rows = " + count);
            return count == 1;
        } catch (Exception e) {
            System.out.println("CompanyDao.deptPut Error: " + e.getMessage());
            e.printStackTrace();
        }
        return false;
    }

    //  4. 부서 삭제
    public boolean deptDelete(DeptDto deptDto){
        System.out.println("CompanyDao.deptDelete");
        try{
            String sql = "delete from dept where dno = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1,deptDto.getDno());

            int count = ps.executeUpdate();
            if(count == 1){
                return true;
            }
        }catch(Exception e){
            System.out.println(e);
        }
        return false;
    }

    // 5. 인사 등록
    public boolean personPost(PersonDto personDto) {
        System.out.println("CompanyDao.personPost: " + personDto);
        try {
            String sql = "insert into person(dno, name, phone, position) values(?,?,?,?)";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, personDto.getDno());
            ps.setString(2, personDto.getName());
            ps.setString(3, personDto.getPhone());
            ps.setString(4, personDto.getPosition());

            int result = ps.executeUpdate();
            System.out.println("CompanyDao.personPost result: " + result);
            return result == 1;
        } catch (Exception e) {
            System.out.println("CompanyDao.personPost Error: " + e.getMessage());
            e.printStackTrace();
        }
        return false;
    }

    // 6. 인사 전체 출력
    public List<PersonDto> personGet() {
        System.out.println("CompanyDao.personGet");
        try {
            String sql = "select * from person";
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();
            List<PersonDto> list = new ArrayList<>();
            while (rs.next()) {
                PersonDto personDto = new PersonDto();
                personDto.setPno(rs.getInt("pno"));
                personDto.setDno(rs.getInt("dno"));
                personDto.setName(rs.getString("name"));
                personDto.setPhone(rs.getString("phone"));
                personDto.setPosition(rs.getString("position"));
                list.add(personDto);
            }
            return list;
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }

    // 7. 인사 수정
    public boolean personPut(PersonDto personDto) {
        System.out.println("CompanyDao.personPut");
        try {
            String sql = "update person set dno = ?, name = ?, phone = ?, position = ? where pno = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, personDto.getDno());
            ps.setString(2, personDto.getName());
            ps.setString(3, personDto.getPhone());
            ps.setString(4, personDto.getPosition());
            ps.setInt(5, personDto.getPno());
            return ps.executeUpdate() == 1;
        } catch (Exception e) {
            System.out.println(e);
        }
        return false;
    }

    // 8. 인사 삭제
    public boolean personDelete(Integer pNo) {
        System.out.println("CompanyDao.personDelete");
        try {
            String sql = "delete from person where pno = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, pNo);
            return ps.executeUpdate() == 1;
        } catch (Exception e) {
            System.out.println(e);
        }
        return false;
    }
}
