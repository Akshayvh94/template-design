
$(function () {

    let length = $(".template").length;

    for (let i = 0; i < length; i++) {
        $(".template").eq(i).css({
            animationDelay: "0." + i + "s"
        });
    };



    $(".template-invoke").on("click", function () {
        $(".VSTemplateSelection").fadeIn('fast');
    });
    $(".template-close").on("click", function () {
        $(".VSTemplateSelection").fadeOut('fast');
    });

    $(".template-group-item").on('click', function (e) {
        e.preventDefault();
        $(".template-group-item").removeClass('active');
        $(this).addClass('active');
    });

    $(".template").on("click", function () {
        $(".template").removeClass("selected");
        $(this).addClass("selected");
    });

    let images = {
        list: [
            "https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945__340.jpg",
            "https://visualstudioplatformteam.gallerycdn.vsassets.io/extensions/visualstudioplatformteam/colorthemesforvisualstudio/1.0.9/1545386666618/283652/1/GreenShahTheme.png",
            "https://visualstudio.microsoft.com/wp-content/uploads/2017/11/microsoft-visual-studio-ide-develop-1.png"
                ]
    };

    let imgValues = images.list.join(',');

    $(".template__block").attr('data-images', imgValues);

    $(document).on('mouseover',".selected__preview img", function () {
        let src = $(this).attr("src");
        $(".preview__image .img__preview").attr('src',src);
        $(".preview__image").removeClass("d-none");
        $(".template__block").addClass('blur');
    });
    $(document).on('mouseout',".selected__preview img", function () {
        $(".preview__image").addClass("d-none");
        $(".template__block").removeClass('blur');
    });

    $(".template__block").on('click', function () {
        $(".selected__preview").empty();
        $(".selected__preview").addClass("d-none");
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        let selectedTitle = $(this).find("h4").text();
        let selectedDesc = $(this).data('description');
        $(".selected__title").text(selectedTitle);
        $(".selected__desc").html(selectedDesc);
        let selectedImages = $(this).data('images').split(',');
        if (selectedImages) {
            $(".selected__preview").removeClass("d-none");
            let imagePreviews;
            for (image of selectedImages) {
                const imgElement = $("<img>", {
                    src: image,
                    class: "template_image"
                });
                $(".selected__preview").append(imgElement);


            }
        }
    });
});