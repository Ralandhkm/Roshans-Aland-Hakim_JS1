var hari = "Minggu";

switch (hari) {
  case "Senin":
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log("Hari kerja");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari libur");
    break;
  default:
    console.log("Hari tidak valid");
}
