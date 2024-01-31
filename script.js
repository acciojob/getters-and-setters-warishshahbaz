//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.ge = age;
	}
	get NewName(){
		console.log(this.name);
		
	}
	set NewAge(ages){
		this.age = ages;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
