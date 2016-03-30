describe("Person", function() {
    var person;

    beforeEach(function() {
        person = new Person({gender: 'male', age: 36 });
    });

    it("should have gender as male", function() {
        expect(person.gender).toBeDefined();
        expect(person.gender).toEqual("male");
    });

    it("should have age of 36", function() {
        expect(person.gender).toBeDefined();
        expect(person.age).toEqual(36);
    });

    it("should have cooper test results", function() {
        person.performance();
        expect(person.result).toEqual("Above Average")
    });

});


describe("CooperAnalyser", function() {
    var bmi_calculator;
    var person;

    beforeEach(function() {
        person = new Person({gender: 'male', age: 36 });
        analyser = new CooperAnalyser();
    });


    it("analyse person performance", function() {
        analyser(person);
        expect(person.result).toEqual("Above Average");
    });

});