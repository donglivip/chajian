var auths={};
		mui.plusReady(function(){
			// 获取登录认证通道
			plus.oauth.getServices(function(services){
				for(var i in services){
					var service=services[i];
					auths[service.id]=service;
				}
			},function(e){
				outLine("获取登录认证失败："+e.message);
			});
		});
		//判断一下是否已经注册了
		var register_url = localStorage.getItem('register_url');
		function login(id) {
			var auth = auths[id];
			if(auth) {
				var w = plus.nativeUI.showWaiting();
				document.addEventListener("pause", function() {
					setTimeout(function() {
						w && w.close();
						w = null;
					}, 2000);
				}, false);
				auth.login(function() {
					w && w.close();
					w = null;
					var refresh_token = auth.authResult.refresh_token;
					//access_token是令牌
					var access_token = auth.authResult.refresh_token;
					//判断一下是否已经注册了
					userinfo(auth,access_token);
				}, function(e) {
					w && w.close();
					w = null;
					plus.nativeUI.alert("详情错误信息请参考授权登录(OAuth)规范文档：http://www.html5plus.org/#specification#/specification/OAuth.html", null, "登录失败[" + e.code + "]：" + e.message);
				});
			} else {
				plus.nativeUI.alert("无效的登录认证通道！", null, "登录");
			}
		}
		// 获取用户信息
		function userinfo(a,access_token) {
			a.getUserInfo(function() {
				var nickname = a.userInfo.nickname || a.userInfo.name;
				//获取帐户性别
				var sex = a.userInfo.sex;
				//获取的微信头像 
				var he_url = a.userInfo.headimgurl;
				alert(access_token)
				alert(nickname)
				alert(sex)
				alert(he_url)
			}, function(e) {
				alert("[" + e.code + "]：" + e.message);
			});
		}