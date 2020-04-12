export const test = "test";

function opt(n: number): string | null {
    if (n == 0)
        return null
    else
        return n.toString();
}

function doIt() {
    console.log("Start")

    let x: string = opt(0) ?? ""

    console.log("x: " +  x)
}

doIt();
