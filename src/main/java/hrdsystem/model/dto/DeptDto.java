package hrdsystem.model.dto;

import lombok.*;

@AllArgsConstructor     //  해당 클래스의 풀 생성자를 자동으로 주입 / 생성
@NoArgsConstructor      //  해당 클래스의 빈 / 기본 생성자를 자동으로 주입 / 생성
@ToString               //  해당 클레스의 toString 메소드를 자동으로 재정의함
@Setter                 //  해당 클래스에 Setter 메소드를 자동으로 주입 / 생성
@Getter                 //  해당 클래스에 getter 메소드를 자동으로 주입 / 생성
@Builder                //  해당 클래스에 builder 패턴 생성
public class DeptDto {
    private int dno;
    private String dname;
    private String dphone;
}