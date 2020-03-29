(() => {
	chrome.tabs.query({ active: true, currentWindow: true }, tab => {
		const currentPage = tab[0].url;
		const efmrlContainer = document.getElementById('efmrl-container');

		efmrlContainer.innerHTML = `<iframe id="efmrl-portal" src="https://www.efmrl.link/" height="440" width="280"></iframe>`;

		const efmrlPortalEl = document.getElementById('efmrl-portal');
		const efmrlPortal = efmrlPortalEl.contentWindow;

		efmrlPortalEl.addEventListener('load', () => {
			setTimeout(() => {
				efmrlPortalEl.focus();
				efmrlPortal.postMessage(currentPage, '*');
			}, 500);
		});
	});
})();
