
$("#navbar").load("../html/components/navbar.html", () => {
    const activeLink = window.location.pathname;
    switch(activeLink) {
        case "/html/index.html": {
            $("#overview").addClass("active");
            break;
        }
        case "/html/project.html": {
            $("#about").addClass("active");
            break;
        }
        case "/html/support.html": {
            $("#support").addClass("active");
            break;
        }
        case "/html/documentation.html": {
            $("#documentation").addClass("active");
            break;
        }
    }
});
$("#footer").load("../html/components/footer.html")