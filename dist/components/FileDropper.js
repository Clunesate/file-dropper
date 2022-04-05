"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.includes.js");

var _react = require("react");

var _clsx = _interopRequireDefault(require("clsx"));

require("../scss/app.scss");

var _fileCheck = require("../images/file-check.svg");

var _wrongFile = require("../images/wrong-file.svg");

var _microsoftExcel = require("../images/microsoft-excel.svg");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FileDropper(_ref) {
  let {
    callbackFile,
    containerClasses = [],
    blockClasses = [],
    acceptFiles = '',
    fileSize = 104857600,
    fileIconComponent = undefined,
    validateSuccessIconComponent = undefined,
    validateWrongIconComponent = undefined
  } = _ref;
  const [dragging, setDragging] = (0, _react.useState)(false);
  const [error, setError] = (0, _react.useState)('');
  const [selectedFile, setSelectedFile] = (0, _react.useState)({});
  (0, _react.useEffect)(() => {
    const div = document.getElementById('dropped-block');
    div.addEventListener('dragenter', handleDragIn);
    div.addEventListener('dragleave', handleDragOut);
    div.addEventListener('dragover', handleDrag);
    div.addEventListener('drop', handleDrop);
  });
  (0, _react.useEffect)(() => {
    return () => {
      const div = document.getElementById('dropped-block');
      div === null || div === void 0 ? void 0 : div.removeEventListener('dragenter', handleDragIn);
      div === null || div === void 0 ? void 0 : div.removeEventListener('dragleave', handleDragOut);
      div === null || div === void 0 ? void 0 : div.removeEventListener('dragover', handleDrag);
      div === null || div === void 0 ? void 0 : div.removeEventListener('drop', handleDrop);
    };
  });

  const handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      upload(e.dataTransfer);
      e.dataTransfer.clearData();
    }

    setDragging(false);
  };

  const upload = target => {
    const file = target === null || target === void 0 ? void 0 : target.files[0];

    if (file) {
      if (acceptFiles.includes(file.type)) {
        if (file.size > fileSize) setError("\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 ".concat(fileSize));else {
          setSelectedFile(file);
          callbackFile(file);
        }
      } else {
        setError('Не верный формат файла');
        setSelectedFile({});
      }
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _clsx.default)('uploader', [...containerClasses]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _clsx.default)('uploader__block', {
        'uploader__block_dragging': dragging
      }, [...blockClasses]),
      onClick: () => document.getElementById('input-file-uploader').click(),
      id: 'dropped-block',
      children: [fileIconComponent ? fileIconComponent : /*#__PURE__*/(0, _jsxRuntime.jsx)(_microsoftExcel.ReactComponent, {
        width: 40,
        height: 40,
        fill: '#545454'
      }), !selectedFile.name && !error && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: 'mt-3',
        children: "\u0414\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0444\u0430\u0439\u043B\u0430 \u043A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u043D\u0430 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u0443\u044E \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0441 \u0432\u0430\u0448\u0435\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
      }), selectedFile.name && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("b", {
            children: ["\u0418\u043C\u044F: ", selectedFile.name]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          className: 'd-flex align-items-center justify-content-center mt-2',
          children: [validateSuccessIconComponent ? validateSuccessIconComponent : /*#__PURE__*/(0, _jsxRuntime.jsx)(_fileCheck.ReactComponent, {
            width: 20,
            height: 20,
            fill: 'green'
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: 'm-0 ms-2',
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
              children: "\u0412\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0444\u0430\u0439\u043B"
            })
          })]
        })]
      }), error && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: 'd-flex align-items-center justify-content-center mt-2',
        children: [validateWrongIconComponent ? validateWrongIconComponent : /*#__PURE__*/(0, _jsxRuntime.jsx)(_wrongFile.ReactComponent, {
          width: 20,
          height: 20,
          fill: '#bb2d3b'
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: 'm-0 ms-2',
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
            children: error
          })
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "file",
      className: 'd-none',
      id: 'input-file-uploader',
      onChange: e => upload(e.target),
      accept: acceptFiles
    })]
  });
}

var _default = FileDropper;
exports.default = _default;