(() => {
	chrome.tabs.query({ active: true, currentWindow: true }, tab => {
		const efmrlContainer = document.getElementById("efmrl-container");
		const currentPage = tab[0].url;
		efmrlContainer.innerHTML = `<iframe id="efmrl-portal" src="https://efmrl.link/" height="480" width="320"></iframe>`;
		// efmrlContainer.innerHTML = `<iframe id="efmrl-portal" src="http://localhost:3000/" height="480" width="320" data-url=${currentPage}></iframe>`;

		const efmrlPortalEl = document.getElementById("efmrl-portal");
		const efmrlPortal = efmrlPortalEl.contentWindow;

		efmrlPortalEl.addEventListener("load", () => {
			efmrlPortalEl.focus();
			efmrlPortal.postMessage(currentPage, "*");
		});
	});
})();
