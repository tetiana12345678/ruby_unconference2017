/* Footer object and properties declaration with default values */

var footer=
{
	title: '',
};

/* Function to obtain all child elements with any of the indicated tags (from http://www.quirksmode.org/dom/getElementsByTagNames.html) */

/* Method to initialize the Footer footer */

footer.initialize=function(title)
{
	// Link to the Footer CSS

	var link=document.createElement("link");
	link.href="plugin/footer/footer.css";
	link.type="text/css";
	link.rel="stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link);

	// Initialize properties according to parameters
  var footer=document.querySelectorAll('#footer')[0];
	if (footer) {
		document.body.removeChild(footer);
		var div_class_reveal=document.querySelectorAll('.reveal')[0];
	  div_class_reveal.appendChild(footer);
	}
};
