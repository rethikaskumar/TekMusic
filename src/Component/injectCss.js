const injectCss = (css, meta) => {
  if (typeof document === 'undefined') return; // Guard for SSR

  const head = document.getElementsByTagName('head')[0];
  if (!head) return;

  // Check if style already exists
  let style = head.querySelector(`style[data-meta="${meta}"]`);
  if (!style) {
    style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.setAttribute('data-meta', meta);
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css; // For old IE
  } else {
    style.textContent = css; // Modern browsers
  }
};

export default injectCss;
