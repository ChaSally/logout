<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원정보 확인</title>
</head>
<body>
	 <%
	 	request.setCharacterEncoding("utf-8");
	 
	 	String mid = request.getParameter("memberID");
	 	String mpw = request.getParameter("memberPW");
	 	String mName = request.getParameter("memberName");
	 	String phoneNo = request.getParameter("phoneNo");
	 
	 %>
	 
	 <h3>회원가입 정보</h3>
	 <hr>
	 아이디 : <%= mid  %><br><br>
	 비밀번호 : <%= mpw  %><br><br>
	 이름 : <%= mName  %><br><br>
	 전화번호 : <%= phoneNo  %><br><br>

</body>
</html>