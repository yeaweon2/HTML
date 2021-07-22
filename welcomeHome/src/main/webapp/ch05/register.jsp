<%@page import="co.yedam.UserDAO"%>
<%@page import="co.yedam.UserVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
</head>
<body>
	<%
		request.setCharacterEncoding("utf-8"); // 한글처리;
		UserDAO dao = new UserDAO();
		
		String uId = request.getParameter("user_id");
		String uPw = request.getParameter("user_pw");
		String uName = request.getParameter("user_nm");
		String uGen = request.getParameter("user_gen");
		String uHobby = request.getParameter("user_hobby");
		String uBirth = request.getParameter("user_birth");
		
		UserVO vo = new UserVO(uId, uPw, uName, uGen, uHobby, uBirth);
		int result = dao.insertUser(vo);
		
		out.print("<script>alert('입력성공')</script>");
		out.print("<h3>입력완료!!</h3>");
	%>
	
</body>
</html>