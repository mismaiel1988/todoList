console.log('hello world');

function setUp(){


	$("#add").click(handleAddButton);
	$("ul").on("click",'input', handleCheckBoxes);

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

	//list.append("<div>"+newTaskVal+"</div>");

	list.append('<li class="newItem"><input type="checkbox" name="todoItem"><label>' + newTaskVal +'</label></li>');

	//creating an array out of the appended list
	arrayList.push("<div>"+newTaskVal+"</div>");
	console.log(arrayList);

	newTask.val('');


}

	//I'm trying to remove a clicked on div item

function handleCheckBoxes(event){
	console.log('handleNewTask');
	var list = $('#todos');
	var newTask = $('#todoItem');
	var newTaskVal = newTask.val();

	var cList =  $('.completed');

// $(this).children('input').prop('checked',true);

  if($(this).prop('checked'))
  {
  	cList.append($(this).parent());
  }
   else{
   	list.append($(this).parent());
   }
	//$(this).remove();
	
}



function newPage(){
	window.open('form.php');
}

$(document).ready(setUp);


