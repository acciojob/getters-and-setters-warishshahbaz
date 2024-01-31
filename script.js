//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	getter(){
		console.log(this.name);
		
	}
	setter(newAge){
		this.age = newAge;
	}
}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
