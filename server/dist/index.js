"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var user_1 = require("./routes/user");
var product_1 = require("./routes/product");
var app = express_1["default"]();
var PORT = 3000;
var publicPath = path_1["default"].join(__dirname, '/public');
app.set('port', PORT);
app.use(morgan_1["default"]('dev'));
app.use('/static', express_1["default"].static(publicPath));
app.use('/user', user_1.userRouter);
app.use('/product', product_1.productRouter);
app.get('/', function (_req, res) {
    res.send('inicio');
});
app.listen(app.get('port'), function () {
    console.log("server running in http://localhost:" + app.get('port'));
});
//# sourceMappingURL=index.js.map