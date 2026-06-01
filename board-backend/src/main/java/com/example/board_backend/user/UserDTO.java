package com.example.board_backend.user;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UserDTO {
    private String email;

    private String username;

    private String password;
}
