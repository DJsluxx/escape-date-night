/*
 * Reads window.SITE_CONFIG (assets/config.js) and wires every buy button.
 * Never hardcode the Gumroad URL in HTML — add data-gumroad-cta="<campaign>"
 * to an <a> and this fills the href with the UTM-tagged link at load time.
 */
(function () {
  function buildUrl(campaign) {
    var cfg = window.SITE_CONFIG || {};
    var base = cfg.GUMROAD_PERMALINK || "https://salama62.gumroad.com";
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
      el.href = buildUrl(el.getAttribute("data-gumroad-cta"));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireLinks);
  } else {
    wireLinks();
  }
})();
