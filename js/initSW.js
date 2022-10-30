const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js', {scope: "."}).then(reg => {
      reg.addEventListener('updatefound', () => {
	const newWorker = reg.installing;
	newWorker.addEventListener('statechange', () => {
	  if (newWorker.state) {
	    if (navigator.serviceWorker.controller) {
	      // new update available
	      console.log("UPDAT UHVULUHBUL");
	      new Notification("Schedule Update", {body: "An update to the class schedule is available"});
	      //resolve(true);
	    } else {
	      // no update available
	      //resolve(false);
	    }
	  }
	});
      });
    }).catch(error => console.error(`Registration failed with ${error}`));
  }
};
registerServiceWorker();

let refreshing;
navigator.serviceWorker.addEventListener('controllerchange', () => {
  if (refreshing) return;
  window.location.reload();
  refreshing = true;
});