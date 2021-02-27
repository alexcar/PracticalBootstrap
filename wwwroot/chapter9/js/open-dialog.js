// $(document).ready(function() {
//     $('#open-modal-button').on('click', function() {
//         $('#jsModal').modal();
//     });
// });

// $(document).ready(function() {
//     $('#open-modal-button').on('click', function() {
//         $('#jsModal').modal({
//             backdrop: false
//         });

//         return false;
//     });
// });

$(document).ready(function() {
    $('#jsModal').modal({
        backdrop: 'static',
        keyboard: false,
        show: false
    });
    
    $('#open-modal-button').on('click', function() {
       $('#jsModal') .modal('show');
        
       return false;
    });
});

$(document).ready(function() {
    $('#exampleModal').on('show.bs.modal', function(event) {
        var $buttonClicked = $(event.relatedTarget);

        $(this).find('.modal-body').html("<h1>" + $buttonClicked.html() + " Clicked!</h1>");
    });
})
