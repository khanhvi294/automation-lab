//Viết 1 hàm kiemSanPham(sp): trả về "❌ tên rỗng" nếu sp.ten === "", "❌ giá sai" nếu sp.gia <= 0, còn lại "✅ ok".
function kiemSanPham(sp) {
  if (sp.ten === "") {
    return "❌ tên rỗng";
  } else if (sp.gia <= 0) {
    return "❌ giá sai";
  } else {
    return "✅ ok";
  }
}

console.log(kiemSanPham({ ten: "Áo", gia: 100000 })); // ✅ ok
console.log(kiemSanPham({ ten: "", gia: 100000 })); // ❌ tên rỗng
console.log(kiemSanPham({ ten: "Nón", gia: 0 })); // ❌ giá sai
