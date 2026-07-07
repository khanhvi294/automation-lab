const dsSanPham = [
  { ten: "Áo", gia: 100000 },
  { ten: "Quần", gia: 0 }, // ← cài sẵn 1 bug: giá 0
  { ten: "Nón", gia: 50000 },
];

for (let sp of dsSanPham) {
  if (sp.gia <= 0) console.log("sản phẩm k hợp lệ");
  else console.log("sp ok");
}
