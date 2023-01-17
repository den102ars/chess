$(function(){

	$.post("scripts/getFriend.php", {}, function(data){
		if (data != 0) {
            console.log(data);
			data = JSON.parse(data);
			console.log(data);
			for (var i = 0; i < data.length; i++){
				var users = data[i];
				var list = $("#structure .list").clone(true);
                $(".table").append(list);
                list.find(".friends").text(users.nickname);
				if(users.last_online) {
					var last_online = new Date(users.last_online);
					if(Date.now() - 1000 * 10 * 60 < last_online.getTime())
						last_online = 'online';
					else
						last_online = users.last_online;
					list.find(".friends").text(users.nickname + '(' + last_online + ')');
				}
			}
		}
	});
});






