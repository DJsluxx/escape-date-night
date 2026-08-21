/*
 * SINGLE SOURCE OF TRUTH for the paid kit's Gumroad link.
 *
 * This is the ONLY file that should ever contain the Gumroad permalink.
 * Every buy button on the site reads from here via link-inject.js — never
 * hardcode the URL in an HTML file. To point the site at the real product
 * once FORGE hands off the permalink, edit ONE line below and push.
 *
 * PENDING: FORGE is building the paid PDF this run and has not yet handed
 * HELM the permalink. Until it lands, the CTA points at our own Gumroad
 * seller root (real, ours, on-topic-neutral) rather than a URL that would
 * 404, and rather than the kids' kit index (wrong audience for an adult
 * date-night buyer). Swap GUMROAD_PERMALINK to the real deep link
 * (https://salama62.gumroad.com/l/xxxxx) the moment it exists — that is
 * the only edit needed anywhere on this site.
 */
window.SITE_CONFIG = {
  GUMROAD_PERMALINK: "https://salama62.gumroad.com",
  GUMROAD_PERMALINK_IS_PLACEHOLDER: true,
  UTM_SOURCE: "datenight",
  UTM_MEDIUM: "site"
};
