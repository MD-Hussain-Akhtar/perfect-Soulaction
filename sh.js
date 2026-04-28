let student=[{
    "id": "1",
    "productName": "Apple iPhone 15",
    "price": "79999",
    "description": "Latest iPhone with A16 chip",
    "imageUrl": "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    "catagery":"Laptop"
  },
  {
    "id": "2",
    "productName": "MacBook Air M2",
    "price": "114999",
    "description": "Lightweight Apple laptop",
    "imageUrl": "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    "catagery":"Laptop"
    
  },{
    "id": "3",
    "productName": "Lenovo",
    "price": "114999",
    "description": "Lightweight Apple laptop",
    "imageUrl": "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    "catagery":"mobile"
  }
  ]

const catagery=(catagery)=>{
    const result=student.filter((item)=> item.catagery===catagery)
    if(result.length>0){
        result.forEach((item)=> console.log(item.productName))  
    }   else{
        console.log("no data found")
    }
}
catagery("Laptop")