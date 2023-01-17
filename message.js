var end=0;
$(function(){
	setInterval(function(){
		$.post("scripts/messages.php", {end}, function(data){
			data=JSON.parse(data);
			//console.log(end);
			//console.log(data);
			for(var i=0;i<data.length;i++){
				var food=data[i];
				if(food!=end){
					console.log(food.message);
				
				//var foodBlock = $(".messag-box .scroll .messages").clone(true);
				console.log(foodBlock);
				var foodBlock = $(".messag-box .scroll #0").clone(true);
				foodBlock.attr("id", food.Id)
				$(".messag-box .scroll").append(foodBlock);
				//$(".messag-box .scroll .messages").append(food.message);
				foodBlock.text(food.message).append(foodBlock);
				end=food.Id;
				}
							
			}
		})
	},2000)
})