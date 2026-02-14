import type * as SuseeTypes from "@suseejs/types";

const suseeBannerText: SuseeTypes.SuseePluginFunction = (
  bannerText: string,
): SuseeTypes.SuseePlugin => {
  return {
    type: "post-process",
    async: false,
    func: (code, _file) => {
      return `${bannerText}\n\n${code}`;
    },
  };
};

export default suseeBannerText;
