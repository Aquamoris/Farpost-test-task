import {BulletinType} from "../types/Bulletin.type.ts";

export function checkedBulletinAmount(...args: Set<BulletinType>[]) {
    let totalAmount = 0;

    for (let arg of args) {
        totalAmount += arg.size;
    }

    return totalAmount;
}