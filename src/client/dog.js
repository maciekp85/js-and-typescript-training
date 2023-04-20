// Visual Studio Code Docs - Language: JavaScript -> Type checking

import { Animal } from "./animal.js";

//@ts-check
export class Dog extends Animal {
    /**
     * 
     * @param {string} name 
     * @param {number} age 
     */
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
        this.favorite_activity = 'fetch';
    }

    speak() {
        console.log(`${this.name}: NO! No more talk! We play ${this.favorite_activity}!`);
    }
}

new Dog('Wez', 7).speak();