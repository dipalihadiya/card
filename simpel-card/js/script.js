let student1 = [{
    name: "Urvisha",
    lname: "Mevada",
    age: 23,
    email : "ma@example.com",
    contact : 1234567890,
 
},{
    name: "Dhara",
    lname: "Chaudhary",
    age: 22,
    email : "nisha@example.com",
    contact : 1234567890,
},{
    name: "Priya",
    lname: "Patel",
    age: 20,
    email : "ra@gmail.com",
    contact : 993456234,
},{
    name: "Nandni",
    lname: "nakum",
    age: 19,
    email : "gopi@gmail.com",
    contact : 4657833354, 
}
,{
    name: "Ragini",
    lname: "Rakholiya",
    age: 22,
    email : "zqPfM@example.com",
    contact : 1234567890,
},{
    name: "Astha",
    lname: "Nakrani",
    age: 20,
    email : "ra@gmail.com",
    contact : 993456234,
},{
    name: "gopi",
    lname: "katariya",
    age: 19,
    email : "gopi@gmail.com",
    contact : 4657833354, 
}
,{
    name: "Dipali",
    lname: "hadiya",
    age: 22,
    email : "zqPfM@example.com",
    contact : 1234567890,
},{
    name: "riya",
    lname: "mangukiya",
    age: 20,
    email : "ra@gmail.com",
    contact : 993456234,
},{
    name: "puja",
    lname: "jani",
    age: 19,
    email : "gopi@gmail.com",
    contact : 4657833354, 
}
,{
    name: "nisha",
    lname: "gupta",
    age: 22,
    email : "zqPfM@example.com",
    contact : 1234567890,
},{
    name: "krishna",
    lname: "mangukiya",
    age: 20,
    email : "ra@gmail.com",
    contact : 993456234,
},{
    name: "Devanshi",
    lname: "katariya",
    age: 19,
    email : "gopi@gmail.com",
    contact : 4657833354, 
}
,{
    name: "Rutvi",
    lname: "hadiya",
    age: 22,
    email : "zqPfM@example.com",
    contact : 1234567890,
},{
    name: "Kinjal",
    lname: "mar",
    age: 20,
    email : "ra@gmail.com",
    contact : 993456234,
},{
    name: "krupali",
    lname: "katariya",
    age: 19,
    email : "gopi@gmail.com",
    contact : 4657833354, 
}
,{
    name: "nisha",
    lname: "hadiya",
    age: 22,
    email : "zqPfM@example.com",
    contact : 1234567890,
},{
    name: "mayura",
    lname: "dasai",
    age: 20,
    email : "ra@gmail.com",
    contact : 993456234,
},{
    name: "pari",
    lname: "chudasma",
    age: 19,
    email : "gopi@gmail.com",
    contact : 4657833354, 
}
,{
    name: "Ridhi",
    lname: "gondaliya",
    age: 22,
    email : "zqPfM@example.com",
    contact : 1234567890 ,
},{
    name: "pinki",
    lname: "vala",
    age: 20,
    email : "ra@gmail.com",
    contact : 993456234,
},];
 

for (let i = 0; i < student1.length-1; i++) {
card.innerHTML += `<div class=" col card bg-secondary  border-5 text-center  " style= "width: 400px; color: lightgray; margin: 0 auto; padding: 20px; margin-top: 80px; border-radius: 20px; position: relative;"><a href="#"><img src="img/profile.png" style="width:200px; height:200px ; border-radius: 100%; margin-left: 5px; margin-top: -90px;"></a><h2 class="text-bold" >${student1[i].name} ${student1[i].lname}</h2><p class="fs-5 fw-bolder">Age: ${student1[i].age}</p><p class="fs-5 fw-bolder">Email: ${student1[i].email}</p><p class="fs-5 fw-bolder">Grade: ${student1[i].contact}</p><p class="fs-5 fw-bolder">Grade: ${student1[i].grade}</p></div></br></br></br>`
};

