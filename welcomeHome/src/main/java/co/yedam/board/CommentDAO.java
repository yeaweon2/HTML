package co.yedam.board;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class CommentDAO extends DAO {

	private static CommentDAO instance;

	private CommentDAO() {

	}

	public static CommentDAO getInstance() {
		instance = new CommentDAO();
		return instance;
	}

	// 글목록
	public List<HashMap<String, Object>> selectAll() {
		connect();
		List<HashMap<String, Object>> list = new ArrayList<HashMap<String, Object>>();
		String sql = "select * from comments order by id";
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				HashMap<String, Object> map = new HashMap<>();
				map.put("id", rs.getString("id"));
				map.put("name", rs.getString("name"));
				map.put("content", rs.getString("content"));
				list.add(map);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

	// 글등록
	public HashMap<String, Object> insert(Comment comment) {
		// id_repository 테이블에서 현재 시퀀스번호
		// comments 테이블에 추가
		// id_repository 에 새로운 시퀀스번호로 변경

		int nextId = 0;
		connect();
		String sql = "";
		try {
			conn.setAutoCommit(false);
			// 1) 현재 시퀀스번호 조회후 nextID 셋팅
			stmt = conn.createStatement(); // pstmt ==> 파라메트를 쓸 수 있느냐 없느냐의 차이
			rs = stmt.executeQuery("select value from id_repository where name = 'comment'");
			if (rs.next()) {
				nextId = rs.getInt("value");
			}
			nextId++;

			// 2) 댓글 입력
			psmt = conn.prepareStatement("insert into comments values( ?, ?, ? )");
			psmt.setInt(1, nextId);
			psmt.setString(2, comment.getName());
			psmt.setString(3, comment.getContent());
			int r = psmt.executeUpdate();
			System.out.println("입력건수 ==> " + r);

			// 3) 시퀀스번호 업데이트
			psmt = conn.prepareStatement("update id_repository set value = ? where name = 'comment'");
			psmt.setInt(1, nextId);
			int cntResult = psmt.executeUpdate();
			System.out.println("Count값 업데이트 건수 ==> " + cntResult);

			conn.commit();

			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("id", nextId);
			map.put("name", comment.getName());
			map.put("content", comment.getContent());

			return map;

		} catch (SQLException e) {
			e.printStackTrace();
			try {
				conn.rollback();
				HashMap<String, Object> map = new HashMap<String, Object>();
				map.put("msg", e.getMessage());
				return map;
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			disconnect();
		}

		return null;
	}

	// 글변경
	public HashMap<String, Object> update(Comment comment) {
		connect();

		HashMap<String, Object> map = new HashMap<String, Object>();
		String sql = "UPDATE COMMENTS SET NAME = ? , CONTENT=? WHERE ID = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, comment.getName());
			psmt.setString(2, comment.getContent());
			psmt.setString(3, comment.getId());
			int r = psmt.executeUpdate();
			System.out.println("업데이트건수 ==> " + r);

			map.put("id", comment.getId());
			map.put("name", comment.getName());
			map.put("content", comment.getContent());

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return map;
	}

	// 글삭제 ( 매개값 : 글번호 )
	public HashMap<String, Object> delete(String id) {
		connect();

		HashMap<String, Object> map = new HashMap<String, Object>();
		String sql = "DELETE FROM COMMENTS WHERE ID = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			int r = psmt.executeUpdate();
			System.out.println("삭제 건수 ==> " + r);

			map.put("id", id);
			return map;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}

		return null;
	}

}
