"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
exports.productRouter = router;
router.route('/')
    .get(function (_req, res) {
    res.send('product');
});
//# sourceMappingURL=product.js.map