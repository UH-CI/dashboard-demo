const anchors = new Set(["#overview", "#substance-use", "#mental-health", "#co-occurring", "#behavioral-crisis"])

//extend jquery with syncLoad function to allow html components relying on scripts to be loaded before further script executions
$.fn.extend({
    syncLoad: function (url) {
        const res = $.ajax({
            url: url,
            async: false,
            type: "GET"
        }).responseText;
        $(this).html(res);
    }
});

function triggerAnchor(anchor, lastAnchor) {
    if(lastAnchor) {
        $(`${lastAnchor}-nav-selector`).removeClass("active");
    }
    $(`${anchor}-nav-selector`).addClass("active");
    $(`${anchor}-tab-selector`)[0].click();
}

function setupNavAnchors() {
    for(let anchor of anchors) {
        $(`${anchor}-tab-selector`)[0].onclick = () => {
            window.location.hash = anchor;
        };
    }
}



//load footer async, doesn't require other scripts
$("#footer").load("/html/components/layout/footer.html");
//sync load navbar since it needs to be loaded before other scripts are executed
//navbar
$("#navbar").syncLoad("/html/components/layout/navbar.html");

//don't need entire link path, just active page, so parse out page name
const activeLink = window.location.pathname.split("/").pop();
switch(activeLink) {
    case "dashboard.html": {
        //tabs
        for(let anchor of anchors) {
            $(`${anchor}-tab-content`).syncLoad(`/html/components/dashboard-tabs/${anchor.substring(1)}.html`);
        }
        setupNavAnchors();
        let anchor = $(location).attr('hash');
        if(!anchors.has(anchor)) {
            anchor = "#overview";
            window.location.hash = anchor;
        }
        //if in dashboard expand dashboard menu
        $("#dashboard").addClass("open active");
        triggerAnchor(anchor, null);
        let lastAnchor = anchor;
        $(window).on('hashchange', function(e){
            anchor = $(location).attr('hash');
            //only trigger anchor if valid tab anchor
            if(anchors.has(anchor)) {
                triggerAnchor(anchor, lastAnchor);
                lastAnchor = anchor
            }
        });
        $.getScript("/js/dashboard.js");
        break;
    }
    case "project.html": {
        $("#about").addClass("active");
        break;
    }
    case "support.html": {
        $("#support").addClass("active");
        break;
    }
    case "documentation.html": {
        $("#documentation").addClass("active");
        break;
    }
}



    
