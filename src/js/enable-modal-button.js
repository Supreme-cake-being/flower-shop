$(document).ready(function() {
    $('#modal-name').on('input change', function()  {
        if($(this).val() != '') {
            $('#modal-submit').prop('disabled', false);
        } else {
            $('#modal-submit').prop('disabled', true);
        }
    });
});