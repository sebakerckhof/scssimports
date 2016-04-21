Package.describe({
  summary: 'Test',
  version: "0.0.1",
  git: "https://github.com/sebakerckhof/scssimports",
  name: "test"
});



Package.onUse(function (api) {
  api.versionsFrom("1.3.2");
  api.use('fourseven:scss');
  api.use('ecmascript');

  api.addFiles('test.js','client');

});

Package.on_test(function (api) {});