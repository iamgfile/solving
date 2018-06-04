const EPS      = 0.0001;    // 許容誤差
const ORIGINAL = 1.0;

function main() {
    console.log("x^3 + x - 1 のニュートン法による数値計算");

    var a = ORIGINAL;
    console.log("初期値 a=" + a);

    var b = ORIGINAL;

    // ここにニュートン法による演算の主要部分を記述する
    do {
        a = b;
        b = a - func_y(a) / func_z(a);
        console.log(b);
    } while (Math.abs(a-b) > EPS);

    console.log("近似解 x = " + b);
}
