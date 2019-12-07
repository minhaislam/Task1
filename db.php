<?php

	function getConnection(){
		$conn = mysqli_connect('localhost', 'root', '', 'fwa');
		return $conn;
	}
?>