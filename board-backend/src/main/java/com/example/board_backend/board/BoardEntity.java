package com.example.board_backend.board;

import jakarta.persistence.*;

@Entity
public class BoardEntity {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long boardId;

@Column(nullable = false)
private String title;

@Column(columnDefinition = "TEXT")
 private String content;

private String author;

}
