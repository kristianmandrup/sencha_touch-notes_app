describe 'HomePage.Ability', ->
	beforeEach ->
	  @ability = {}
	  @ability.extends BeerCan.Abilit 

  it "should be able to 'read' anything", ->
    @ability.can 'read', 'aldfds '
    expect(@ability.can 'read', String).toBeTruthy()
