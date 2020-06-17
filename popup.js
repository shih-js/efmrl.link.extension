(() => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
		const currentPage = tab[0].url;
		const efmrlContainer = document.getElementById('efmrl-container');
		efmrlContainer.innerHTML = `
			<iframe
				id="efmrl-portal"
				title="efmrl"
				src="https://www.efmrl.link/"
				height="440"
				width="280"
				scrolling="no"
				allow="
					clipboard-write;
					clipboard-write '*';
				"
			>
			</iframe>`;

		const efmrlPortalEl = document.getElementById('efmrl-portal');

		efmrlPortalEl.addEventListener('load', () => {
			setTimeout(() => {
				console.log('currentPage: ', currentPage);
				const efmrlPortal = efmrlPortalEl.contentWindow;
				efmrlPortalEl.focus();
				efmrlPortal.postMessage({ currentPage }, '*');
				// efmrlPortal.postMessage(currentPage, '*');
				// efmrlPortal.postMessage({ type: 'copy-to-clipboard', currentPage }, '*');
			}, 1000);
		});
	});
})();
