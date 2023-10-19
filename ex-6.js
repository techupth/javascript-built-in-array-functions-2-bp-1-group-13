const carCollection = ["toyota", "fiat", "honda", "bmw"];
console.log(carCollection)
function updateCarCollection(carBrand) {
  if(carCollection.includes(carBrand)){
  return carBrand +" "+ "has already existed in the 1 position of car collection."
  }else {
    let word = "new car collection is :"
   carCollection.push(carBrand)
    return word + carCollection
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.
console.log(updateCarCollection("Zebra"))
//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.