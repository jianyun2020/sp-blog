import { format } from "date-fns";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import anchor from "markdown-it-anchor";
import string from "string";
import toc from "markdown-it-toc-done-right";

export const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export const formatTime = (timestamp, options = "yyyy/MM/dd HH:MM") => {
  return format(timestamp, options);
};

export const markdownIt = (content, openAnchor = false) => {
  const md = new MarkdownIt({
    html: false, // Enable HTML tags in source
    xhtmlOut: true, // Use '/' to close single tags (<br />).
    // This is only for full CommonMark compatibility.
    breaks: true, // Convert '\n' in paragraphs into <br>
    langPrefix: "language-", // CSS language prefix for fenced blocks. Can be
    // useful for external highlighters.
    linkify: true, // Autoconvert URL-like text to links

    // Enable some language-neutral replacement + quotes beautification
    typographer: false,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs custom-code-style"><code>' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true })
              .value +
            "</code></pre>"
          );
        } catch (__) {}
      }

      return (
        '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
      );
    },
  });

  if (openAnchor) {
    md.use(anchor, {
      slugify,
      permalink: anchor.permalink.linkInsideHeader({
        symbol: "§",
        placement: "before",
      }),
    }).use(toc, { slugify,
      listClass: 'list-class',
      itemClass: 'item-class',
      linkClass: 'link-class',
      listType: 'ul',
    });
  }

  return md.render(content);
};

const slugify = (s) => string(s).slugify().toString();

