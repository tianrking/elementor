// eslint-disable-next-line prefer-const
let ControlDimensionsView = require( 'elementor-controls/dimensions' ),
	ControlGapItemView;

// eslint-disable-next-line prefer-const
ControlGapItemView = ControlDimensionsView.extend( {

	ui() {
		// eslint-disable-next-line prefer-const
		const ui = ControlDimensionsView.prototype.ui.apply( this, arguments );

		ui.controls = '.elementor-control-gap > input:enabled';
		ui.link = 'button.elementor-link-gaps';

		return ui;
	},

	getPossibleDimensions() {
		return [
			'row',
			'column',
		];
	},

	setValue( key, value ) {
		var values = this.getControlValue();

		if ( 'object' === typeof key ) {
			_.each( key, function( internalValue, internalKey ) {
				values[ internalKey ] = internalValue;
			} );
		} else {
			values[ key ] = value;
		}

		const conversion = this.model.get( 'conversion_map' );

		if ( conversion && conversion.old_key && conversion.new_key ) {
			values[ conversion.old_key ] = parseInt( values[ conversion.new_key ] );
		}

		this.setSettingsModel( values );
	},

	getControlPlaceholder() {
		return '';
	},
} );

module.exports = ControlGapItemView;
