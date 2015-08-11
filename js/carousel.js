$(document).ready(function(){
	$(".editPicture").click(function(){
		$("#fileupload").click();
	})

	$("#editPageEdit").click(function(){
		$("#fileupload").click();
	})
	
	$(".editLogo").click(function(){
		$("#fileupload").click();
	})
	
	$(".editPartner").click(function(){
		$("#fileupload").click();
	})
	
	$(".pagePlus").click(function(){
		$("#fileupload").click();
	})
		
	$(".editStory").click(function(){
		var $editPage = $("#editPage");
		var bw = $("body").width();
		var pw = $editPage.width();
		$editPage.css("left",function(){
			return 0.5 * (bw - pw);
		})
		$editPage.css("display","block");
		$("#bg").css("display","block");
		
		$("#btnSave").click(function(){
			$editPage.css("display", "none");
			$("#bg").css("display", "none");
		})
		
		$("#btnCancel").click(function(){
			$editPage.css("display", "none");
			$("#bg").css("display", "none");
		})
	})
})