import { defineConfig } from "vite";
import htmlPlugin from "vite-plugin-html-config";
import react from "@vitejs/plugin-react-swc";

const htmlPluginOpt = {
  favicon: "./favicon.ico",
  headScripts: [
    ` window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-KXM4TWCZT9');`,
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-KXM4TWCZT9",
      type: "module",
    },
  ],
  metas: [
    {
      name: "keywords",
      content:
        "rohan hussain portfolio full stack software engineer react nextjs app router",
    },
    {
      name: "description",
      content:
        "Rohan Hussain is an Ex-Airlift Ex-Educative Software Engineer who graduated from LUMS in 2022 and worked as Team Lead at Open Data Pakistan as well as at the Institute of Emerging Careers (IEC).",
    },
    { name: "robots", content: "index, follow" },
  ],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin(htmlPluginOpt)],
});
