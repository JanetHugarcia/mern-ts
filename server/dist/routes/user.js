"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
exports.userRouter = router;
router.use(function (_req, _res, next) {
    console.log('Time:', Date.now());
    next();
});
router.route('/')
    .get(function (_req, res) {
    res.send('user');
});
//# sourceMappingURL=user.js.map