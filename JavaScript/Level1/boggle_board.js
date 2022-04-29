"use strict";
exports.__esModule = true;
var mathex_1 = require("./mathex");
var BogglePiece = /** @class */ (function () {
    function BogglePiece(board, letter, row, column) {
        this.Board = board;
        this.Row = row;
        this.Column = column;
        this.Letter = letter;
    }
    BogglePiece.prototype.FlatIndex = function () { return this.Board.SideLength * this.Row + this.Column; };
    BogglePiece.prototype.isConnected = function (row, column) {
        return (mathex_1.MathEx.IsWithinOne(this.Row, row) &&
            mathex_1.MathEx.IsWithinOne(this.Column, column) &&
            !(this.Row === row && this.Column === column));
    };
    return BogglePiece;
}());
exports.BogglePiece = BogglePiece;
var BoggleBoard = /** @class */ (function () {
    function BoggleBoard(pieces) {
        var length = pieces.length;
        var sqrt = mathex_1.MathEx.IntSqrt(length);
        this.SideLength = sqrt;
        var letters = pieces.split('');
        this.Pieces = [];
        for (var i = 0; i < sqrt; i++) {
            for (var j = 0; j < sqrt; j++) {
                this.Pieces.push(new BogglePiece(this, letters[i * sqrt + j], i, j));
            }
        }
    }
    BoggleBoard.prototype.getPiece = function (row, col) {
        if (mathex_1.MathEx.IsSafeIndex(row, this.SideLength) &&
            mathex_1.MathEx.IsSafeIndex(col, this.SideLength)) {
            return this.Pieces[row * this.SideLength + col];
        }
        else
            return null;
    };
    BoggleBoard.prototype.getPieceByIndex = function (flatIndex) {
        if (mathex_1.MathEx.IsSafeIndexArray(flatIndex, this.Pieces)) {
            return this.Pieces[flatIndex];
        }
        else
            return null;
    };
    BoggleBoard.prototype.getRow = function (row) {
        if (!mathex_1.MathEx.IsSafeIndex(row, this.SideLength))
            return null;
        var pieces = [];
        for (var i = 0; i < this.SideLength; i++) {
            pieces.push(this.Pieces[row * this.SideLength + i]);
        }
        return pieces;
    };
    BoggleBoard.prototype.getColumn = function (column) {
        if (!mathex_1.MathEx.IsSafeIndex(column, this.SideLength))
            return null;
        var pieces = [];
        for (var i = 0; i < this.SideLength; i++) {
            pieces.push(this.Pieces[i * this.SideLength + column]);
        }
        return pieces;
    };
    BoggleBoard.prototype.getConnectedPieces = function (row, col) {
        if (mathex_1.MathEx.IsSafeIndex(row, this.SideLength) &&
            mathex_1.MathEx.IsSafeIndex(col, this.SideLength)) {
            return this.getConnectedPiecesByIndex(row * this.SideLength + col);
        }
        else
            return null;
    };
    BoggleBoard.prototype.getConnectedPiecesByIndex = function (flatIndex) {
        if (!mathex_1.MathEx.IsSafeIndexArray(flatIndex, this.Pieces))
            return null;
        var refPiece = this.getPieceByIndex(flatIndex);
        var retPieces = [];
        for (var i = 0; i < this.SideLength; i++) {
            for (var j = 0; j < this.SideLength; j++) {
                if (refPiece.isConnected(i, j))
                    retPieces.push(this.Pieces[i * this.SideLength + j]);
            }
        }
        return retPieces;
    };
    return BoggleBoard;
}());
exports.BoggleBoard = BoggleBoard;
