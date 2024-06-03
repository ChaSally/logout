/**
 * 
 */

function joinCheck() {
	
	var form = document.joinForm;
	/* 아이디가 공란인지 유효성 검사 */
	if(form.memberID.value.length == 0) {
		alert("아이디는 필수입력 \n 다시 입력해주세요.");
		form.memberID.focus();
		return false;
	}
	/* 아이디는 4~15자로 */
	if(document.joinForm.memberID.value.length < 4 || document.joinForm.memberID.value.length > 15) {
		alert("아이디는 4글자 이상 15자 이하로만 \n 다시 입력해주세요.");
		return false;
	}
	
	if(document.joinForm.memberPW.value.length == 0) {
		alert("비밀번호는 필수입력 \n 다시 입력해주세요.");
		form.memberPW.focus();
		return false;
	}
	
	if(document.joinForm.memberPW.value.length < 5) {
		alert("비밀번호는 5자 이상 \n 다시 입력해주세요.");
		return false;
	}
	
	if(document.joinForm.memberName.value.length == 0) {
		alert("이름은 필수입력 \n 다시 입력해주세요.");
		form.memberName.focus();
		return false;
	}
	
	/* 이름은 한글만 입력가능: 정규표현식 english = /^[a-z|A-Z]*$/ */
	var hangul = /^[ㄱㅏ-힣]*$/;
	
	if(!hangul.test(document.joinForm.memberName.value)){
		alert("이름은 한글만 입력가능 \n 다시 입력해주세요.");
		return false;
	}
	
	if(document.joinForm.phoneNo.value.length == 0) {
		alert("전화번호는 필수입력 \n 다시 입력해주세요.");
		form.phoneNo.focus();
		return false;
	}
	
	/* 전화번호는 숫자만 입력가능 */
	var number = /^[0-9]*$/;
	
	if(!number.test(document.joinForm.phoneNo.value)) {
		alert("전화번호는 숫자만 입력 \n 다시 입력해주세요.");
		return false;
	}
	
	
	return true;
 }
 
 
 
 