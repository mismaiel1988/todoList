console.log('hello world');

function setUp(){

console.log('We are setting up the DOM');
document.getElementById('add').onclick = OnClickBtn;

$('body').click(function(){
	console.log('body clicked');
});

$('#myForm').click(function(){
	console.log('form clicked');
});

}


function OnClickBtn(){
	console.log('button clicked');
	var list = $('#todos');
	var newTask = $('#task');
	var newTaskVal = newTask.val();

	list.append("<div>"+newTaskVal+"</div>");


//I'm trying to remove a clicked on div item

  $("<div>"+newTaskVal+"</div>").click(function(){
  $("div").empty();
	});


}


$(document).ready(setUp);


