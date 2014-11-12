var path = '';
if (typeof window.__karma__ !== 'undefined') {
      path += 'base/'
} 
jasmine.getFixtures().fixturesPath = path + 'spec/javascripts/fixtures/';
 
describe('The timer widget', function () {
    beforeEach(function () {
        loadFixtures('fixture.html');
        $element = $('.timer');    
    });
    
    it('should display a start time of 2:00 when invoked', function () {
        $element.timer();
        expect($element).toHaveText('2:00');
    });

    it('should display a start time of 3:00 when invoked with a time option of 180', function () {
        $element.timer({time: 180});
        expect($element).toHaveText('3:00');    
    });

    describe('when started', function () {
        beforeEach(function () {
            $element.timer({time: 5});
            jasmine.clock().install();
            $element.data('plugin_timer').start();
        });

        afterEach(function () {
            $element.data('plugin_timer').stop();
            jasmine.clock().uninstall();
        });

        it('should start counting down', function () {
            jasmine.clock().tick(1000);
            expect($element).toHaveText('0:04');
            jasmine.clock().tick(1000);
            expect($element).toHaveText('0:03');
        });
        
        it('should stop counting down when the timer reaches 0', function () {
            jasmine.clock().tick(5000);
            expect($element).toHaveText('0:00');
            jasmine.clock().tick(1000);
            expect($element).toHaveText('0:00');
        });

        it('should stop counting down when the timer is already running', function () {
            jasmine.clock().tick(1000);
            expect($element).toHaveText('0:04');
            $element.click();
            jasmine.clock().tick(1000);
            expect($element).toHaveText('0:04');
        });

    });
});
