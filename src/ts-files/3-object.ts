enum Gender { MALE, FEMALE }
enum Role { ADMIN, READ_ONLY }

//Create Object in TS
var person: {
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender
} = {
    firstName: 'Parham',
    lastName: 'Darvishi',
    age: 27,
    gender: Gender.MALE
}
console.log(person.age);