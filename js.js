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


  var newElement = $('<li class="newItem"><input type="checkbox" name="todoItem" value= '+ newTaskVal +' ><label>' + newTaskVal +'</label></li>');

  if(newTaskVal.length > 0){
    // We are hiding first because the newly added element has
    // to be appended in the invisible state for the fade in effect to work.
    newElement.hide();
    list.append(newElement);
    newElement.fadeIn("slow");
  }

  //creating an array out of the appended list for the heck of it
  arrayList.push("<div>"+newTaskVal+"</div>");
  console.log(arrayList);

  //clear text after click
  newTask.val('');
}

function handleCheckBoxes(event){
 console.log('handleNewTask');
 var list = $('#todos');
 var newTask = $('#todoItem');
 var newTaskVal = newTask.val();

 var cList =  $('.completed');

  //$(this).children('input').prop('checked',true);

  if($(this).prop('checked')){

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
}

$(document).ready(setUp);





