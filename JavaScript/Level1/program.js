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
        Program.enumerateThreeLetterWords(board, solver);
        return 0;
    };
    Program.enumerateThreeLetterWords = function (board, solver) {
        console.log("3 letter combinations");
        console.log("--------------------------");
        console.log("Number of 3-letter combinations: " + solver.enumerateThreeLetterCombos(board).length);
    };
    return Program;
}());
Program.Main();
