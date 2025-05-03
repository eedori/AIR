document.addEventListener("DOMContentLoaded", async () => {
    const input = document.getElementById("url");
    const saveBtn = document.getElementById("save");
  
    const stored = await chrome.storage.local.get("redirectUrl");
    if (stored.redirectUrl) input.value = stored.redirectUrl;
  
    saveBtn.addEventListener("click", () => {
      chrome.storage.local.set({ redirectUrl: input.value }, () => {
        alert("Refresh imdb! ;)");
      });
    });
  });