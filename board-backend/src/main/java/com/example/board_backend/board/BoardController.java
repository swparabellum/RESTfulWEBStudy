package com.example.board_backend.board;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/posts")
    public List<BoardEntity> getPosts(){
        //System.out.println("getPosts called");
        return boardService.findAllPosts();
    }

    @PostMapping("/newpost")
    public ResponseEntity<?> createPost(@RequestBody BoardDTO boardDTO, Authentication authentication) {
        boardService.savePost(boardDTO, authentication.getName());
        return ResponseEntity.ok("게시글이 성공적으로 등록되었습니다.");
    }

}

