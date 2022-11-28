var elTitle = document.querySelector(".title");
var forTicket = 500;
var forHotel = 250;
var forMuseum = 120;
var dolarForSum = 11225;
var euroForSum = 11686;
var prayc = +prompt('Summangizni kiriting', 0);
var dolar = (forTicket + forHotel) * dolarForSum;
var euro = forMuseum * euroForSum;
var cost = dolar + euro;
if (prayc >= cost ) {
  elTitle.textContent = "Oq yo'l Alisher😊";
} 
else if (isNaN(prayc))
{
  return 'Alisher aka son kiriting'
}
else {
  elTitle.textContent = "Alisher ozgina sabr qilish kerak bo'lar ekan😔";
}