package com.example.board_backend.user;

import com.example.board_backend.board.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    @PostMapping("/signin")
    public LoginResponse signin(@RequestBody LoginRequest loginRequest) {
        System.out.println("UserController signin 동작." );
        String token = userService.login(loginRequest.getEmail(), loginRequest.getPassword());
        return new LoginResponse(token);
    }

}
