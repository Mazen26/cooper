cooper_norms = {
  'male' : {
    '13-14': {
      '>2700':     'Excellent',
      '2400-2699': 'Above Average',
      '2200-2399': 'Average',
      '2100-2199': 'Below Average',
      '<2100':     'Poor'
    },
    '15-16': {
      '>2800':     'Excellent',
      '2500-2800': 'Above Average',
      '2300-2499': 'Average',
      '2200-2299': 'Below Average',
      '<2200':     'Poor'
    },
    '17-19': {
      '>3000':     'Excellent',
      '2700-3000': 'Above Average',
      '2500-2699': 'Average',
      '2300-2499': 'Below Average',
      '<2300':     'Poor'
    },
    '20-29': {
      '>2800':     'Excellent',
      '2400-2800': 'Above Average',
      '2200-2399': 'Average',
      '1600-2199': 'Below Average',
      '<1600':     'Poor'
    },
    '30-39': {
      '>2700':     'Excellent',
      '2300-2700': 'Above Average',
      '1900-2299': 'Average',
      '1500-1999': 'Below Average',
      '<1500':     'Poor'
    },
    '40-49': {
      '>2500':     'Excellent',
      '2100-2500': 'Above Average',
      '1700-2099': 'Average',
      '1400-1699': 'Below Average',
      '<1400':     'Poor'
    },
    '50+': {
      '>2400':     'Excellent',
      '2000-2400': 'Above Average',
      '1600-1999': 'Average',
      '1300-1599': 'Below Average',
      '<1300':     'Poor'
    }
  },

  'female' : {
    '13-14': {
      '>2000':     'Excellent',
      '1900-2000': 'Above Average',
      '1600-1899': 'Average',
      '1500-1599': 'Below Average',
      '<1500':     'Poor'
    },
    '15-16': {
      '>2100':     'Excellent',
      '2000-2100': 'Above Average',
      '1700-1999': 'Average',
      '1600-1699': 'Below Average',
      '<1600':     'Poor'
    },
    '17-19': {
      '>2300':     'Excellent',
      '2100-2300': 'Above Average',
      '1800-2099': 'Average',
      '1700-1799': 'Below Average',
      '<1700':     'Poor'
    },
    '20-29': {
      '>2700':     'Excellent',
      '2200-2700': 'Above Average',
      '1800-2199': 'Average',
      '1500-1799': 'Below Average',
      '<1500':     'Poor'
    },
    '30-39': {
      '>2500':     'Excellent',
      '2000-2500': 'Above Average',
      '1700-1999': 'Average',
      '1400-1699': 'Below Average',
      '<1400':     'Poor'
    },
    '40-49': {
      '>2300':     'Excellent',
      '1900-2300': 'Above Average',
      '1500-1899': 'Average',
      '1200-1499': 'Below Average',
      '<1200':     'Poor'
    },
    '50+': {
      '>2200':     'Excellent',
      '1700-2200': 'Above Average',
      '1400-1699': 'Average',
      '1100-1399': 'Below Average',
      '<1100':     'Poor'
    }
  }
};

var cooperAssessmentOf = function(person, distance) {
  a_range = ageRange(person.age);
  console.log(cooper_norms[person.gender][a_range]);
  console.log(ratings[4]);
  return "Excellent";
};

var ageRange = function(age) {
  switch (true) {
    case (age >= 13 && age <= 14):
      return '13-14';
    case (age >= 15 && age <= 16):
      return '15-16';
    case (age >= 17 && age <= 19):
      return '17-19';
    case (age >= 20 && age <= 29):
      return '20-29';
    case (age >= 30 && age <= 39):
      return '30-39';
    case (age >= 40 && age <= 49):
      return '40-49';
    case (age >= 50):
      return '50+';
    default:
      return 'invalid_range';
  }
};
