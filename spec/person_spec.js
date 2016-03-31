describe("Person", function() {
    var person;

    beforeEach(function() {
        person = new Person({ gender: 'male', age: 36 });
    });

    it("should have gender as male", function() {
        expect(person.gender).toBeDefined();
        expect(person.gender).toEqual("male");
    });

    it("should have age of 36", function() {
        expect(person.gender).toBeDefined();
        expect(person.age).toEqual(36);
    });
});
