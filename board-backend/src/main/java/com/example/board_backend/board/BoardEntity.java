package com.example.board_backend.board;

import com.example.board_backend.user.UserEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "board")
@EntityListeners(AuditingEntityListener.class)
public class BoardEntity {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long boardId;

@Column(nullable = false)
private String title;

@Column(columnDefinition = "TEXT")
 private String content;

 @ManyToOne(fetch = FetchType.LAZY, optional = false)
 @JoinColumn(name = "user_id")
 private UserEntity user;

 @CreatedDate
 @Column(name = "created_at")
 private LocalDateTime createdAt;

 @LastModifiedDate
 @Column(name = "last_modified_at")
 private LocalDateTime lastModifiedAt;

}
