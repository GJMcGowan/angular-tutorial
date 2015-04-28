githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var searchResource = $resource('https://api.github.com/search/users');
  var self = this;

  self.searchResult;

  self.doSearch = function(){
    
    if(self.searchTerm !== '') {
      self.searchResult = searchResource.get(
        { q: self.searchTerm}
      );
    };
  };
}]);
