/*
 * SINGLE SOURCE OF TRUTH for the paid kit's Gumroad link.
 *
 * This is the ONLY file that should ever contain the Gumroad permalink.
 * Every buy button on the site reads from here via link-inject.js — never
 * hardcode the URL in an HTML file.
 *
 * LIVE 2026-08-21: HELM verified the product page directly — is_published:
 * true, price 1400 ($14.00), file attached (22 pages, 1.57MB), thumbnail
 * set. Permalink eriypb.
 */
window.SITE_CONFIG = {
  GUMROAD_PERMALINK: "https://salama62.gumroad.com/l/eriypb",
  UTM_SOURCE: "datenight",
  UTM_MEDIUM: "site"
};
