describe('The timer widget', function () {
    beforeEach(function () {
        loadFixtures('fixture.html');
        $element = $('.timer');    
    });
    
    it('should display a start time of 2:00 when invoked', function () {
        $element.timer();
        expect($element.text()).toBe('2:00');
    });

    describe('when the widget is clicked', function () {
        beforeEach(function () {
            $element.timer();
            jasmine.clock().install();
            $element.click();
        });

        afterEach(function () {
            jasmine.clock().uninstall();
        });

        it('should start counting down', function () {
            jasmine.clock().tick(1000);
            expect($element.text()).toBe('1:59');
            jasmine.clock().tick(1000);
            expect($element.text()).toBe('1:58');
        });
    });
});
