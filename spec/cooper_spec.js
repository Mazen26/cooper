describe("cooperAssessmentOf", function() {
    var person;

    beforeEach(function() {
        male = new Person({ gender: 'male', age: 13 });
        male1 = new Person({ gender: 'male', age: 13 });

        female = new Person({ gender: 'female', age: 13 });
        female1 = new Person({ gender: 'female', age: 13 });
    });


    it("analyses a person's performance and returns the appropriate result", function() {
        expect(cooperAssessmentOf(male, 2700)).toEqual("Excellent");
        expect(cooperAssessmentOf(male, 2400)).toEqual("Above Average");
        expect(cooperAssessmentOf(male, 2300)).toEqual("Average");

        // Female
        expect(cooperAssessmentOf(female, 2000)).toEqual("Excellent");
        expect(cooperAssessmentOf(female, 1900)).toEqual("Above Average");
        expect(cooperAssessmentOf(female, 1600)).toEqual("Average");
    });
});

describe('ageRange', function() {
  it('returns the correct age range', function() {
    expect(ageRange(13)).toEqual('13-14');
    expect(ageRange(16)).toEqual('15-16');
    expect(ageRange(18)).toEqual('17-19');
    expect(ageRange(20)).toEqual('20-29');
    expect(ageRange(25)).toEqual('20-29');
    expect(ageRange(30)).toEqual('30-39');
    expect(ageRange(36)).toEqual('30-39');
    expect(ageRange(41)).toEqual('40-49');
    expect(ageRange(48)).toEqual('40-49');
    expect(ageRange(51)).toEqual('50+');
  });
});
