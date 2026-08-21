/*
 * Reads window.SITE_CONFIG (assets/config.js) and wires every buy button.
 * Never hardcode the Gumroad URL in HTML — add data-gumroad-cta="<campaign>"
 * to an <a> and this fills the href with the UTM-tagged link at load time.
 *
 * If GUMROAD_PERMALINK is unset, buttons are repointed at the free puzzle
 * instead of a dead-end Gumroad link — a visible fallback, not a silent one.
 */
(function () {
  function buildUrl(campaign) {
    var cfg = window.SITE_CONFIG || {};
    var base = cfg.GUMROAD_PERMALINK;
    if (!base) return null;
    var sep = base.indexOf("?") === -1 ? "?" : "&";
    var params = [
      "utm_source=" + encodeURIComponent(cfg.UTM_SOURCE || "datenight"),
      "utm_medium=" + encodeURIComponent(cfg.UTM_MEDIUM || "site"),
      "utm_campaign=" + encodeURIComponent(campaign || "cta")
    ].join("&");
    return base + sep + params;
  }

  function wireLinks() {
    var links = document.querySelectorAll("[data-gumroad-cta]");
    for (var i = 0; i < links.length; i++) {
      var el = links[i];
      var url = buildUrl(el.getAttribute("data-gumroad-cta"));
      if (url) {
        el.href = url;
        el.textContent = el.getAttribute("data-cta-label") || el.textContent;
        el.classList.remove("cta-pending");
      } else {
        el.href = "/escape-date-night/puzzle/";
        el.textContent = "Kit coming soon — try the free puzzle";
        el.classList.add("cta-pending");
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireLinks);
  } else {
    wireLinks();
  }
})();
