//// [/src/first/bin/.tsbuildinfo]
{
  "js": [
    {
      "pos": 0,
      "end": 597,
      "kind": "emitHelpers",
      "data": "typescript:extends"
    },
    {
      "pos": 599,
      "end": 1020,
      "kind": "text"
    },
    {
      "pos": 1020,
      "end": 1060,
      "kind": "sourceMapUrl"
    }
  ],
  "dts": [
    {
      "pos": 0,
      "end": 226,
      "kind": "text"
    },
    {
      "pos": 226,
      "end": 268,
      "kind": "sourceMapUrl"
    }
  ]
}

//// [/src/first/bin/first-output.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
var first1 = (function () {
    function first1() {
    }
    return first1;
}());
var first2 = (function (_super) {
    __extends(first2, _super);
    function first2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return first2;
}(first1));
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":";;;;;;;;;;;;;AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;AAEjB;IAAA;IAAe,CAAC;IAAD,aAAC;AAAD,CAAC,AAAhB,IAAgB;AAChB;IAAqB,0BAAM;IAA3B;;IAA8B,CAAC;IAAD,aAAC;AAAD,CAAC,AAA/B,CAAqB,MAAM,GAAI;ACH/B,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>var __extends = (this && this.__extends) || (function () {
>>>    var extendStatics = function (d, b) {
>>>        extendStatics = Object.setPrototypeOf ||
>>>            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
>>>            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
>>>        return extendStatics(d, b);
>>>    };
>>>    return function (d, b) {
>>>        extendStatics(d, b);
>>>        function __() { this.constructor = d; }
>>>        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
>>>    };
>>>})();
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(14, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(14, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(14, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(14, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(14, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(14, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(15, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(15, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(15, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(15, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(15, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(15, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(15, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(15, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(16, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(16, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(16, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(16, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(16, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(16, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(16, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(16, 16) Source(12, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
10>                 ^^^^^^^^^^^->
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(17, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(17, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(17, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(17, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(17, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(17, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(17, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(17, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(17, 18) Source(1, 18) + SourceIndex(1)
---
>>>var first1 = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(18, 1) Source(3, 1) + SourceIndex(1)
---
>>>    function first1() {
1->^^^^
2 >    ^^->
1->
1->Emitted(19, 5) Source(3, 1) + SourceIndex(1)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^->
1->class first1 { 
2 >    }
1->Emitted(20, 5) Source(3, 16) + SourceIndex(1)
2 >Emitted(20, 6) Source(3, 17) + SourceIndex(1)
---
>>>    return first1;
1->^^^^
2 >    ^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(21, 5) Source(3, 16) + SourceIndex(1)
2 >Emitted(21, 18) Source(3, 17) + SourceIndex(1)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class first1 { }
1 >Emitted(22, 1) Source(3, 16) + SourceIndex(1)
2 >Emitted(22, 2) Source(3, 17) + SourceIndex(1)
3 >Emitted(22, 2) Source(3, 1) + SourceIndex(1)
4 >Emitted(22, 6) Source(3, 17) + SourceIndex(1)
---
>>>var first2 = (function (_super) {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
1->Emitted(23, 1) Source(4, 1) + SourceIndex(1)
---
>>>    __extends(first2, _super);
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^
1->class first2 extends 
2 >    first1
1->Emitted(24, 5) Source(4, 22) + SourceIndex(1)
2 >Emitted(24, 31) Source(4, 28) + SourceIndex(1)
---
>>>    function first2() {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(25, 5) Source(4, 1) + SourceIndex(1)
---
>>>        return _super !== null && _super.apply(this, arguments) || this;
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^->
1->class first2 extends first1 { 
2 >    }
1->Emitted(27, 5) Source(4, 31) + SourceIndex(1)
2 >Emitted(27, 6) Source(4, 32) + SourceIndex(1)
---
>>>    return first2;
1->^^^^
2 >    ^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(28, 5) Source(4, 31) + SourceIndex(1)
2 >Emitted(28, 18) Source(4, 32) + SourceIndex(1)
---
>>>}(first1));
1 >
2 >^
3 > 
4 > ^
5 >  ^^^^^^
6 >        ^^^
7 >           ^^^^->
1 >
2 >}
3 > 
4 > class first2 extends 
5 >  first1
6 >         { }
1 >Emitted(29, 1) Source(4, 31) + SourceIndex(1)
2 >Emitted(29, 2) Source(4, 32) + SourceIndex(1)
3 >Emitted(29, 2) Source(4, 1) + SourceIndex(1)
4 >Emitted(29, 3) Source(4, 22) + SourceIndex(1)
5 >Emitted(29, 9) Source(4, 28) + SourceIndex(1)
6 >Emitted(29, 12) Source(4, 32) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1->
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1->
2 >function 
3 >         f
1->Emitted(30, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(30, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(30, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(31, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(31, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(31, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(31, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(32, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(32, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/first_PART1.ts]
interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);
console.log(s);

//// [/src/third/thirdjs/output/.tsbuildinfo]
{
  "js": [
    {
      "pos": 0,
      "end": 597,
      "kind": "emitHelpers",
      "data": "typescript:extends"
    },
    {
      "pos": 599,
      "end": 1060,
      "kind": "prepend",
      "data": "/src/first/bin/first-output.js"
    },
    {
      "pos": 1062,
      "end": 1690,
      "kind": "prepend",
      "data": "/src/2/second-output.js"
    },
    {
      "pos": 1692,
      "end": 2022,
      "kind": "text"
    },
    {
      "pos": 2022,
      "end": 2062,
      "kind": "sourceMapUrl"
    }
  ],
  "dts": [
    {
      "pos": 0,
      "end": 268,
      "kind": "prepend",
      "data": "/src/first/bin/first-output.d.ts"
    },
    {
      "pos": 270,
      "end": 485,
      "kind": "prepend",
      "data": "/src/2/second-output.d.ts"
    },
    {
      "pos": 487,
      "end": 575,
      "kind": "text"
    },
    {
      "pos": 575,
      "end": 617,
      "kind": "sourceMapUrl"
    }
  ]
}

//// [/src/third/thirdjs/output/third-output.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
var first1 = (function () {
    function first1() {
    }
    return first1;
}());
var first2 = (function (_super) {
    __extends(first2, _super);
    function first2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return first2;
}(first1));
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var second1 = (function () {
    function second1() {
    }
    return second1;
}());
var second2 = (function (_super) {
    __extends(second2, _super);
    function second2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return second2;
}(second1));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
//# sourceMappingURL=second-output.js.map
var c = new C();
c.doSomething();
var third1 = (function () {
    function third1() {
    }
    return third1;
}());
var third2 = (function (_super) {
    __extends(third2, _super);
    function third2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return third2;
}(third1));
//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.js.map]
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":";;;;;;;;;;;;;AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;AAEjB;IAAA;IAAe,CAAC;IAAD,aAAC;AAAD,CAAC,AAAhB,IAAgB;AAChB;IAAqB,0BAAM;IAA3B;;IAA8B,CAAC;IAAD,aAAC;AAAD,CAAC,AAA/B,CAAqB,MAAM,GAAI;ACH/B,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;;ACED,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AAED;IAAA;IAAgB,CAAC;IAAD,cAAC;AAAD,CAAC,AAAjB,IAAiB;AACjB;IAAsB,2BAAO;IAA7B;;IAAgC,CAAC;IAAD,cAAC;AAAD,CAAC,AAAjC,CAAsB,OAAO,GAAI;ACbjC;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;;ACJD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC;AAEhB;IAAA;IAAe,CAAC;IAAD,aAAC;AAAD,CAAC,AAAhB,IAAgB;AAChB;IAAqB,0BAAM;IAA3B;;IAA8B,CAAC;IAAD,aAAC;AAAD,CAAC,AAA/B,CAAqB,MAAM,GAAI"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var __extends = (this && this.__extends) || (function () {
>>>    var extendStatics = function (d, b) {
>>>        extendStatics = Object.setPrototypeOf ||
>>>            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
>>>            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
>>>        return extendStatics(d, b);
>>>    };
>>>    return function (d, b) {
>>>        extendStatics(d, b);
>>>        function __() { this.constructor = d; }
>>>        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
>>>    };
>>>})();
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(14, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(14, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(14, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(14, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(14, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(14, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(15, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(15, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(15, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(15, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(15, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(15, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(15, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(15, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(16, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(16, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(16, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(16, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(16, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(16, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(16, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(16, 16) Source(12, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
10>                 ^^^^^^^^^^^->
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(17, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(17, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(17, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(17, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(17, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(17, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(17, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(17, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(17, 18) Source(1, 18) + SourceIndex(1)
---
>>>var first1 = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(18, 1) Source(3, 1) + SourceIndex(1)
---
>>>    function first1() {
1->^^^^
2 >    ^^->
1->
1->Emitted(19, 5) Source(3, 1) + SourceIndex(1)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^->
1->class first1 { 
2 >    }
1->Emitted(20, 5) Source(3, 16) + SourceIndex(1)
2 >Emitted(20, 6) Source(3, 17) + SourceIndex(1)
---
>>>    return first1;
1->^^^^
2 >    ^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(21, 5) Source(3, 16) + SourceIndex(1)
2 >Emitted(21, 18) Source(3, 17) + SourceIndex(1)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class first1 { }
1 >Emitted(22, 1) Source(3, 16) + SourceIndex(1)
2 >Emitted(22, 2) Source(3, 17) + SourceIndex(1)
3 >Emitted(22, 2) Source(3, 1) + SourceIndex(1)
4 >Emitted(22, 6) Source(3, 17) + SourceIndex(1)
---
>>>var first2 = (function (_super) {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
1->Emitted(23, 1) Source(4, 1) + SourceIndex(1)
---
>>>    __extends(first2, _super);
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^
1->class first2 extends 
2 >    first1
1->Emitted(24, 5) Source(4, 22) + SourceIndex(1)
2 >Emitted(24, 31) Source(4, 28) + SourceIndex(1)
---
>>>    function first2() {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(25, 5) Source(4, 1) + SourceIndex(1)
---
>>>        return _super !== null && _super.apply(this, arguments) || this;
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^->
1->class first2 extends first1 { 
2 >    }
1->Emitted(27, 5) Source(4, 31) + SourceIndex(1)
2 >Emitted(27, 6) Source(4, 32) + SourceIndex(1)
---
>>>    return first2;
1->^^^^
2 >    ^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(28, 5) Source(4, 31) + SourceIndex(1)
2 >Emitted(28, 18) Source(4, 32) + SourceIndex(1)
---
>>>}(first1));
1 >
2 >^
3 > 
4 > ^
5 >  ^^^^^^
6 >        ^^^
7 >           ^^^^->
1 >
2 >}
3 > 
4 > class first2 extends 
5 >  first1
6 >         { }
1 >Emitted(29, 1) Source(4, 31) + SourceIndex(1)
2 >Emitted(29, 2) Source(4, 32) + SourceIndex(1)
3 >Emitted(29, 2) Source(4, 1) + SourceIndex(1)
4 >Emitted(29, 3) Source(4, 22) + SourceIndex(1)
5 >Emitted(29, 9) Source(4, 28) + SourceIndex(1)
6 >Emitted(29, 12) Source(4, 32) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1->
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1->
2 >function 
3 >         f
1->Emitted(30, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(30, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(30, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(31, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(31, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(31, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(31, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(32, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(32, 2) Source(3, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=first-output.js.map
>>>var N;
1->
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1->namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1->Emitted(34, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(34, 5) Source(5, 11) + SourceIndex(3)
3 >Emitted(34, 6) Source(5, 12) + SourceIndex(3)
4 >Emitted(34, 7) Source(11, 2) + SourceIndex(3)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(35, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(35, 12) Source(5, 11) + SourceIndex(3)
3 >Emitted(35, 13) Source(5, 12) + SourceIndex(3)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(36, 5) Source(6, 5) + SourceIndex(3)
2 >Emitted(36, 14) Source(6, 14) + SourceIndex(3)
3 >Emitted(36, 15) Source(6, 15) + SourceIndex(3)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(37, 9) Source(7, 9) + SourceIndex(3)
2 >Emitted(37, 16) Source(7, 16) + SourceIndex(3)
3 >Emitted(37, 17) Source(7, 17) + SourceIndex(3)
4 >Emitted(37, 20) Source(7, 20) + SourceIndex(3)
5 >Emitted(37, 21) Source(7, 21) + SourceIndex(3)
6 >Emitted(37, 30) Source(7, 30) + SourceIndex(3)
7 >Emitted(37, 31) Source(7, 31) + SourceIndex(3)
8 >Emitted(37, 32) Source(7, 32) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(38, 5) Source(8, 5) + SourceIndex(3)
2 >Emitted(38, 6) Source(8, 6) + SourceIndex(3)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(39, 5) Source(10, 5) + SourceIndex(3)
2 >Emitted(39, 6) Source(10, 6) + SourceIndex(3)
3 >Emitted(39, 8) Source(10, 8) + SourceIndex(3)
4 >Emitted(39, 9) Source(10, 9) + SourceIndex(3)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^^^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(40, 1) Source(11, 1) + SourceIndex(3)
2 >Emitted(40, 2) Source(11, 2) + SourceIndex(3)
3 >Emitted(40, 4) Source(5, 11) + SourceIndex(3)
4 >Emitted(40, 5) Source(5, 12) + SourceIndex(3)
5 >Emitted(40, 10) Source(5, 11) + SourceIndex(3)
6 >Emitted(40, 11) Source(5, 12) + SourceIndex(3)
7 >Emitted(40, 19) Source(11, 2) + SourceIndex(3)
---
>>>var second1 = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(41, 1) Source(13, 1) + SourceIndex(3)
---
>>>    function second1() {
1->^^^^
2 >    ^^->
1->
1->Emitted(42, 5) Source(13, 1) + SourceIndex(3)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^->
1->class second1 { 
2 >    }
1->Emitted(43, 5) Source(13, 17) + SourceIndex(3)
2 >Emitted(43, 6) Source(13, 18) + SourceIndex(3)
---
>>>    return second1;
1->^^^^
2 >    ^^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(44, 5) Source(13, 17) + SourceIndex(3)
2 >Emitted(44, 19) Source(13, 18) + SourceIndex(3)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class second1 { }
1 >Emitted(45, 1) Source(13, 17) + SourceIndex(3)
2 >Emitted(45, 2) Source(13, 18) + SourceIndex(3)
3 >Emitted(45, 2) Source(13, 1) + SourceIndex(3)
4 >Emitted(45, 6) Source(13, 18) + SourceIndex(3)
---
>>>var second2 = (function (_super) {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
1->Emitted(46, 1) Source(14, 1) + SourceIndex(3)
---
>>>    __extends(second2, _super);
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
1->class second2 extends 
2 >    second1
1->Emitted(47, 5) Source(14, 23) + SourceIndex(3)
2 >Emitted(47, 32) Source(14, 30) + SourceIndex(3)
---
>>>    function second2() {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(48, 5) Source(14, 1) + SourceIndex(3)
---
>>>        return _super !== null && _super.apply(this, arguments) || this;
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^->
1->class second2 extends second1 { 
2 >    }
1->Emitted(50, 5) Source(14, 33) + SourceIndex(3)
2 >Emitted(50, 6) Source(14, 34) + SourceIndex(3)
---
>>>    return second2;
1->^^^^
2 >    ^^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(51, 5) Source(14, 33) + SourceIndex(3)
2 >Emitted(51, 19) Source(14, 34) + SourceIndex(3)
---
>>>}(second1));
1 >
2 >^
3 > 
4 > ^
5 >  ^^^^^^^
6 >         ^^^
7 >            ^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class second2 extends 
5 >  second1
6 >          { }
1 >Emitted(52, 1) Source(14, 33) + SourceIndex(3)
2 >Emitted(52, 2) Source(14, 34) + SourceIndex(3)
3 >Emitted(52, 2) Source(14, 1) + SourceIndex(3)
4 >Emitted(52, 3) Source(14, 23) + SourceIndex(3)
5 >Emitted(52, 10) Source(14, 30) + SourceIndex(3)
6 >Emitted(52, 13) Source(14, 34) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(53, 1) Source(1, 1) + SourceIndex(4)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(54, 5) Source(1, 1) + SourceIndex(4)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(55, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(55, 6) Source(5, 2) + SourceIndex(4)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(56, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(56, 28) Source(2, 16) + SourceIndex(4)
3 >Emitted(56, 31) Source(2, 5) + SourceIndex(4)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(57, 9) Source(3, 9) + SourceIndex(4)
2 >Emitted(57, 16) Source(3, 16) + SourceIndex(4)
3 >Emitted(57, 17) Source(3, 17) + SourceIndex(4)
4 >Emitted(57, 20) Source(3, 20) + SourceIndex(4)
5 >Emitted(57, 21) Source(3, 21) + SourceIndex(4)
6 >Emitted(57, 41) Source(3, 41) + SourceIndex(4)
7 >Emitted(57, 42) Source(3, 42) + SourceIndex(4)
8 >Emitted(57, 43) Source(3, 43) + SourceIndex(4)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(58, 5) Source(4, 5) + SourceIndex(4)
2 >Emitted(58, 6) Source(4, 6) + SourceIndex(4)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(59, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(59, 13) Source(5, 2) + SourceIndex(4)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(60, 1) Source(5, 1) + SourceIndex(4)
2 >Emitted(60, 2) Source(5, 2) + SourceIndex(4)
3 >Emitted(60, 2) Source(1, 1) + SourceIndex(4)
4 >Emitted(60, 6) Source(5, 2) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=second-output.js.map
>>>var c = new C();
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^->
1->
2 >var 
3 >    c
4 >      = 
5 >        new 
6 >            C
7 >             ()
8 >               ;
1->Emitted(62, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(62, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(62, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(62, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(62, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(62, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(62, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(62, 17) Source(1, 17) + SourceIndex(5)
---
>>>c.doSomething();
1->
2 >^
3 > ^
4 >  ^^^^^^^^^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^->
1->
  >
2 >c
3 > .
4 >  doSomething
5 >             ()
6 >               ;
1->Emitted(63, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(63, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(63, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(63, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(63, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(63, 17) Source(2, 17) + SourceIndex(5)
---
>>>var third1 = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(64, 1) Source(4, 1) + SourceIndex(5)
---
>>>    function third1() {
1->^^^^
2 >    ^^->
1->
1->Emitted(65, 5) Source(4, 1) + SourceIndex(5)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^->
1->class third1 { 
2 >    }
1->Emitted(66, 5) Source(4, 16) + SourceIndex(5)
2 >Emitted(66, 6) Source(4, 17) + SourceIndex(5)
---
>>>    return third1;
1->^^^^
2 >    ^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(67, 5) Source(4, 16) + SourceIndex(5)
2 >Emitted(67, 18) Source(4, 17) + SourceIndex(5)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class third1 { }
1 >Emitted(68, 1) Source(4, 16) + SourceIndex(5)
2 >Emitted(68, 2) Source(4, 17) + SourceIndex(5)
3 >Emitted(68, 2) Source(4, 1) + SourceIndex(5)
4 >Emitted(68, 6) Source(4, 17) + SourceIndex(5)
---
>>>var third2 = (function (_super) {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
1->Emitted(69, 1) Source(5, 1) + SourceIndex(5)
---
>>>    __extends(third2, _super);
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^
1->class third2 extends 
2 >    third1
1->Emitted(70, 5) Source(5, 22) + SourceIndex(5)
2 >Emitted(70, 31) Source(5, 28) + SourceIndex(5)
---
>>>    function third2() {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(71, 5) Source(5, 1) + SourceIndex(5)
---
>>>        return _super !== null && _super.apply(this, arguments) || this;
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^->
1->class third2 extends third1 { 
2 >    }
1->Emitted(73, 5) Source(5, 31) + SourceIndex(5)
2 >Emitted(73, 6) Source(5, 32) + SourceIndex(5)
---
>>>    return third2;
1->^^^^
2 >    ^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(74, 5) Source(5, 31) + SourceIndex(5)
2 >Emitted(74, 18) Source(5, 32) + SourceIndex(5)
---
>>>}(third1));
1 >
2 >^
3 > 
4 > ^
5 >  ^^^^^^
6 >        ^^^
7 >           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class third2 extends 
5 >  third1
6 >         { }
1 >Emitted(75, 1) Source(5, 31) + SourceIndex(5)
2 >Emitted(75, 2) Source(5, 32) + SourceIndex(5)
3 >Emitted(75, 2) Source(5, 1) + SourceIndex(5)
4 >Emitted(75, 3) Source(5, 22) + SourceIndex(5)
5 >Emitted(75, 9) Source(5, 28) + SourceIndex(5)
6 >Emitted(75, 12) Source(5, 32) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

