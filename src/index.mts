import type * as SuseeTypes from "@suseejs/types";

function suseeBannerText(bannerText: string): SuseeTypes.SuseePlugin {
  return {
    type: "post-process",
    async: false,
    group: "plugin",
    name: "@suseejs/plugin-banner-text",
    func: (code, file) => {
      if (file?.match(/.js/g)) {
        code = `${bannerText}\n\n${code}`;
      }
      return code;
    },
  };
}

export default suseeBannerText;
