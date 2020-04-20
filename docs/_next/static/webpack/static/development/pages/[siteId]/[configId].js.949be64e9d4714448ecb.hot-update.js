webpackHotUpdate("static\\development\\pages\\[siteId]\\[configId].js",{

/***/ "./components/ResultBoard.tsx":
/*!************************************!*\
  !*** ./components/ResultBoard.tsx ***!
  \************************************/
/*! exports provided: ResultBoard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultBoard", function() { return ResultBoard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StatusChips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatusChips */ "./components/StatusChips.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./components/constants.ts");

var _jsxFileName = "C:\\projects\\projectq\\a11y-dashboard-next\\components\\ResultBoard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var styles = function styles(theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    pagesList: {
      maxHeight: "calc(100vh - ".concat(theme.spacing(24), "px)"),
      overflow: 'auto'
    },
    pageContent: {
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(2)
    }
  });
};

var sortPage = function sortPage(p1, p2) {
  return p1.url < p2.url ? -1 : 1;
};

var ResultBoard = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(function (props) {
  var classes = props.classes,
      children = props.children,
      currentPageId = props.currentPageId,
      config = props.config;
  var tasks = config.tasks,
      pages = config.pages,
      site = config.site,
      configId = config._id;
  var currentItemRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var listContainerRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      showError = _React$useState2[0],
      setShowError = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      showWarning = _React$useState4[0],
      setShowWarning = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      showNotice = _React$useState6[0],
      setShowNotice = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(pages),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      filteredPages = _React$useState8[0],
      setFilteredPages = _React$useState8[1];

  var completedTasks = tasks.filter(function (t) {
    return t.completedDate;
  });
  var lastCompletedTask = completedTasks.sort(function (t1, t2) {
    return t2.completedDate - t1.completedDate;
  })[0];
  var currentTaskId = lastCompletedTask._id;
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!currentItemRef.current || !listContainerRef.current) return;
    setTimeout(function () {
      return listContainerRef.current.scrollTo({
        top: currentItemRef.current.offsetTop,
        behavior: 'smooth'
      });
    }, 750);
  }, [currentItemRef, listContainerRef, showError, showWarning, showNotice]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    setFilteredPages(pages.filter(function (cp) {
      return (!showError || cp.errorCount) && (!showWarning || cp.warningCount) && (!showNotice || cp.noticeCount);
    }).sort(sortPage));
  }, [showError, showWarning, showNotice]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    lg: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    row: true,
    style: {
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      checked: showError,
      onChange: function onChange(ev) {
        return setShowError(ev.target.checked);
      },
      name: "ErrorPages",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }),
    label: "Errors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      checked: showWarning,
      onChange: function onChange(ev) {
        return setShowWarning(ev.target.checked);
      },
      name: "WarningPages",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }),
    label: "Warnings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      checked: showNotice,
      onChange: function onChange(ev) {
        return setShowNotice(ev.target.checked);
      },
      name: "NoticePages",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }),
    label: "Notices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    align: "center",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, filteredPages.length, " pages")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: classes.pagesList,
    ref: listContainerRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, filteredPages.map(function (cp) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      key: cp._id,
      component: "a",
      button: true,
      href: "".concat(_constants__WEBPACK_IMPORTED_MODULE_4__["BASE_URL"], "/").concat(site._id, "/").concat(configId, "/").concat(cp._id, "/").concat(currentTaskId),
      selected: cp._id == currentPageId,
      ref: cp._id == currentPageId ? currentItemRef : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
      primary: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        variant: "body1",
        color: cp.title ? "textPrimary" : "error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, cp.title || __jsx("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Untitled Page"))),
      secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        variant: "body2",
        gutterBottom: true,
        component: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, cp.url), __jsx(_StatusChips__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "body2",
        errorCount: cp.errorCount,
        warningCount: cp.warningCount,
        noticeCount: cp.noticeCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })),
      disableTypography: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }));
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    lg: 9,
    className: classes.pageContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, children));
});
/* harmony default export */ __webpack_exports__["default"] = (ResultBoard);

/***/ })

})
//# sourceMappingURL=[configId].js.949be64e9d4714448ecb.hot-update.js.map