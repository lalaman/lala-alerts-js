# Lala Alerts

I only made this because I was bored. But anyway, this alert plugin is for popping up alerts of different statuses (currently 4 right now). But feel free to add more if you'd like.

I used vanilla js for this alert plugin so it should run pretty fast. Feel free to optimize it even more. It should work with jQuery

View [live demo](http://lalaman.github.io/lala-alerts-js/)

# Usage

##### You will need bootstrap fonts and css in this project to see the "x" (close button) button on the alerts

You can choose to include the CSS file inside this project or you can customize the colours, size, and fade out duration of the alert boxes:

```css
#lala-alert-container {
    width: 300px; /* Customize the width! */
}

.lala-alert {
    transition: all 0.5s ease-in-out;   /* Edit for fadeout time */
}

.alert-success {
    color: #3c763d; /* Text colour */
    background-color: #dff0d8; /* Alert box background color */
    border-color: #d0e9c6; /* Alert box border colour */
}
```

Include the JS file by adding this to the top of your HTML header. Change the src to wherever you saved the js file
```html
<script type="text/javascript" src="js/lala-alert.js"></script>
```

Add these elements to after your content container before the \</body> tag ends. This is where the alert boxes will populate:
```html
    <!-- Lala alert section -->
    <div id="lala-alert-container"><div id="lala-alert-wrapper"></div></div>
</body>
```

Call the alert boxes using 4 statuses provided (success, info, warning, danger). They must be in lowercase to work.
### jQuery example:

```javascript
$("#my_button").click(function() {
  var message = "My alert message!";
  var status = "info";    /* There are 4 statuses: success, info, warning, danger  */
  var timeout = 5000;     /* 5000 here means the alert message disappears after 5 seconds. */

  createAlert(message, status, timeout);
});
```

### vanillaJS example:
```javascript

var my_button = document.getElementById("my_button");
my_button.addEventListener("click", function() {
  var message = "My alert message!";
  var status = "info";    /* There are 4 statuses: success, info, warning, danger  */
  var timeout = 5000;     /* 5000 here means the alert message disappears after 5 seconds. */

  createAlert(message, status, timeout);
});

```

### Inline HTML example:
```html
<button onclick="createAlert('This is a warning message!','warning',5000)">Show warning message</button>
```

Once this is done, the alert boxes will add themselves to \<div id="lala-alert-wrapper">\</div>
