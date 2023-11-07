
import lume from "lume/mod.ts";
import imagick from "lume/plugins/imagick.ts";
import svgo from "lume/plugins/svgo.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";
import netlify_cms from "lume/plugins/netlify_cms.ts";
import sass from "lume/plugins/sass.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import date from "lume/plugins/date.ts";
import vento from "lume/plugins/vento.ts";
import nl from "npm:date-fns/locale/nl/index.js";

const site = lume();

site
  .copy("static", "./assets")
   
  .use(imagick())
  .use(svgo())
  .use(inline())
  .use(metas())
  .use(sass())
  .use(postcss())
  .use(date({
    formats: {
      "MY_FORMAT": "dd-MM-yyyy",
    },
    locales: { nl },
  }))
  .use(vento())
  .use(netlify_cms());


export default site;
