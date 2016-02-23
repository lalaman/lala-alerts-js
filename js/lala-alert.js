/*============================================================
    Lala Alert 0.1
    By lalaman
================================

    I only made this because I was bored. But anyway, this alert plugin
    is for popping up alerts of different statuses (currently 4 right now).
    But feel free to add more if you'd like. I took the colours for Twitter's
    Bootstrap alerts (http://v4-alpha.getbootstrap.com/components/alerts/)

    I used vanilla js for this alert plugin so it should run pretty fast. Feel
    free to optimize it even more.

=============================================================*/

window.onload = function() {
    /*
    *   Everything inside this window.onload function is custom/personal
    *   JS that you don't need worry about. The only section you need is
    *   the createAlert function below.
    */
    var alert_wrapper = document.getElementById("lala-alert-wrapper"),
        success_button = document.getElementById("alert-success"),
        info_button = document.getElementById("alert-info"),
        warning_button = document.getElementById("alert-warning"),
        danger_button = document.getElementById("alert-danger"),
        button_array = [success_button, info_button, warning_button, danger_button],
        timeout = 8000; //Number of milliseconds before alert disappears

    //Attach listeners for all buttons
    for (var i = 0; i < button_array.length; i++) {
        button_array[i].addEventListener("click", function() {
            var message = this.getAttribute("alert-message");
            var status =this.getAttribute("alert-status");
            createAlert(message, status, timeout);
        });
    };
};

/**
* Creates an alert div element
* @param {String} message
* @param {String} status
* @param {Integer} timeout
* @return {Element} sum
*/
function createAlert(message, status, timeout) {

	//Used to determine whether to remove setTimeout or not
    var timeout_check;

    //Create alert element
    var alert = document.createElement("div");
    alert.className += "animation-target lala-alert ";

    //Attach correct colour to alert
    var status_class = "alert-" + status + " ";
    alert.className += status_class;

    //Create close button
    var close_button = document.createElement("span");
    close_button.className += " close-alert-x glyphicon glyphicon-remove";

    /*
        There are 3 event listeners:
            1. Clicking x to close alert
            2. Mousing over to prevent timeout
            3. Mousing out to start timeout
    */
    close_button.addEventListener("click", function() {
        var parent = this.parentNode;
        parent.parentNode.removeChild(parent);
    });

    alert.addEventListener("mouseover", function() {
        this.classList.remove("fade-out");
        clearTimeout(timeout_check);
    });

    alert.addEventListener("mouseout", function() {
        timeout_check = setTimeout(function() {
            var parent = alert.parent;
            alert.className += " fade-out";
            if (alert.parentNode) {
                timeout_check = setTimeout(function() {
                    alert.parentNode.removeChild(alert)
                }, 500);
            }
        }, 3000);
    });

    //Add message and close button
    alert.innerHTML = message;
    alert.appendChild(close_button);

    //Prepend new alert to container
    var alert_wrapper = document.getElementById("lala-alert-wrapper");
    alert_wrapper.insertBefore(alert, alert_wrapper.children[0]);

    //If they haven't clicked close within the timeout period, fade out and remove element
    timeout_check = setTimeout(function() {
        var parent = alert;
        parent.className += " fade-out";
        if (parent.parentNode) {
            timeout_check = setTimeout(function() {
                parent.parentNode.removeChild(parent)
            }, 500);
        }
    }, timeout);
};
