$('#send').on('click', function() {

    let product = $("#product option:selected").text();
    let name = $("#name").val();
    let tel = $("#tel").val();
    let description = $("#description").val();

    $.ajax({
        type: 'POST',
        cache: false,
        dataType: 'json',
        url: 'https://api.telegram.org/bot5737722228:AAGPGv7yq3wxWrFcUA8bhKrd1P7rU7ZJ0IM/sendMessage',
        data: { chat_id: 411986459, text: "<b>Замовлення:</b>\n\nПродукт: " + product + '\n\nЗвати: ' + name + '\n\nТелефон: ' + tel + '\n\nПобажання: ' + description, parse_mode: "html" },
        success: function (data) {

            // if(data.ok == true) {
            //     // console.log(JSON.parse(data.result.text));
            // }
        }
    });

    $("#product option:selected").text('...');
    $("#name").val('');
    $("#tel").val('');
    $("#description").val('');

});
