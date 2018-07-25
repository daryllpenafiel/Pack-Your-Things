$(document).ready(function () {

    $("#new-item-button").on("click", function (event) {
        event.preventDefault();

        var thing_name = {
            thing_name: $("#new-item-field").val().trim()
        };
        console.log(thing_name);

        //check if input field is empty
        if (thing_name.thing_name) {
            itemPost();
        } else {
            alert("Please input an item.");
        }

        function itemPost() {
            $.ajax("/api/list", {
                type: "POST",
                data: thing_name
            }).then(function () {
                console.log(thing_name + " added");
                location.reload();
            })
        }

    });

    $(".pack-item-button").on("click", function () {
        event.preventDefault();

        var id = $(this).attr("id");
        console.log("update " + id);

        $.ajax("/api/list/" + id, {
            type: "PUT",
            data: id
        }).then(
            function () {
                console.log("item packed");
                window.location.reload();
            }
        );
    });

    $(".delete-item-button").on("click", function () {
        var id = $(this).attr("id");
        console.log('WTF!');
        $.ajax("/api/list/" + id, {
            type: "DELETE"
        }).then(
            function () {
                window.location.reload();
            }
        );

    });

});