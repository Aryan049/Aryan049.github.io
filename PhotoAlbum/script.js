window.addEventListener('DOMContentLoaded', function () {
    var photoItems = document.querySelectorAll('.photo-item');

    photoItems.forEach(function (item) {
        var photo = item.querySelector('img');
        var sliders = item.querySelectorAll('.slider');

        sliders.forEach(function (slider) {
            slider.addEventListener('input', function () {
                updatePhotoAdjustments(photo, sliders);
            });
        });

        function updatePhotoAdjustments(photo, sliders) {
            var brightness = sliders[0].value;
            var reddish = sliders[1].value;
            var sharpness = sliders[2].value;
            var exposure = sliders[3].value;
            var greyscale = sliders[4].value;

            photo.style.filter = `brightness(${brightness}%)
                               sepia(${reddish}%)
                               contrast(${sharpness}%)
                               saturate(${exposure}%)
                               grayscale(${greyscale}%)`;
        }
    });
});
