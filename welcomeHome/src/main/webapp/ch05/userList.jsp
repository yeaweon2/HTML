<%@page import="co.yedam.UserVO"%>
<%@page import="java.util.List"%>
<%@page import="co.yedam.UserDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>사용자조회</title>
</head>
<body>
<%
	UserDAO dao = new UserDAO();
	List<UserVO> list = dao.getUsers();
	// id, name, gen, hobby, birth
	out.println("<ul>");
	for(UserVO vo : list){
		out.println("<li>" + vo.getUserName() +"(" + vo.getUserGen() + ") <br> 취미 : "+ vo.getUserHobby() +"</li>");	
	}
	out.println("</ul>");
	
	out.println("<table border='1'>");
	out.println("<tr><th>ID</th><th>이름</th><th>생년월일</th><th>취미</th></tr>");
	for(UserVO vo : list){
		out.println("<tr>");
		out.println("<td>"+ vo.getUserId() +"</td>");
		out.println("<td>"+ vo.getUserName() +"</td>");
		out.println("<td><input type='date' value='"+ vo.getUserBirth() +"'></td>");
		out.println("<td>"+ vo.getUserHobby() +"</td>");
		out.println("</tr>");
	}
	out.println("</table>");
	
	
	
%>
</body>
</html>