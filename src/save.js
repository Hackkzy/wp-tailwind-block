import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<p className="bg-blue-500 p-2 hover:bg-blue-200 transition duration-300 ease-in">
				{ 'WP Tailwind block – hello from the saved content!' }
			</p>
		</div>
	);
}
