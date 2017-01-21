$(document).ready(function () {
    showHideDivs();
    switchButtons();
    initDynatable();
});

function showHideDivs() {
    $('#btnAddNoteDiv').click(function () {
        $('#addNoteDiv').show(500);
        $('#showNoteDiv').hide(500);
    });
    $('#btnShowNotesDiv').click(function () {
        $('#addNoteDiv').hide(500);
        $('#showNoteDiv').show(500);
    });
}

function switchButtons() {
    $('#btnAddNoteDiv').click(function () {
        $('#btnAddNoteDiv').removeClass("btn-default").addClass("btn-primary");
        $('#btnShowNotesDiv').removeClass("btn-primary").addClass("btn-default");
    });
    $('#btnShowNotesDiv').click(function () {
        $('#btnShowNotesDiv').removeClass("btn-default").addClass("btn-primary");
        $('#btnAddNoteDiv').removeClass("btn-primary").addClass("btn-default");
    });
}

function newPopup() {
    $(function () {
        new PNotify({
            title: 'Title',
            text: 'Description'
        });
    });
}

function initDynatable() {
    $('#notesTable').dynatable({
        features: {
            recordCount: false
        },
        inputs: {
            queries: $('#max-price')
        }
        /*
        dataset: {
            ajax: true,
            ajaxUrl: '/dynatable-ajax.json',
            ajaxOnLoad: true,
            records: []
        }
        */
    });
}