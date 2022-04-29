import { BoggleBoard, BogglePiece } from "./boggle_board"
export interface IBoggleSolver {
    enumerateThreeLetterCombos(board : BoggleBoard) : string[] 
}

export class BoggleSolver1 implements IBoggleSolver {
    enumerateThreeLetterCombos(board: BoggleBoard) : string[] {
        console.log("I am waiting to be implemented. Good luck!");
        return [];
    }
}
