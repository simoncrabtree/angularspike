basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'client/lib/angular.js',
  'client/tests/lib/angular/angular-mocks.js',
  'client/js/**/*.js',
  'client/tests/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

reporters = ['progress'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};

