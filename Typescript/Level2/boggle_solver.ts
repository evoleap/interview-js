import { BoggleBoard, BogglePiece } from "./boggle_board"
export interface IBoggleSolver {
    enumerateNLetterCombos(board : BoggleBoard, n : number) : string[] 
}

export class BoggleSolver1 implements IBoggleSolver {
    enumerateNLetterCombos(board: BoggleBoard, n : number) : string[] {
        console.log("I am waiting to be implemented. Good luck!");
        return [];
    }
}
