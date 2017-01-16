$(document).ready(function () {
    console.log("doc is ready");
    checkAddNote();
});

function checkAddNote() {
    $('#btnAddNoteDiv').click(function () {
        $('#addNoteDiv').show(500);
        $('#btnAddNoteDiv').removeClass("btn-primary").addClass("btn-default");
    });
    $('#btnShowNotesDiv').click(function () {
        $('#addNoteDiv').hide(500);
        $('#btnAddNoteDiv').removeClass("btn-default").addClass("btn-primary");
    });
}