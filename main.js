var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// PARENT CLASS:
var Students = /** @class */ (function () {
    // CONSTRUCTOR - TO INITIALIZE THE PROPERTIES
    function Students(nameArg, ageArg, nationalityArg) {
        this.name = nameArg;
        this.age = ageArg;
        this.gender = "female";
        this.nationality = nationalityArg;
    }
    //   METHODS - (FUNCTIONS)
    Students.prototype.getnationality = function () {
        console.log(this.nationality);
    };
    return Students;
}());
// CHILD CLASS: UNDERGRADUATES - INHERITS FROM STUDENTS - USE EXTENDS KEYWORD
//   CHILD CLASS IMPLEMENTS THE INTERFACE OF IUNDERGRAD
var Undergraduates = /** @class */ (function (_super) {
    __extends(Undergraduates, _super);
    // CONSTRUCTOR - TO INITIALIZE THE PROPERTIES
    function Undergraduates(nameArg, ageArg, nationalityArg, batchArg, GPAArg) {
        // PASS PROPERTIES TO THE PARENT CLASS USING SUPER KEYWORD
        var _this = _super.call(this, nameArg, ageArg, nationalityArg) || this;
        _this.batch = batchArg;
        _this.GPA = GPAArg;
        return _this;
    }
    return Undergraduates;
}(Students));
var student1 = new Students("Joan", 20, "American");
student1.getnationality();
// UNDERGRAD INSTANCE
var undergrad1 = new Undergraduates("Sarah", 35, "English", 2021, 3.5);
undergrad1.getnationality();
