console.log('hello world');

function setUp(){

	$("#add").click(handleAddButton);

	$("ul").on("click",'input', handleCheckBoxes);


//trying to fade in "Maya's To Do List"
 	$('.container').fadeIn(4000);


}

function handleAddButton(){
	console.log('button clicked');
	var list = $('#todos');
	var newTask = $('#task');
	var newTaskVal = newTask.val();
	var arrayList = [];

	//list.append("<div>"+newTaskVal+"</div>");

	list.append('<li class="newItem"><input type="checkbox" name="todoItem"><label>' + newTaskVal +'</label></li>');

	//creating an array out of the appended list for the heck of it
	arrayList.push("<div>"+newTaskVal+"</div>");
	console.log(arrayList);

	//clear text after click
	newTask.val('');
}

	//I'm trying to remove a clicked on div item

function handleCheckBoxes(event){
	console.log('handleNewTask');
	var list = $('#todos');
	var newTask = $('#todoItem');
	var newTaskVal = newTask.val();

	var cList =  $('.completed');

    //$(this).children('input').prop('checked',true);

  if($(this).prop('checked'))
  {
  	cList.append($(this).parent());
  }
   else{
   	list.append($(this).parent());
   }
	//$(this).remove();
	
}

/*function animation(){
var title = $('#animate');

	title.fadeIn(1000);

}
*/

function newPage(){
	window.open('form.php');
}

$(document).ready(setUp);



