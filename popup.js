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
				allow="layout-animations '*';
					unoptimized-images '*';
					oversized-images '*';
					sync-script '*';
					sync-xhr '*';
					unsized-media '*';"
			>
			</iframe>`;

		const efmrlPortalEl = document.getElementById('efmrl-portal');

		efmrlPortalEl.addEventListener('load', () => {
			console.log('currentPage: ', currentPage);
			setTimeout(() => {
				const efmrlPortal = efmrlPortalEl.contentWindow;
				efmrlPortalEl.focus();
				efmrlPortal.postMessage(currentPage, '*');
				// efmrlPortal.postMessage({ type: 'copy-to-clipboard', currentPage }, '*');
			}, 500);
		});
	});
})();
