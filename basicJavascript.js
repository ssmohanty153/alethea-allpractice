// var str1: string = "Hello World"
// console.log(str1);
var Processor = /** @class */ (function () {
    function Processor() {
    }
    Processor.prototype.process = function (key, val) {
        console.log(val + "-->" + key);
    };
    return Processor;
}());
var proc = new Processor();
proc.process(1, "subhransu");
