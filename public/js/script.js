$(document).ready(function () {
    console.log("doc is ready");
    checkAddNote();
});

function checkAddNote() {
    $('#buttonAddNote').click(function () {
        console.log("click");
    });
}