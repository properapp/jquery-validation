Package.describe({
  summary: "jQuery validation plugin by Jorn Zaefferer, repackaged for Meteor."
});

Package.on_use(function(api){  
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery-validation/src/core.js',
  ], 'client');
  api.export('jqueryValidation');
});