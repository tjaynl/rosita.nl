import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import date from "lume/plugins/date.ts";
import imagick from "lume/plugins/imagick.ts";
import inline from "lume/plugins/inline.ts";
import esbuild from "lume/plugins/esbuild.ts";
import metas from "lume/plugins/metas.ts";
import netlify_cms from "lume/plugins/netlify_cms.ts";
import postcss from "lume/plugins/postcss.ts";
import sass from "lume/plugins/sass.ts";
import svgo from "lume/plugins/svgo.ts";

const site = lume(
    {
        location: new URL("https://rosita.nl"),
        src: "./_src",
        server: {
            page404: "/404/",
        },
    },
);

site
    .copy("static", ".")
    .use(sass())
    .use(postcss())
    .use(inline())
    .use(imagick())
    .use(svgo())
    .use(esbuild({
        extensions: [".js"],
    }))
    .use(metas())
    .use(basePath())
    .use(date({
        formats: {
            "MY_FORMAT": "dd-MM-yyyy",
        },
    }))
    .use(netlify_cms());

export default site;
