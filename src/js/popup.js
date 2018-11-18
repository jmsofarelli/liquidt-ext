import "../css/popup.css";

openpgp.initWorker({ path:'openpgp.worker.js' });

function injectTheScript() {
	chrome.extension.getBackgroundPage().console.log('Injecting the script in the page ...');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
    });
}

injectTheScript();