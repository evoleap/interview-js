import { BoggleBoard } from "./boggle_board";
import { IBoggleSolver, BoggleSolver1 } from "./boggle_solver";
class Program
{
    public static Main() : number {
        var board = new BoggleBoard("ANYMRTAFI");
        var solver = new BoggleSolver1();
        console.log("N letter combinations");
        console.log("--------------------------");
        for (var i = 3; i <= 9; i++)
            Program.enumerateNLetterWords(board, solver, i);
        return 0;
    }
    private static enumerateNLetterWords(board: BoggleBoard, solver : IBoggleSolver, n : number) : void
    {
        console.log("Number of "+n.toString()+"-letter combinations: "+solver.enumerateNLetterCombos(board, n).length);

    }
}
Program.Main();