(async function () {
  const filmIdMatch = window.location.pathname.match(/\/title\/(tt\d+)/);
  const filmId = filmIdMatch ? filmIdMatch[1] : null;

  console.log("Detected film ID:", filmId);

  if (!filmId) return;

  const { redirectUrl } = await chrome.storage.local.get("redirectUrl");

  if (!redirectUrl || !redirectUrl.includes("{id}")) return;


  const btn = document.createElement("button");
  btn.innerText = "🎬 Redirect ID";

  Object.assign(btn.style, {
    position: "fixed",
    top: "12px",
    left: "12px",
    zIndex: "9999",
    backgroundColor: "#2e7d32", // forest green
    color: "white",
    padding: "10px 14px",
    border: "none",
    borderRadius: "6px",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: "14px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out"
  });

  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = "#2e7d32"; // IMDb yellow
    btn.style.color = "white"; // dark text on yellow
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "#2e7d32";
    btn.style.color = "white";
    btn.style.transform = "scale(1)";
  });

  btn.addEventListener("click", () => {
    const finalUrl = redirectUrl.replace("{id}", filmId);
    window.open(finalUrl, "_blank");
  });

  document.body.appendChild(btn);
})();
