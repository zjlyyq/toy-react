const { LibManifestPlugin } = require("webpack");

class A {
    constructor() {
        this.name = 'a class';
    }

    _print() {
        console.log(this.name);
    }
}

function main(tag) {
    // 如果是类
    if (typeof tag === 'object' || typeof tag === 'function') {
        let a = new tag;
        // new tag; 和 new tag();的区别
        console.log(a._print());
    }
    else {
        console.log(tag);
    }
}

main(A);