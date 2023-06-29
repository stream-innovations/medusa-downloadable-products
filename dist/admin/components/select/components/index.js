"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjacentContainer = void 0;
const containers_1 = require("./containers");
Object.defineProperty(exports, "AdjacentContainer", { enumerable: true, get: function () { return containers_1.AdjacentContainer; } });
const control_1 = __importStar(require("./control"));
const input_1 = __importDefault(require("./input"));
const menu_1 = __importStar(require("./menu"));
const placeholder_1 = __importDefault(require("./placeholder"));
const single_value_1 = __importDefault(require("./single-value"));
const Components = {
    ClearIndicator: control_1.ClearIndicator,
    DropdownIndicator: control_1.DropdownIndicator,
    LoadingIndicator: control_1.LoadingIndicator,
    SelectContainer: containers_1.SelectContainer,
    Control: control_1.default,
    Input: input_1.default,
    Placeholder: placeholder_1.default,
    Menu: menu_1.default,
    MenuList: menu_1.MenuList,
    Option: menu_1.Option,
    SingleValue: single_value_1.default,
    MultiValue: () => null,
    MultiValueContainer: () => null,
    MultiValueRemove: () => null,
    ValueContainer: containers_1.ValueContainer,
    IndicatorsContainer: containers_1.IndicatorsContainer,
    LoadingMessage: menu_1.LoadingMessage,
    IndicatorSeparator: null,
};
exports.default = Components;
