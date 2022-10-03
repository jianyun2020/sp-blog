import { format } from "date-fns";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

export const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export const formatTime = (timestamp, options = "yyyy/MM/dd HH:MM") => {
  return format(timestamp, options);
};

export const markdownIt = (content) => {
  const md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs custom-code-style"><code>' +
                 hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                 '</code></pre>';
        } catch (__) {}
      }
  
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  });

  return md.render(content);
};
