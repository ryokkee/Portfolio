function check() {
	console.log('check');
	var flag = 0;
	//設定開始（必須にする項目を設定してください。）
	if (document.form1.name.value == '') {
		flag = 1;
	} else if (document.form1.email.value == '') {
		flag = 1;
	} else if (document.form1.msg.value == '') {
		flag = 1;
	}
	//設定終了
	if ((flag = 1)) {
		//エラーの場合ダイアログを表示する
		window.alert('必須項目が未入力です。');
		return false;
	} else {
		return true;
	}
}
