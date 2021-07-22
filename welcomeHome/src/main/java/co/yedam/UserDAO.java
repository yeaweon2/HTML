package co.yedam;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDAO extends DAO {
	public int insertUser(UserVO vo) {
		// 사용자 입력값=> 오라클 DB에 입력처리.
		connect();
		int result = 0;
		String sql = "INSERT INTO USERS (USER_ID, USER_PW, USER_NAME, USER_GEN, USER_HOBBY, USER_BIRTH) VALUES (?,?,?,?,?,?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getUserId());
			psmt.setString(2, vo.getUserPw());
			psmt.setString(3, vo.getUserName());
			psmt.setString(4, vo.getUserGen());
			psmt.setString(5, vo.getUserHobby());
			psmt.setString(6, vo.getUserBirth());
			result = psmt.executeUpdate();	// QUERY 실행
			System.out.println("[ " + result + " ] 건 입력.");
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return result;
	}
	
	public List<UserVO> getUsers(){
		connect();
		List<UserVO> list = new ArrayList<>();
		UserVO vo = null;
		String sql = "SELECT * FROM USERS";
		
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				vo = new UserVO();
				vo.setUserId(rs.getString("user_id"));
				vo.setUserPw(rs.getString("user_pw"));
				vo.setUserName(rs.getString("user_name"));
				vo.setUserGen(rs.getString("user_gen"));
				vo.setUserHobby(rs.getString("user_hobby"));
				vo.setUserBirth(rs.getString("user_birth"));
				list.add(vo);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	} 
}
