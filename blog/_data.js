export const type = "post";
export const layout = "layouts/blog-post.vto";
export const templateEngine = "vto,md";
export const description = "Radio Rosita Blog";

export function url(page) {
  return `/blog/${page.data.title}/`
}
