package com.mulechina.tms.servlet.login;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mulechina.tms.servlet.login.service.LoginService;

public class LoginServlet extends HttpServlet{

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		LoginService loginService = new LoginService();
		if(loginService.chechUsernameAndPassword(username, password)){
			RequestDispatcher dispatcher = request.getRequestDispatcher("main.jsp");
			dispatcher.forward(request, response);
		}
		response.sendRedirect("login.jsp");
	}

}
