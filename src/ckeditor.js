/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	BlockQuote,
	Heading,
	Highlight,
	Link,
	List,
	Paragraph
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'highlight',
			'link',
			'|',
			'bulletedList',
			'numberedList',
			'blockQuote',
			'undo',
			'redo'
		]
	},
	highlight: {
		options: [
			{
				model: 'yellowMarker',
				class: 'marker-yellow',
				title: 'Marqueur jaune',
				color: 'var(--ck-highlight-marker-yellow)',
				type: 'marker'
			},
			{
				model: 'greenMarker',
				class: 'marker-green',
				title: 'Marqueur vert',
				color: 'var(--ck-highlight-marker-green)',
				type: 'marker'
			},
			{
				model: 'pinkMarker',
				class: 'marker-pink',
				title: 'Marqueur rose',
				color: 'var(--ck-highlight-marker-pink)',
				type: 'marker'
			},
			{
				model: 'blueMarker',
				class: 'marker-blue',
				title: 'Marqueur bleu',
				color: 'var(--ck-highlight-marker-blue)',
				type: 'marker'
			},
			{
				model: 'redPen',
				class: 'pen-red',
				title: 'Stylo rouge',
				color: 'var(--ck-highlight-pen-red)',
				type: 'pen'
			},
			{
				model: 'greenPen',
				class: 'pen-green',
				title: 'Stylo vert',
				color: 'var(--ck-highlight-pen-green)',
				type: 'pen'
			}
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'fr'
};
