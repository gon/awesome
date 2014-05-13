var render = function (element, string) {
  $(element).html(string);
};

var renderList = function (elements, models, attribute, skips) {
  skips = (typeof skips === "undefined") ? null : skips;
  _.each(models, function(model, i) { 
    $($(elements)[i]).append(model[attribute]); 
    if(skips){
      _.each(skips, function(skip) {
        return i != skip;
      })
    };
  });
};