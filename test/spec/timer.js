describe('The timer widget', function () {
    beforeEach(function () {
        loadFixtures('fixture.html');
        $element = $('.timer');    
    });
    
    it('should display a start time of 2:00 when invoked', function () {
        $element.timer();
        expect($element.text()).toBe('2:00');
    });
});
