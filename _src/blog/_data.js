export const type = "post";
export const layout = "layouts/blog-post.njk";
export const templateEngine = "njk,md";
export const bodyClass = "post";
export const image = "=image";
export const areaDescription = "Radio Rosita Blog";

export function url(page) {
    return `/blog/${page.data.title}/`
}