package hrdsystem.model.dao;

import hrdsystem.model.dto.DeptDto;
import hrdsystem.model.dto.PersonDto;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@Component
public class CompanyDao {

    Connection conn;
    PreparedStatement ps;
    ResultSet rs;


    private CompanyDao() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/hrdsystem", "root", "1234");
        } catch (Exception e) {
            System.out.println(e);
        }
    }


    //  1. 부서 등록
    public boolean deptPost(DeptDto deptDto){
        try{
            String sql = "insert into dept(dname, dphone) values(?,?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1,deptDto.getDname());
            ps.setString(2,deptDto.getDphone());

            int count = ps.executeUpdate();
            if(count == 1){
                return true;
            }
        }catch(Exception e){
            System.out.println(e);
        }
        return false;
    }

    // 3. 부서 수정
    public boolean deptPut(DeptDto deptDto){
        try{
            String sql = "update dept set dname = ?, dphone = ? where dno = ?";
            ps = conn.prepareStatement(sql);
            ps.setString(1,deptDto.getDname());
            ps.setString(2,deptDto.getDphone());
            ps.setInt(3,deptDto.getDno());

            int count = ps.executeUpdate();
            if(count == 1){
                return true;
            }
        }catch(Exception e){
            System.out.println(e);
        }
        return false;
    }

    //  4. 부서 삭제
    public boolean deptDelete(DeptDto deptDto){
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
        try {
            String sql = "insert into person(dno, name, phone, position) values(?,?,?,?)";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, personDto.getDno());
            ps.setString(2, personDto.getName());
            ps.setString(3, personDto.getPhone());
            ps.setString(4, personDto.getPosition());

            return ps.executeUpdate() == 1;
        } catch (Exception e) {
            System.out.println(e);
        }
        return false;
    }

    // 6. 인사 출력
    public PersonDto personGet(int pNo) {
        try {
            String sql = "select * from person where pno = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, pNo);
            rs = ps.executeQuery();
            if (rs.next()) {
                return PersonDto.builder()
                        .pno(rs.getInt("pno"))
                        .name(rs.getString("name"))
                        .phone(rs.getString("phone"))
                        .position(rs.getString("position"))
                        .dno(rs.getInt("dno"))
                        .build();
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }

    // 7. 인사 수정
    public boolean personPut(PersonDto personDto) {
        try {
            String sql = "update person set name = ?, phone = ?, position = ? where pno = ?";
            ps = conn.prepareStatement(sql);
            ps.setString(1, personDto.getName());
            ps.setString(2, personDto.getPhone());
            ps.setString(3, personDto.getPosition());
            ps.setInt(4, personDto.getPno());
            return ps.executeUpdate() == 1;
        } catch (Exception e) {
            System.out.println(e);
        }
        return false;
    }

    // 8. 인사 삭제
    public boolean personDelete(int pNo) {
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
