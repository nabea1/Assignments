// var teachers = [ "Shane", "Rocc", "Patricia","CL", "Junior"]
// 	teachers.pop();
// 	teachers.push("Jane");
// for (var i = 0; teachers.length > i; i++) {
// 	console.log(teachers[i]);
// }
// Shopping List & Shopping Cart//
	

	// var Shoppinglist = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
	// 	Shoppinglist.push("fruit loops");
	// 	Shoppinglist[4] = "fair trade coffee"
	// 	console.log(Shoppinglist);
	// 	Shoppinglist.splice(2,2, "rice", "beans");

	// 	var cart = [];
	// 		cart.push(Shoppinglist.pop());
	// 		console.log(cart);
	// 		cart.push(Shoppinglist.shift());
	// 		console.log(cart);
	// while(Shoppinglist.length>0){
	// 	cart.push(Shoppinglist.pop ());
	// }
	// 	console.log(cart);
	// 	cart.reverse(cart.sort());
	// 	console.log(cart);

	// var outputstring = "";
	// for (var i = 0; < cart.length; i >= 0; i++) {
	// 	outputstring<=cart[i] +",";
	// }
	// console.log(outputstring);

	// var kylestring = cart.join(",");
	// console.log(kylestring);
	// console.log(cart.tostring());



// var name_of_object ={
// 	key: value
// }

// var dog = {
// 	name: "Leo",
// 	speed: 100,
// 	stamina: 80,
// 	coat: "Black & Tan",
// 	nails: "short",
// 	health: 100,
// 	owner: {
// 		name: "shaz",
// 		health: 100,
// 		profession: "Chipotle",
// 		vet: {
// 			name: "Charles",
// 			contact: "1-800-vets",
// 			clinic: "Petco",
// 			profession: "Lead Vet",
// 			specialization: "Dogs",
// 		}
// 	},
// 	siblings: ["Lucy", "Winter", "Larry"]
// };
// console.log(dog.owner.vet);

// delete dog.speed;
// console.log(dog);

// dog.speed2 = 10;
// console.log("Your dog's speed is" + dog.speed2);

// This is for Javascript Applications...woot woot! //


var course = 
{
	name:"Javascript Applications",
	awesome: true,
	teachers: ["Asaf", "Shane"],
	students:{
			name:"Steve",
			computer: {
				OS:"Linux",
				type:"laptop"
			},
			name:"Katy",
			computer: {
				OS:"OSX",
				type:"macbook",
				},
			name:"Chuck",
			computer: {
       			OS:"OSX",
       			type:"macbook",
			},
			preReqs: {
				skills: ["html", "css", "git"],
				equipment: {
					laptop: true,
					OSOptions: ["linux or OSX"]
							}
					}
			}
};
course.students.name = "These two students are using OSX: Katy and Chuck";
console.log(course.students.name);
