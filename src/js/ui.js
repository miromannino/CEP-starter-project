import $ from 'jquery';

export class UI {

    constructor(csInterface) {
        console.log('UI constructor');

        this.csInterface = csInterface;

        // Let's try if jQuery, installed with yarn, works
        $('#btn-set-opacity').click(() => this.setOpacity($('#txt-opacity-value').val()));
    }

    setOpacity(o) {
        console.log('setting opacity to: ' + o);
        this.csInterface.evalScript('setSelectedLayerOpacity(' + o + ')', function (res) {
            if (res === EvalScript_ErrMessage) {
                console.log('There was an error on setting the layer opacity');
            }
        });
    }

}