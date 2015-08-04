<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>My JSP 'index.jsp' starting page</title>
	<link rel="stylesheet" type="text/css" href="ext5/resources/ext-theme-crisp-all.css">
	<link rel="stylesheet" type="text/css" href="resources/cus.css">
	
	<script type="text/javascript" src="ext5/ext-all-debug.js"></script>
	<script type="text/javascript">
		Ext.Loader.setConfig({
			path:{
				'com.hd':'com/hd'
			},
			enabled: true
		});
		Ext.onReady(function(){
			Ext.create("com.hd.Index").show();
		});
	</script>
  </head>
  
  <body>
    This is my JSP page. <br>
  </body>
</html>
