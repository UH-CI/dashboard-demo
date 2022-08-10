//extend jquery with syncLoad function to allow html components relying on scripts to be loaded before further script executions
$.fn.extend({
    syncLoad: function (url) {
        const res = $.ajax({
            url: url,
            async: false,
            type: "GET"
        }).responseText;
        $("#navbar").html(res);
    }
});

function triggerAnchor(anchor, lastAnchor) {
    if(lastAnchor) {
        $(lastAnchor).removeClass("active");
    }
    $(anchor).addClass("active");
    $(`${anchor}-tab`)[0].click();
}

function setupNavAnchors() {
    let anchors = ["#overview", "#substance-abuse", "#mental-health", "#co-occurring", "#behavioral-crisis"]
    for(let anchor of anchors) {
        console.log($(`${anchor}-tab`)[0]);
        $(`${anchor}-tab`)[0].onclick = () => {
            window.location.hash = anchor;
        };
    }
}

//load footer async, doesn't require other scripts
$("#footer").load("../html/components/layout/footer.html");
//sync load navbar since it needs to be loaded before other scripts are executed
$("#navbar").syncLoad("../html/components/layout/navbar.html");

const activeLink = window.location.pathname;
switch(activeLink) {
    case "/html/dashboard.html": {
        setupNavAnchors();
        let anchor = $(location).attr('hash');
        if(!anchor) {
            anchor = "#overview";
            window.location.hash = anchor;
        }
        //if in dashboard expand dashboard menu
        $("#dashboard").addClass("open");
        triggerAnchor(anchor, null);
        let lastAnchor = anchor;
        $(window).on('hashchange', function(e){
            anchor = $(location).attr('hash');
            triggerAnchor(anchor, lastAnchor);
            lastAnchor = anchor
        });
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



    
