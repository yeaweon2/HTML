package co.yedam.board;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import co.yedam.DAO;

public class EmpDAO extends DAO {
	// 전체 사원리스트
	public List<Employee> getEmpList(){
		
		List<Employee> list = new ArrayList<>();
		Employee emp = null;
		
		connect(); // Connection 객체생성
		String sql = "SELECT * FROM EMP_TEMP";
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				emp = new Employee();
				emp.setEmployeeId(rs.getInt("employee_id"));
				emp.setFirstName(rs.getString("first_name"));
				emp.setLastName(rs.getString("last_name"));
				emp.setEmail(rs.getString("email"));
				emp.setHireDate(rs.getString("hire_date"));
				emp.setSalary(rs.getInt("salary"));
				emp.setJobId(rs.getString("job_id"));
				list.add(emp);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return list;
	}
}
