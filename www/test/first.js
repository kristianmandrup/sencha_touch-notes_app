(function() {

// phantom.create (ph) ->
//   ph.createPage (page) ->
//     page.open "http://www.google.com", (status) ->
//       console.log "opened google? ", status
//       page.evaluate (-> document.title), (result) ->
//         console.log 'Page title is ' + result
//         ph.exit()

  describe('HomePage.Ability', function() {
    beforeEach(function() {
      this.ability = {};
      return this.ability["extends"](BeerCan.Abilit);
    });
    return it("should be able to 'read' anything", function() {
      this.ability.can('read', 'aldfds ');
      return expect(this.ability.can('read', String)).toBeTruthy();
    });
  });

}).call(this);
