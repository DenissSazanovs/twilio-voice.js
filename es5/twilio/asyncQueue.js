"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncQueue = void 0;
var deferred_1 = require("./deferred");
/**
 * Queue async operations and executes them synchronously.
 */
var AsyncQueue = /** @class */ (function () {
    function AsyncQueue() {
        /**
         * The list of async operations in this queue
         */
        this._operations = [];
    }
    /**
     * Adds the async operation to the queue
     * @param callback An async callback that returns a promise
     * @returns A promise that will get resolved or rejected after executing the callback
     */
    AsyncQueue.prototype.enqueue = function (callback) {
        var hasPending = !!this._operations.length;
        var deferred = new deferred_1.default();
        this._operations.push({ deferred: deferred, callback: callback });
        if (!hasPending) {
            this._processQueue();
        }
        return deferred.promise;
    };
    /**
     * Start processing the queue. This executes the first item and removes it after.
     * Then do the same for next items until the queue is emptied.
     */
    AsyncQueue.prototype._processQueue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, deferred, callback, result, error, hasResolved, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this._operations.length) return [3 /*break*/, 5];
                        _a = this._operations[0], deferred = _a.deferred, callback = _a.callback;
                        result = void 0;
                        error = void 0;
                        hasResolved = void 0;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, callback()];
                    case 2:
                        result = _b.sent();
                        hasResolved = true;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        error = e_1;
                        return [3 /*break*/, 4];
                    case 4:
                        // Remove the item
                        this._operations.shift();
                        if (hasResolved) {
                            deferred.resolve(result);
                        }
                        else {
                            deferred.reject(error);
                        }
                        return [3 /*break*/, 0];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return AsyncQueue;
}());
exports.AsyncQueue = AsyncQueue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNRdWV1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi90d2lsaW8vYXN5bmNRdWV1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFFbEM7O0dBRUc7QUFDSDtJQUFBO1FBQ0U7O1dBRUc7UUFDSyxnQkFBVyxHQUEyQixFQUFFLENBQUM7SUFtRG5ELENBQUM7SUFqREM7Ozs7T0FJRztJQUNILDRCQUFPLEdBQVAsVUFBUSxRQUE0QjtRQUNsQyxJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDN0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxrQkFBUSxFQUFFLENBQUM7UUFFaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBRUQsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDVyxrQ0FBYSxHQUEzQjs7Ozs7OzZCQUNTLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTTt3QkFFdEIsS0FBeUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBMUMsUUFBUSxjQUFBLEVBQUUsUUFBUSxjQUFBLENBQXlCO3dCQUcvQyxNQUFNLFNBQUEsQ0FBQzt3QkFDUCxLQUFLLFNBQUEsQ0FBQzt3QkFFTixXQUFXLFNBQUEsQ0FBQzs7Ozt3QkFFTCxxQkFBTSxRQUFRLEVBQUUsRUFBQTs7d0JBQXpCLE1BQU0sR0FBRyxTQUFnQixDQUFDO3dCQUMxQixXQUFXLEdBQUcsSUFBSSxDQUFDOzs7O3dCQUVuQixLQUFLLEdBQUcsR0FBQyxDQUFDOzs7d0JBR1osa0JBQWtCO3dCQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUV6QixJQUFJLFdBQVcsRUFBRSxDQUFDOzRCQUNoQixRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUMzQixDQUFDOzZCQUFNLENBQUM7NEJBQ04sUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDekIsQ0FBQzs7Ozs7O0tBRUo7SUFDSCxpQkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7QUF2RFksZ0NBQVUifQ==