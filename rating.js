$(function(){

	$.post("scripts/allusers.php", {}, function(data){
		data = JSON.parse(data);
		for (var i = 0; i < data.length; i++){
			var users = data[i];
			var list = $("#structure .list").clone(true);
			$(".table").append(list);
			list.find(".position").text(i + 1);
			list.find(".name").text(users.nickname);
			if(users.last_online) {
				var last_online = new Date(users.last_online);
				if(Date.now() - 1000 * 10 * 60 < last_online.getTime())
					last_online = 'online';
				else
					last_online = users.last_online;
				list.find(".name").text(users.nickname + ' (' + last_online + ')');
			}
			list.find(".coin").text(users.rating);
			list.find(".name").attr("myid", users.id)
		};

	});	


});

$(function(){

	$.post("scripts/allusers.php", {}, function(data){
		data = JSON.parse(data);
		for (var i = 0; i < data.length; i++){
			var users = data[i];
			var list = $("#structuree .listt").clone(true);
			$(".tablee").append(list);
			list.find(".position").text(i + 1);
			list.find(".name").text(users.nickname);
			if(users.last_online) {
				var last_online = new Date(users.last_online);
				if(Date.now() - 1000 * 10 * 60 < last_online.getTime())
					last_online = 'online';
				else
					last_online = users.last_online;
				list.find(".name").text(users.nickname + ' (' + last_online + ')');
			}
			list.find(".coin").text(users.rating);
			list.find(".name").attr("myid", users.id)
		};

	});	


});