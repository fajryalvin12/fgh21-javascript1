const title = "=== Rata-rata nilai UN dan Grade ==="

const mtk = 100

const bahasaIndonesia = 100

const bahasaInggris = 100

const ipa = 100

const total = mtk + bahasaIndonesia + bahasaInggris + ipa
const average = total / 4

console.log(title)

console.log("Rata-rata: " + average)

if (average >= 90){
    console.log("Grade = A");
} else if (average >= 80){
    console.log("Grade = B");
} else if (average >= 70){
    console.log("Grade = C");
} else if (average >= 60){
    console.log("Grade = D");
} else {
    console.log("Grade = E");
}