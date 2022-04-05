"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _clsx = _interopRequireDefault(require("clsx"));

require("../scss/app.scss");

var _fileCheck = require("../images/file-check.svg");

var _wrongFile = require("../images/wrong-file.svg");

var _microsoftExcel = require("../images/microsoft-excel.svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FileDropper(_ref) {
  let {
    callbackFile
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
      uploadPlan(e.dataTransfer);
      e.dataTransfer.clearData();
    }

    setDragging(false);
  };

  const uploadPlan = target => {
    const file = target === null || target === void 0 ? void 0 : target.files[0];

    if (file) {
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel' || file.type === 'text/csv') {
        if (file.size > 104857600) {
          setError('Максимально допустимый размер файла не более 100Мб');
        } else {
          setSelectedFile(file);
          callbackFile(file);
        }
      } else {
        setError('Не верный формат файла');
      }
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: 'uploader'
  }, /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx.default)('uploader__block', {
      'uploader__block_dragging': dragging
    }),
    onClick: () => document.getElementById('input-file-uploader').click(),
    id: 'dropped-block'
  }, /*#__PURE__*/React.createElement(_microsoftExcel.ReactComponent, {
    width: 40,
    height: 40,
    fill: '#545454'
  }), !selectedFile.name && !error && /*#__PURE__*/React.createElement("p", {
    className: 'mt-3'
  }, "\u0414\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0444\u0430\u0439\u043B\u0430 \u043A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u043D\u0430 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u0443\u044E \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0441 \u0432\u0430\u0448\u0435\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"), selectedFile.name && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "\u0418\u043C\u044F: ", selectedFile.name)), /*#__PURE__*/React.createElement("span", {
    className: 'd-flex align-items-center justify-content-center mt-2'
  }, /*#__PURE__*/React.createElement(_fileCheck.ReactComponent, {
    width: 20,
    height: 20,
    fill: 'green'
  }), /*#__PURE__*/React.createElement("p", {
    className: 'ms-2'
  }, /*#__PURE__*/React.createElement("b", null, "\u0412\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0444\u0430\u0439\u043B")))), error && /*#__PURE__*/React.createElement("span", {
    className: 'd-flex align-items-center justify-content-center mt-2'
  }, /*#__PURE__*/React.createElement(_wrongFile.ReactComponent, {
    width: 20,
    height: 20,
    fill: '#bb2d3b'
  }), /*#__PURE__*/React.createElement("p", {
    className: 'ms-2'
  }, /*#__PURE__*/React.createElement("b", null, error)))), /*#__PURE__*/React.createElement("input", {
    type: "file",
    className: 'd-none',
    id: 'input-file-uploader',
    onChange: e => uploadPlan(e.target),
    accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
  }));
}

var _default = FileDropper;
exports.default = _default;