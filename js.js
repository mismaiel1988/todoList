console.log('hello world');

function setUp(){

console.log('We are setting up the DOM');
document.getElementById('add').onclick = handleAddButton;
document.getElementById('task').onclick = handleNewTask;

$('body').click(function(){
	console.log('body clicked');
});

$('#myForm').click(function(){
	console.log('form clicked');
});

}


function handleAddButton(){
	console.log('button clicked');
	var list = $('#todos');
	var newTask = $('#task');
	var newTaskVal = newTask.val();
	var arrayList = [];

	list.append("<div>"+newTaskVal+"</div>");

	//creating an array out of the appended list
	arrayList.push("<div>"+newTaskVal+"</div>");
	console.log(arrayList);
}


//I'm trying to remove a clicked on div item

function handleNewTask(){
	console.log('handleNewTask');
	var list = $('#todos');
	var newTask = $('#task');
	var newTaskVal = newTask.val();



	
}





$(document).ready(setUp);


