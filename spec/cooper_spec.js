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
