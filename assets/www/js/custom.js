function launchBrowser() {
			var goToUrl = $("#employee_web").data('urlValue');

            window.plugins.childBrowser.showWebPage(goToUrl, { showLocationBar: true });
}
