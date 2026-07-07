const sp = { ten: "Áo", gia: 100000 }; // cố tình KHÔNG có key "discount"
console.log(sp.discount); // ra gì? (đoán trước) undefined
console.log(sp.discount === undefined); // true hay false? true

let khuyenMai = null;
console.log(khuyenMai === null); // true hay false? true
console.log(typeof khuyenMai); // ra gì? (nhớ cái gotcha) "object"
