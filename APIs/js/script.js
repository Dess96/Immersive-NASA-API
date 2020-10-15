const key = 'aX3AZPgwjyZayLyUlwKRfKBnIltWHkTVd90KndcC';

function buttonClicked() {
    $(function () {
        $.ajax({
            type: 'GET',
            url: `https://api.nasa.gov/planetary/apod?api_key=${key}`,
            success: function (data) {
                console.log(data);
                $('.img-div').show();
                $('.nasa-img').attr('src', data.url);
                $('.nasa-title').text(data.title);
                $('.nasa-desc').text(data.explanation);
            }
        })
    });
}

function buttonDateClicked() {
    $(function () {
        let inDate = $("#date-input").val();
        $.ajax({
            type: 'GET',
            url: `https://api.nasa.gov/planetary/apod?api_key=${key}`,
            data: { date: `${inDate}` },
            success: function (data) {
                console.log(data);
                $('.date-div').show();
                $('.date-img').attr('src', data.url);
                $('.date-title').text(data.title);
                $('.date-desc').text(data.explanation);
            }
        })
    });
}