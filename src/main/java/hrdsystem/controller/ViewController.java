package hrdsystem.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {



    @GetMapping("/")    //  http://localhost:8080                //  페이지 요청은 HTTP 의 get 방식을 주로 사양한다.
    public String index(){
        return "index.html";          // templates 폴더 내 반환할 경로의 파일명
    }
    //  2. 회원 관련 경로 설정
    @GetMapping("/company/dept")
    public String mSignUp(){
        return "/company/dept.html";
    }
    @GetMapping("/company/person")
    public String mLogIn(){
        return "/company/person.html";
    }

}