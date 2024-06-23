# 🎨 WP Tailwind Block

An example project demonstrating how to integrate Tailwind CSS in WordPress blocks.

## 📝 Description

This repository provides a step-by-step guide on using Tailwind CSS within custom WordPress blocks. It includes all necessary files and configurations to quickly create stylish and responsive blocks using Tailwind CSS.

## 🚀 Installation

1. **Create a new block**

    Replace 'block-name' with your preferred name for the WordPress block project

    ```bash
    npx @wordpress/create-block@latest block-name
    ```

2. **Navigate into the 'block-name' directory**

    ```bash
    cd block-name
    ```

3. **Install Tailwind dependencies**

    Install Tailwind CSS and its peer dependencies via npm.

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

    Initialize your `tailwind.config.js` file.

    ```bash
    npx tailwindcss init
    ```

4. **Configure PostCSS for Tailwind**

    Create `postcss.config.js` in your plugin directory. Configure it to use Tailwind CSS and autoprefixer.

    ```javascript
    module.exports = {
    	plugins: {
    		tailwindcss: {},
    		autoprefixer: {},
    	},
    };
    ```

5. **Set up template paths**

    Define paths to your template files in `tailwind.config.js`.

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    	content: [ './src/**/*.{js,jsx,ts,tsx,php}' ], // If you're using dynamic block add "php" so that you can use tailwind in "render.php"
    	theme: {
    		extend: {},
    	},
    	plugins: [],
    };
    ```

6. **Integrate Tailwind CSS**

    Include Tailwind CSS directives in your `style.scss`.

    ```scss
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    > **Note**: By default, `style.scss` is imported into `index.js` by `@wordpress/create-block`. You can add these Tailwind CSS directives to any CSS file, but ensure to import this file into your JavaScript files.

## 🛠️ Usage

1. **Start your build process**

    ```bash
    npm run start
    ```

2. **Start using Tailwind CSS in your block**

    Start using Tailwind’s utility classes to style your content

    > **Note**: Make sure to import css files, in my case I added `@tailwind` directives in `style.scss` which is already imported in `index.js`

    ```javascript
    import { __ } from '@wordpress/i18n';
    import { useBlockProps } from '@wordpress/block-editor';

	// Import the file where Tailwind CSS directives are added

    export default function Edit() {
    	return (
    		<div { ...useBlockProps() }>
    			{ /* Example of Tailwind CSS usage */ }
    			<h1 className="text-3xl font-bold underline">
    				{ __(
    					'WP Tailwind block – hello from the editor!',
    					'wp-tailwind-block'
    				) }
    			</h1>
    		</div>
    	);
    }
    ```

## 🛠️ Run Locally

1. **Clone the project inside `wp-plugin` folder**

    ```bash
    git clone https://github.com/Hackkzy/wp-tailwind-block.git
    ```

2. **Go to the project directory**

    ```bash
    cd wp-tailwind-block
    ```

3. **Install dependencies**

    ```bash
    npm install
    ```

4. **Start the server**

    ```bash
    npm run start
    ```
