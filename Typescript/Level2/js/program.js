"use strict";
exports.__esModule = true;
var boggle_board_1 = require("./boggle_board");
var boggle_solver_1 = require("./boggle_solver");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        var board = new boggle_board_1.BoggleBoard("ANYMRTAFI");
        var solver = new boggle_solver_1.BoggleSolver1();
        console.log("N letter combinations");
        console.log("--------------------------");
        for (var i = 3; i <= 9; i++)
            Program.enumerateNLetterWords(board, solver, i);
        return 0;
    };
    Program.enumerateNLetterWords = function (board, solver, n) {
        console.log("Number of " + n.toString() + "-letter combinations: " + solver.enumerateNLetterCombos(board, n).length);
    };
    return Program;
}());
Program.Main();
