package com.mulechina.tms.servlet.login.service;

import com.mulechina.tms.util.JdbcUtil;

public class LoginService {
	public boolean chechUsernameAndPassword(String username,String password){
		JdbcUtil jdbcUtil = new JdbcUtil();
		String sql = "select * from tbl_translator";
		Object[] params = {username,password};
		Object object = jdbcUtil.executeQuerySingle(sql, params);
		return object==null?false:true;
	}
}
