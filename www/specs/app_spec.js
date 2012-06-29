describe("Basic Assumptions", function() {

    it("has Sencha loaded", function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().major).toEqual(2);
    });

    it("has loaded FriendlyRent code",function(){
        expect(FriendlyRent).toBeDefined();
    });
});