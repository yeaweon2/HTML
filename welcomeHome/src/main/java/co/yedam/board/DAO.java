package co.yedam.board;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DAO {
	protected Connection conn;
	protected Statement stmt;
	protected PreparedStatement psmt;
	protected ResultSet rs;

	public void connect() {
		String driver = "org.sqlite.JDBC";
		String url = "D:\\sqlite\\db\\chinook.db";
//		String user = "hr";
//		String password = "hr";

		try {
			// 1.드라이버 로딩
			Class.forName(driver);

			// 2. DB연결
			conn = DriverManager.getConnection("jdbc:sqlite:" + url);
			System.out.println("connected!!");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void disconnect() {
		if (conn != null) {
			try {
				conn.close();
				System.out.println("disConnected!!");
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
