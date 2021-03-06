(() => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
		const currentPage = tab[0].url;
		const efmrlContainer = document.getElementById('efmrl-container');
		efmrlContainer.innerHTML = `
			<iframe
				id="efmrl-portal"
				title="efmrl"
				src="https://www.efmrl.link/"
				height="500"
				width="310"
				scrolling="no"
			>
			</iframe>`;

		const efmrlPortalEl = document.getElementById('efmrl-portal');

		efmrlPortalEl.addEventListener('load', () => {
			setTimeout(() => {
				// console.log('currentPage: ', currentPage);
				const efmrlPortal = efmrlPortalEl.contentWindow;
				efmrlPortalEl.focus();
				efmrlPortal.postMessage({ currentPage }, '*');

				// Wait for message to get returned, then copy.
				window.addEventListener(
					'message',
					async (data) => {
						const { efmrlink } = data.data;
						await navigator.clipboard.writeText(efmrlink);
					},
					false
				);
			}, 1000);
		});
	});
})();
