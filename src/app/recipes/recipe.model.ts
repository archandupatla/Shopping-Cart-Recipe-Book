export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string
    public ingredients:[{name: string, amount: number}]
    
    constructor(name: string, desc: string, imgPth: string, ingredients:[{name: string, amount: number}]){
    this.name = name;
    this.description = desc;
    this.imagePath = imgPth;
    this.ingredients = ingredients;
    }
}