let dev = (function() {
  const LS_SHOW_GRID_OVERLAY = 'showGridOverlay';
  const GRID_OVERLAY_CLASSNAME = 'u-grid-overlay';
  let rootElement = document.documentElement;

  let isGridOn = false,
      $html    = document.querySelector('html');

  let hasGridClass = function () {
    if ($html.classList) {
      return $html.classList.contains(GRID_OVERLAY_CLASSNAME);
    } else {
      return new RegExp('(^| )' + GRID_OVERLAY_CLASSNAME + '( |$)', 'gi').test($html.className);
    }
  };

  let addGridClass = function () {
    if ($html.classList) {
      $html.classList.add(GRID_OVERLAY_CLASSNAME);
    } else {
      $html.className += ' ' + GRID_OVERLAY_CLASSNAME;
    }
  };

  let removeGridClass = function () {
    if ($html.classList) {
      $html.classList.remove(GRID_OVERLAY_CLASSNAME);
    } else {
      $html.className = $html.className.replace(new RegExp('(^|\\b)' + GRID_OVERLAY_CLASSNAME.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  };

  return {
    init: function() {
      isGridOn = localStorage.getItem(LS_SHOW_GRID_OVERLAY);
      if ('on' === isGridOn) {
        this.gridOn();
      }

      return this;
    },
    gridOn: function() {
      localStorage.setItem(LS_SHOW_GRID_OVERLAY, 'on');
      if (!hasGridClass()) {
        addGridClass();
      }
    },
    gridOff: function() {
      localStorage.setItem(LS_SHOW_GRID_OVERLAY, 'off');
      if (hasGridClass()) {
        removeGridClass();
      }
    },
    toggleGrid: function() {
      if (hasGridClass()) {
        this.gridOff();
      } else {
        this.gridOn();
      }
    },
    toggleGutter: function () {
      let currentGutter = getComputedStyle(rootElement).getPropertyValue('--gutter');
      let gutter = ('1px' === currentGutter) ? '30px' : '1px';
      rootElement.style.setProperty('--gutter', gutter, '');
    }
  };

})().init();

// SHIFT + G-re overlay ki/be
document.addEventListener("keypress", function(e) {
  if (e.keyCode === 71 && (navigator.platform.match("Mac") ? e.metaKey : e.shiftKey)) {
    e.preventDefault();
    dev.toggleGrid();
  }

  if (e.keyCode === 72 && (navigator.platform.match("Mac") ? e.metaKey : e.shiftKey)) {
    e.preventDefault();
    dev.toggleGutter();
  }
}, false);

window.dev = dev;