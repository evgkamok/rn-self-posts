import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("posts.db");

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, booked INT)",
          [],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }

  static getPosts() {
    return new Promise( (resolve, reject) => {
      db.transaction( tx => {
        tx.executeSql(
          `SELECT * FROM posts`,
          [],
          (_, result) => {resolve(result.rows._array)},
          (_, error) => reject(error)
        )
      })
    })
  }

  static createPost({ img, text, date, booked }) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO posts (img, text, date, booked) VALUES (?, ?, ?, ?)`,
          [img, text, date, booked],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        );
      });
    });
  }

  static updatePost(post) {
    return new Promise((resolve, reject) => {
      db.transaction( tx => {
        tx.executeSql(
          `UPDATE posts SET booked = ? WHERE id = ?`,
          [post.booked ? 0 : 1, post.id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  static deletePost(id) {
    return new Promise((resolve, reject) => {
      db.transaction( tx => {
        tx.executeSql(
          `DELETE FROM posts WHERE id = ?`,
          [id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }
}
