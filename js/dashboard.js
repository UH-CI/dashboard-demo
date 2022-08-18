$(".vis-container").each(function () {
    const leftControl = $(this).children(".vis-nav.left");
    const rightControl = $(this).children(".vis-nav.right");
    const visPanels = $(this).children(".vis-panels").children(".vis-panel");
    let activeIndex;

    const checkEnd = () => {
        if(activeIndex == 0) {
            leftControl.addClass("end");
        }
        else {
            leftControl.removeClass("end");
        }
        if(activeIndex == visPanels.length - 1) {
            rightControl.addClass("end");
        }
        else {
            rightControl.removeClass("end");
        }
    }

    visPanels.each(function (index) {
        if($(this).hasClass("active")) {
            activeIndex = index;
            checkEnd();
        }
    });

    leftControl.on("click", (e) => {
        $(visPanels[activeIndex--]).removeClass("active");
        $(visPanels[activeIndex]).addClass("active");
        checkEnd();
    });
    rightControl.on("click", (e) => {
        $(visPanels[activeIndex++]).removeClass("active");
        $(visPanels[activeIndex]).addClass("active");
        checkEnd();
    });
});