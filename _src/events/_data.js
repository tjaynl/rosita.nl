export const type = "event";
export const layout = "layouts/events.njk";
export const templateEngine = "njk,md";
export const bodyClass = "event";
export const areaDescription = "Lokale evenementen";

export function url(page) {
    return `/events/${page.data.title}/`
}