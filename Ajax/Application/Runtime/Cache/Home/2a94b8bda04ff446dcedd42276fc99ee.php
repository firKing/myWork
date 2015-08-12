<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>ajax</title>
	<script type="text/javascript" src="/Ajax/Application/Home/Public/js/jquery.js"></script>
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
		}
		.allMsg{
			margin: 10px;
			border: 1px solid;
			width: 500px;
			height: 300px;
		}
		.message{
			border: 1px dotted;
			margin: 10px 20px;	
			width: 460px;
			height: 50px;
		}
		.int{
			margin-top: 10px;
		}
		form{
			margin: 10px;
		}
	</style>
</head>
<body>
	<div class="allMsg">
		
	</div>
	<form action="#">
		<div class="int">
			<label for="username">姓名:</label>
			<input type="text" id="username" name="username">
		</div>
		<div class="int">
			<label for="content">内容:</label>
			<input type="text" id="content" name="content">
		</div>
		<div class="int">
			<input type="submit" id="send" value="发送">
			<input type="reset" id="reset" value="重置">
		</div>
	</form>
	<script type="text/javascript">
	$(function(){

		$("#send").on('click', function(event) {
			event.preventDefault();
			$.post("<?php echo U('Home/Index/ajaxHandle');?>", $("form").serialize(), function(data, textStatus, xhr) {
				$("<div class='message'><span class='name'>"+ data.username +"</span>:<p>"+ data.content +"</p></div>").appendTo(".allMsg");
			});
		});
		
	});
	</script>
</body>
</html>