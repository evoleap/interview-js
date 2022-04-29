import { BoggleBoard } from "./boggle_board";
import { IBoggleSolver, BoggleSolver1 } from "./boggle_solver";
class Program
{
    public static Main() : number {
        var board = new BoggleBoard("ANYMRTAFI");
        var solver = new BoggleSolver1();
        Program.enumerateThreeLetterWords(board, solver);
        return 0;
    }
    private static enumerateThreeLetterWords(board: BoggleBoard, solver : IBoggleSolver) : void
    {
        console.log("3 letter combinations");
        console.log("--------------------------");
        console.log("Number of 3-letter combinations: "+solver.enumerateThreeLetterCombos(board).length);

    }
}
Program.Main();