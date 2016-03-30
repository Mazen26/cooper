function Person(attr) {
    this.gender = attr.gender;
    this.age = attr.age;

};


Person.prototype.performance = function (distance) {
    if (this.gender.toLowerCase() == 'male') {
        this.result = this.resultForMale(distance);
    } else {
        this.result = this.resultForFemale(distance);
    }
};
Person.prototype.resultForMale = function(distance) {
    var age = this.age;
    switch (true) {
        case (age >= 13 && age < 14):
            switch (true) {
                case (distance < 2100):
                    return 'Poor';
                case (distance >= 2100 && distance < 2199):
                    return 'Below average';
                case (distance >= 2200 && distance < 2399):
                    return 'Average';
                case (distance >= 2400 && distance < 2700):
                    return 'Above average';
                case (distance >= 2700):
                    return 'Excellent';
            }
            break;


        case (age >= 15 && age < 16):
            switch (true) {
                case (distance < 2200):
                    return 'Poor';
                case (distance >= 2200 && distance < 2299):
                    return 'Below average';
                case (distance >= 2300 && distance < 2499):
                    return 'Average';
                case (distance >= 2500 && distance < 2800):
                    return 'Above average';
                case (distance >= 2800):
                    return 'Excellent';
            }
            break;


        case (age >= 17 && age < 19):
            switch (true) {
                case (distance < 2300):
                    return 'Poor';
                case (distance >= 2300 && distance < 2499):
                    return 'Below average';
                case (distance >= 2500 && distance < 2699):
                    return 'Average';
                case (distance >= 2700 && distance < 3000):
                    return 'Above average';
                case (distance >= 3000):
                    return 'Excellent';
            }
            break;

        case (age >= 20 && age < 29):
            switch (true) {
                case (distance < 1600):
                    return 'Poor';
                case (distance >= 1600 && distance < 2199):
                    return 'Below average';
                case (distance >= 2200 && distance < 2399):
                    return 'Average';
                case (distance >= 2400 && distance < 2800):
                    return 'Above average';
                case (distance >= 2800):
                    return 'Excellent';
            }
            break;

        case (age >= 30 && age < 39):
            switch (true) {
                case (distance < 1500):
                    return 'Poor';
                case (distance >= 1500 && distance < 1999):
                    return 'Below average';
                case (distance >= 1999 && distance < 2299):
                    return 'Average';
                case (distance >= 2300 && distance < 2700):
                    return 'Above average';
                case (distance > 2700):
                    return 'Excellent';
            }
            break;

        case (age >= 40 && age < 49):
            switch (true) {
                case (distance < 1400):
                    return 'Poor';
                case (distance >= 1400 && distance < 1699):
                    return 'Below average';
                case (distance >= 1700 && distance < 2099):
                    return 'Average';
                case (distance >= 2100 && distance < 2500):
                    return 'Above average';
                case (distance >= 2500):
                    return 'Excellent';
            }
            break;

        case (age >= 50):
            switch (true) {
                case (distance < 1300):
                    return 'Poor';
                case (distance >= 1300 && distance <= 1599):
                    return 'Below average';
                case (distance >= 1600 && distance <= 1999):
                    return 'Average';
                case (distance >= 2000 && distance <= 2400):
                    return 'Above average';
                case (distance >= 2400):
                    return 'Excellent';
            }
            break;

    }
}

Person.prototype.resultForFemale = function(distance) {
    var age = this.age;
    switch (true) {
        case (age >= 13 && age < 14):
            switch (true) {
                case (distance < 1500):
                    return 'Poor';
                case (distance >= 1500 && distance < 1599):
                    return 'Below average';
                case (distance >= 1600 && distance < 1899):
                    return 'Average';
                case (distance >= 1900 && distance < 2000):
                    return 'Above average';
                case (distance >= 2000):
                    return 'Excellent';
            }
            break;


        case (age >= 15 && age < 16):
            switch (true) {
                case (distance < 1600):
                    return 'Poor';
                case (distance >= 1600 && distance < 1699):
                    return 'Below average';
                case (distance >= 1700 && distance < 1999):
                    return 'Average';
                case (distance >= 2000 && distance < 2100):
                    return 'Above average';
                case (distance >= 2100):
                    return 'Excellent';
            }
            break;


        case (age >= 17 && age < 19):
            switch (true) {
                case (distance < 1700):
                    return 'Poor';
                case (distance >= 1700 && distance < 1799):
                    return 'Below average';
                case (distance >= 1800 && distance < 2099):
                    return 'Average';
                case (distance >= 2100 && distance < 2300):
                    return 'Above average';
                case (distance >= 2300):
                    return 'Excellent';
            }
            break;

        case (age >= 20 && age < 29):
            switch (true) {
                case (distance < 1500):
                    return 'Poor';
                case (distance >= 1500 && distance < 1799):
                    return 'Below average';
                case (distance >= 1800 && distance < 2199):
                    return 'Average';
                case (distance >= 2200 && distance < 2700):
                    return 'Above average';
                case (distance > 2700):
                    return 'Excellent';

            }
            break;

        case (age >= 30 && age < 39):
            switch (true) {
                case (distance < 1400):
                    return 'Poor';
                case (distance >= 1400 && distance < 1699):
                    return 'Below average';
                case (distance >= 1700 && distance < 1999):
                    return 'Average';
                case (distance >= 2000 && distance < 2500):
                    return 'Above average';
                case (distance > 2500):
                    return 'Excellent';
            }
            break;

        case (age >= 40 && age < 49):
            switch (true) {
                case (distance < 1200):
                    return 'Poor';
                case (distance >= 1200 && distance < 1499):
                    return 'Below average';
                case (distance >= 1500 && distance < 1899):
                    return 'Average';
                case (distance >= 1900 && distance < 2300):
                    return 'Above average';
                case (distance >= 2300):
                    return 'Excellent';
            }
            break;

        case (age >= 50):
            switch (true) {
                case (distance < 1100):
                    return 'Poor';
                case (distance >= 1100 && distance <= 1399):
                    return 'Below average';
                case (distance >= 1400 && distance <= 1699):
                    return 'Average';
                case (distance >= 1700 && distance <= 2200):
                    return 'Above average';
                case (distance >= 2200):
                    return 'Excellent';
            }
            break;

    }
};