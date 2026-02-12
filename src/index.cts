import type SuseeTypes = require("@suseejs/types");

function suseeBannerText(bannerText: string): SuseeTypes.SuseePlugin {
  return {
    type: "post-process",
    async: false,
    func: (code, file) => {
      if (file?.match(/.js/g)) {
        code = `${bannerText}\n\n${code}`;
      }
      return code;
    },
  };
}

export = suseeBannerText;
