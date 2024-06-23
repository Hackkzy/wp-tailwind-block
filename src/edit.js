import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			{ /* Tailwind CSS is applied below */ }
			<p className="bg-blue-500 p-2 hover:bg-blue-200 transition duration-300 ease-in">
				{ __(
					'WP Tailwind block – hello from the editor!',
					'wp-tailwind-block'
				) }
			</p>
		</div>
	);
}
