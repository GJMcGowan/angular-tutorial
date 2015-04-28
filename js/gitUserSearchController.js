githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var searchResource = $resource('https://api.github.com/search/users?access_token=bcdea0c6187824554f2a9a9fbef92d1c5d298288');
  var self = this;

  self.searchResult;
  self.searchResultUserUrl;

  self.doSearch = function(){
    if(self.searchTerm !== '') {
      self.searchResult = searchResource.get(
        { q: self.searchTerm }
      );
      
      // var result;
      // var array = self.searchResult;
      //console.log(array);
      // console.log(self.searchResult);
      // for(i = 0; i < self.searchResult.items.length; i++) {
        // var repos = $.get(self.searchResult.items[i].url, function(response) {
          // result = response;
        // });
        // self.searchResult.items[i].push({public_repos: result.public_repos});
      // };
    };

  };
}]);

// $.get('https://api.github.com/users/')

// Make 2 API calls, calling in html won't work. Make 1 call, store the url
// then make another api call. Then display that api call.