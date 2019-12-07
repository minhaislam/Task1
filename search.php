<?php
	
	require_once('db.php');

	$term = $_POST['key'];
	$con = getConnection();
	$sql = "select email from info where email='{$term}'";
	$result = mysqli_query($con, $sql);
	$row = "";
	$data = mysqli_fetch_assoc($result);
		$row .= $data['email'];
	if (!empty($row)) {
		echo "email exists";
	}
	else{
		echo "doesn't exist";
	}
	
?>