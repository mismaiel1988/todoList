console.log('hello world');

function setUp(){

	$("#add").click(handleAddButton);

	$("ul").on("click",'input', handleCheckBoxes);

}

function handleAddButton(){
	console.log('button clicked');
	var list = $('#todos');
	var newTask = $('#task');
	var newTaskVal = newTask.val();
	var arrayList = [];

	//list.append("<div>"+newTaskVal+"</div>");

	//list.append('<li class="newItem"><input type="checkbox" name="todoItem"><label>' + newTaskVal +'</label></li>');

    var newElement = $('<li class="newItem"><input type="checkbox" name="todoItem"><label>' + newTaskVal +'</label></li>');

    if (newTaskVal.length > 0){
	    //hide the jquery wrapped element first
		newElement.hide();

		//append the hidden html element
		list.append(newElement);

		//fade it in
		newElement.fadeIn("slow");
    }

	//creating an array out of the appended list for the heck of it
	arrayList.push("<div>"+newTaskVal+"</div>");
	console.log(arrayList);

	//clear text after click
	newTask.val('');
}

	//I'm trying to remove a clicked on div item

function afterFadeOut(){

}

function handleCheckBoxes(event){
	console.log('handleNewTask');
	var list = $('#todos');
	var newTask = $('#todoItem');
	var newTaskVal = newTask.val();

	var cList =  $('.completed');

    //$(this).children('input').prop('checked',true);

  if($(this).prop('checked'))
  {
  	// $(this).parent().hide();

    var liElt = $(this).parent();
  	liElt.fadeOut('slow', function(){
    	cList.append(liElt);
  	    liElt.fadeIn('slow');	
  	});

  }
   else{
   $(this).parent().hide();
   	list.append($(this).parent());
   	$(this).parent().fadeIn('slow');
   }
	//$(this).remove();
	
}

function newPage(){
	window.open('form.php');
}

$(document).ready(setUp);


 


