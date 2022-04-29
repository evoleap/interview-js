export class MathEx {
    public static IntSqrt(x : number) : number {
        if (x < 0) return NaN;
        if (x == 0) return 0;
        var p = this.IntSqrt(x-1);
        if ((p + 1) * (p + 1) <= x) {
            return p+1;
        }
        else {
            return p;
        }
    }
    public static IsWithinOne(x : number, y : number) : boolean {
        return Math.abs(x - y) <= 1;
    }
    public static IsSafeIndex(index : number, arrayLength : number) : boolean {
            return index >= 0 && index < arrayLength;
    }
    public static IsSafeIndexArray<T>(index : number, anyArray : Array<T>) : boolean {
            return index >= 0 && index < anyArray.length;
    }
}