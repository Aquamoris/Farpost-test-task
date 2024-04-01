export function checkedBulletinAmount(...args: any[]) {
    let totalAmount = 0;

    for (let arg of args) {
        totalAmount += arg.length;
    }

    console.log(totalAmount);
}