

const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


// collego il DOM

const select = document.getElementById("select");

const containerCard = document.querySelector(".container-card");


// creo un'oggetto per sostituire i colori in base al type

const colorType = {
	"animal " : "red",
	"vegetable" : "green",
	"user": "blue"
}
console.log(colorType)

 

function typeOfIcon(arrayIcons){
	
	const typeOfIcon = {}

	for (let i = 0; i < icone.length; i++) {
		const {type,name} = icone [i];

		if(! typeOfIcon [type]){

			typeOfIcon [type] = []
		}

		typeOfIcon [type].push({
			"name":"name",
			"type":"type",

			color(){
				return colorType [type]
			}
		})
		
	}

	return typeOfIcon 
	console.log(typeOfIcon)

}


typeOfIcon(icone)
console.log(typeOfIcon(icone))



const boxIcon = icone.map((arrayIcon) =>{

	const { name, family, prefix, type} = arrayIcon


	const color =  colorType [type]


	containerCard.innerHTML += `<div class=" my-icon-container">
		 							<div class="my-icon ${type}>
										<i class="${family} ${prefix + name}</i>
										<h3> ${name}</h3>
		 							</div>
								</div>`
		
	
	

	return {

		numeroIndice : arrayIcon 
	}



}) 


// select.addEventListener("change", function (){

// })



