/*
 * SINGLE SOURCE OF TRUTH for the paid kit's Gumroad link.
 *
 * This is the ONLY file that should ever contain the Gumroad permalink.
 * Every buy button on the site reads from here via link-inject.js — never
 * hardcode the URL in an HTML file. To point the site at the real product
 * once FORGE hands off the permalink, set GUMROAD_PERMALINK below and push.
 *
 * PENDING: FORGE is building the paid PDF this run and has not yet handed
 * HELM the permalink. GUMROAD_PERMALINK is left null on purpose — the
 * Gumroad seller root (salama62.gumroad.com) serves HTTP 200 with ZERO
 * /l/ product links (empty shop window, the same defect that bounced real
 * visitors in cycle 026), so it must never be used as a placeholder link.
 * When null, link-inject.js repoints every buy button at the free puzzle
 * instead — a visible, honest fallback instead of a dead end.
 */
window.SITE_CONFIG = {
  GUMROAD_PERMALINK: null,
  UTM_SOURCE: "datenight",
  UTM_MEDIUM: "site"
};
