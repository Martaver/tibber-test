import { css } from "styled-components";

const base = 'https://tibber.com'

export const fonts = css`
@font-face{
    font-family:"BrownStd";
    src:url("${base}/en/static/fonts/lineto-brown-bold.eot");
    src:url("${base}/en/static/fonts/lineto-brown-bold.eot?#iefix") format("embedded-opentype"), url("${base}/en/static/fonts/lineto-brown-bold.woff2") format("woff2"), url("${base}/en/static/fonts/lineto-brown-bold.woff") format("woff"), url("${base}/en/static/fonts/lineto-brown-bold.ttf") format("truetype");
    font-weight:bold;
    font-style:normal;
    font-display:fallback;
}
@font-face{
    font-family:"BrownStd";
    src:src:url("${base}/en/static/fonts/lineto-brown-regular.eot");
    src:url("${base}/en/static/fonts/lineto-brown-regular.eot?#iefix") format("embedded-opentype"), url("${base}/en/static/fonts/lineto-brown-regular.woff2") format("woff2"), url("${base}/en/static/fonts/lineto-brown-regular.woff") format("woff"), url("${base}/en/static/fonts/lineto-brown-regular.ttf") format("truetype");
    font-weight:normal;
    font-style:normal;
    font-display:fallback;
}
@font-face{
    font-family:"Avenir-Next";
    src:url("${base}/en/static/fonts/avenir-next-regular.eot");
    src:url("${base}/en/static/fonts/avenir-next-regular.eot?#iefix") format("embedded-opentype"), url("${base}/en/static/fonts/avenir-next-regular.woff") format("woff"), url("${base}/en/static/fonts/avenir-next-regular.ttf") format("truetype");
    font-weight:normal;
    font-style:normal;
    font-display:fallback;
}
@font-face{
    font-family:"Avenir-Next";
    src:url("${base}/en/static/fonts/avenir-next-bold.eot");
    src:url("${base}/en/static/fonts/avenir-next-bold.eot?#iefix") format("embedded-opentype"), url("${base}/en/static/fonts/avenir-next-bold.woff") format("woff"), url("${base}/en/static/fonts/avenir-next-bold.ttf") format("truetype");
    font-weight:bold;
    font-style:bold;
    font-display:fallback;
}
`