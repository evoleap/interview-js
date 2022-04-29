import { MathEx } from "./mathex"
export class BogglePiece {
    Letter : string;
    Row : number;
    Column : number;
    Board : BoggleBoard;
    FlatIndex() : number { return this.Board.SideLength * this.Row + this.Column; }
    constructor(board: BoggleBoard, letter: string, row: number, column: number) {
        this.Board = board;
        this.Row = row;
        this.Column = column;
        this.Letter = letter;
    }
    isConnected(row: number, column: number) : boolean {
        return (
            MathEx.IsWithinOne(this.Row, row) && 
            MathEx.IsWithinOne(this.Column, column) &&
            !(this.Row === row && this.Column === column)
        );
    }
}
export class BoggleBoard {
    SideLength : number;
    Pieces : BogglePiece[];
    constructor(pieces: string) {
        var length = pieces.length;
        var sqrt = MathEx.IntSqrt(length);
        this.SideLength = sqrt;
        var letters = pieces.split('');
        this.Pieces = [];
        for (var i = 0; i < sqrt; i++) {
            for (var j = 0; j < sqrt; j++) {
                this.Pieces.push(new BogglePiece(this, letters[i*sqrt + j], i, j));
            }
        }
    }
    getPiece(row: number, col: number) : BogglePiece {
        if (MathEx.IsSafeIndex(row, this.SideLength) &&
            MathEx.IsSafeIndex(col, this.SideLength)) {
            return this.Pieces[row * this.SideLength + col];
        }
        else
            return null;
    }
    getPieceByIndex(flatIndex: number) : BogglePiece {
        if (MathEx.IsSafeIndexArray(flatIndex, this.Pieces)) {
            return this.Pieces[flatIndex];
        }
        else
            return null;
    }
    getRow(row : number) : BogglePiece[] {
        if (!MathEx.IsSafeIndex(row, this.SideLength))
            return null;
        var pieces = [];
        for (var i = 0; i < this.SideLength; i++) {
            pieces.push(this.Pieces[row*this.SideLength + i]);
        }
        return pieces;
    }
    getColumn(column : number) : BogglePiece[] {
        if (!MathEx.IsSafeIndex(column, this.SideLength))
            return null;
        var pieces = [];
        for (var i = 0; i < this.SideLength; i++) {
            pieces.push(this.Pieces[i*this.SideLength + column]);
        }
        return pieces;
    }
    getConnectedPieces(row: number, col: number) : BogglePiece[] {
        if (MathEx.IsSafeIndex(row, this.SideLength) &&
            MathEx.IsSafeIndex(col, this.SideLength)) {
            return this.getConnectedPiecesByIndex(row * this.SideLength + col);
        }
        else
            return null;        
    }
    getConnectedPiecesByIndex(flatIndex : number) : BogglePiece[] {
        if (!MathEx.IsSafeIndexArray(flatIndex, this.Pieces))
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
    }
}