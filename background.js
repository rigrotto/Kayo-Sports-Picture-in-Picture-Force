chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.querySelectorAll('video').forEach(v => {
        v.disablePictureInPicture = false;
        v.requestPictureInPicture().catch(err => console.log(err));
      });
    }
  });
});
