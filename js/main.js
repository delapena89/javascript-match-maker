$(document).on('ready', function() {

});//document ready

var studentArray = [];
var mentorArray = [];
var students = true;
var mentors = false;

$('form').on('submit',function(e){
  e.preventDefault();
    //hide submit button when clicked
    $(".submit").hide();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var city = $('#city').val();
    if(students === true){
        createdStudent = new newStudent(name, phone, city);
        studentArray.push(createdStudent);
        console.log(studentArray);
        //add new student to student array
    } else {
        createdMentor = new newMentor(name, phone, city);
        //add new mentor into mentor array
        mentorArray.push(createdMentor);
        console.log(mentorArray);
    }


    // //clear div before submit
    $('form input').val('');
    //add buttons to add new student or proceed to mentors
    $(".add-another").append(" <h4 class=\'text\'>Add Another?</h4> <button class=\"btn btn-default yes\">Yes</button> <button class=\"btn btn-default no\">No</button>");

//add student functionality
    $(".yes").click(function(){
       // e.preventDefault();
       //show submit button when clicked
       $(".submit").show();
       $(".text").hide();
       $(".yes").hide();
       $(".no").hide();
   });

//'no' add student functionalilty
  $(".no").click(function(){
   // e.preventDefault();
   if (mentors === true) {
    $(".container").html('');
        // populate DOM function

        listPeople('Student', studentArray);
        listPeople('Mentor', mentorArray);
    }

    if (students === true) {
        students = false;
        mentors = true;
        $('.student-mentor').html("Add a Mentor!");
       //show submit button when clicked
       $(".text").hide();
       $(".yes").hide();
       $(".no").hide();
       $(".submit").show();
   }
});
});


function listPeople(type, array) {
$('.container').append("<table class='table table-striped'>" + "<thead>" + "<tr>" + "<th>" + type + " Name</th>" + "<th>" + type + " Phone Number</th>" + "<th>" + type + " City</th>" + "</tr>" + "</thead>" + "<tbody id='" + type + "'></tbody>");
for (var i = 0 ; i < array.length; i++) {
      $('#' + type).append
      ("<tr>" +
       "<td>" + array[i].name + "</td>" +
       "<td>" + array[i].phone + "</td>" +
       "<td>" + array[i].city + "</td>" +
       "</tr>");
      }
    }


// <table class="table table-striped">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody id='table'>
//         <tr>
//           <th scope="row">1</th>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <th scope="row">2</th>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <th scope="row">3</th>
//           <td>Larry</td>
//           <td>the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </table>


