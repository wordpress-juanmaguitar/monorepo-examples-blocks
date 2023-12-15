import { __ } from '@wordpress/i18n';
import { BlockControls, useBlockProps } from '@wordpress/block-editor';
import {
	DateTimePicker,
	ToolbarGroup,
	ToolbarButton,
	Dropdown,
} from '@wordpress/components';
import { backup } from '@wordpress/icons';

const DOWN = 40;

export default function Edit( { attributes, setAttributes } ) {
	const { date } = attributes;

	// Set default attributes.date to a randome number between 1 and 20 if no date is set
	if ( ! date ) {
		const todayDate = new Date();
		const randomNUmberBetweenOneAndTwenty = Math.floor(
			Math.random() * 20
		);
		const dateOneDayFromToday = todayDate.setDate(
			todayDate.getDate() + randomNUmberBetweenOneAndTwenty
		);
		setAttributes( {
			// date = dateOneDayFromToday PHP friendly format
			date: new Date( dateOneDayFromToday )
				.toISOString()
				.slice( 0, 19 )
				.replace( 'T', ' ' ),
		} );
	}

	return (
		<>
			<BlockControls group="block">
				<ToolbarGroup>
					<Dropdown
						renderContent={ ( { onClose } ) => (
							<DateTimePicker
								currentDate={ date }
								onChange={ ( value ) =>
									setAttributes( { date: value } )
								}
								is12Hour={ true }
								onClose={ onClose }
							/>
						) }
						renderToggle={ ( { isOpen, onToggle } ) => {
							const openOnArrowDown = ( event ) => {
								if ( ! isOpen && event.keyCode === DOWN ) {
									event.preventDefault();
									onToggle();
								}
							};
							return (
								<ToolbarButton
									aria-expanded={ isOpen }
									icon={ backup }
									title={ __(
										'Change Date',
										'block-development-examples'
									) }
									onClick={ onToggle }
									onKeyDown={ openOnArrowDown }
								/>
							);
						} }
					/>
				</ToolbarGroup>
			</BlockControls>
			<div { ...useBlockProps() }>{ date }</div>
		</>
	);
}
