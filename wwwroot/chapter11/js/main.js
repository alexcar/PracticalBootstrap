$(document).ready(function() {
    $('[data-toggle=tooltip]').tooltip({
        delay: {
            show: 1000, // 1 seconds
            hide: 1000
        },
        html: true
    });

    $('[data-toggle=popover]').popover({
        html: true
    })
});