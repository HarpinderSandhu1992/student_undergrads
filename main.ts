// PARENT CLASS:
class Students {
  // PROPERTIES
  name: string;
  age: number;
  gender: string;
  nationality: string;

  // CONSTRUCTOR - TO INITIALIZE THE PROPERTIES
  constructor(nameArg: string, ageArg: number, nationalityArg: string) {
    this.name = nameArg;
    this.age = ageArg;
    this.gender = "female";
    this.nationality = nationalityArg;
  }

  //   METHODS - (FUNCTIONS)
  getnationality() {
    console.log(this.nationality);
  }
}

// CHILD CLASS: UNDERGRADUATES - INHERITS FROM STUDENTS - USE EXTENDS KEYWORD
//   CHILD CLASS IMPLEMENTS THE INTERFACE OF IUNDERGRAD
class Undergraduates extends Students implements IUndergrad {
  batch: number;
  GPA: number;

  // CONSTRUCTOR - TO INITIALIZE THE PROPERTIES
  constructor(
    nameArg: string,
    ageArg: number,
    nationalityArg: string,
    batchArg: number,
    GPAArg: number
  ) {
    // PASS PROPERTIES TO THE PARENT CLASS USING SUPER KEYWORD
    super(nameArg, ageArg, nationalityArg);
    this.batch = batchArg;
    this.GPA = GPAArg;
  }
}

const student1 = new Students("Joan", 20, "American");
student1.getnationality();

// IUNDERGRATUATES = INTERFACE UNDERGRAD
// INTERFACES USED TO DEFINE PROPERTIES AND METHODS THAT A CLASS MUST IMPLEMENT - SETS RULES
interface IUndergrad {
  name: string;
  age: number;
  gender: string;
  nationality: string;
  batch: number;
  GPA: number;
  getnationality(): void;
}

// UNDERGRAD INSTANCE
const undergrad1 = new Undergraduates("Sarah", 35, "English", 2021, 3.5);
undergrad1.getnationality();
