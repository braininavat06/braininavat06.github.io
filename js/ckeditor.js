import {
	ClassicEditor,
	CodeBlock,
	AccessibilityHelp,
	Alignment,
	AutoImage,
	Autosave,
	BlockQuote,
	Bold,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	FullPage,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	SelectAll,
	SourceEditing,
	Strikethrough,
	Subscript,
	Superscript,
	SimpleUploadAdapter,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TodoList,
	Underline,
	Undo
} from 'ckeditor5';

import translations from 'ckeditor5/translations/ko.js';


function uploadAdapter(loader) {
	return {
	   upload: () => {
		  return new Promise((resolve, reject) => {
			 loader.file.then(file => {
				var password = document.getElementById("password").value;

				const reader = new FileReader();
				reader.onload = () => {
					const imageData = reader.result.split(',')[1]; // base64 데이터 추출

					
					fetch("https://www.medimory.com/api/v1/password_check", {
						method: "POST",
						body: password
					})
						.then((response) => {
							return response.text();
						})
						.then((data) => {
							if(data == "success") {
								fetch('https://www.medimory.com/api/v1/image_upload', {
									method: 'POST',
									headers: {
									   'Content-Type': 'application/json',
									},
									body: JSON.stringify({
									   image: imageData
									})
									 })
									  .then((res) => res.json())
									  .then(res => {
										  document.getElementById("imageURL").value += `${res},`;
										  resolve({
											  default: res // Lambda 함수에서 반환된 이미지 URL을 사용합니다.
										  });
										})
										.catch(error => {
										  console.error('Error uploading image:', error);
										  reject(error.message || 'Failed to upload image');
										});
							} else {
								alert("비밀번호가 일치하지 않습니다.")
							}
						})
						.catch(() => {console.log("알 수 없는 오류");})

				};
				reader.readAsDataURL(file);
			 })
				.catch(error => {
				   console.error('Error getting file from loader:', error);
				   reject(error);
				});
		  });
	   }
	};
}

 function uploadPlugin(editor) {
	editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
	   return uploadAdapter(loader);
	};
 }

const editorConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'sourceEditing',
			'findAndReplace',
			'|',
			'heading',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'subscript',
			'superscript',
			'|',
			'horizontalLine',
			'link',
			'insertImage',
			'mediaEmbed',
			'insertTable',
			'highlight',
			'blockQuote',
			'codeBlock',
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'outdent',
			'indent'
		],
		shouldNotGroupWhenFull: true
	},
	plugins: [
		AccessibilityHelp,
		Alignment,
		AutoImage,
		Autosave,
		SimpleUploadAdapter,
		BlockQuote,
		Bold,
		CodeBlock,
		Essentials,
		FindAndReplace,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		FullPage,
		GeneralHtmlSupport,
		Heading,
		Highlight,
		HorizontalLine,
		ImageBlock,
		ImageCaption,
		ImageInline,
		ImageInsert,
		ImageInsertViaUrl,
		ImageResize,
		ImageStyle,
		ImageTextAlternative,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		MediaEmbed,
		Paragraph,
		PasteFromOffice,
		SelectAll,
		SourceEditing,
		Strikethrough,
		Subscript,
		Superscript,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TodoList,
		Underline,
		Undo,
		uploadPlugin
	],
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [10, 12, 14, 'default', 18, 20, 22],
		supportAllValues: true
	},
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2'
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3'
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4'
			},
			{
				model: 'heading5',
				view: 'h5',
				title: 'Heading 5',
				class: 'ck-heading_heading5'
			},
			{
				model: 'heading6',
				view: 'h6',
				title: 'Heading 6',
				class: 'ck-heading_heading6'
			}
		]
	},
	htmlSupport: {
		allow: [
			{
				name: /^.*$/,
				styles: true,
				attributes: true,
				classes: true
			}
		]
	},
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage'
		],
		resizeUnit: 'px',
		resizeOptions: [
			{
				name: 'resizeImage:original',
				label: 'Original',
				value: null
			},
			{
				name: 'resizeImage:custom',
				label: 'Custom',
				value: 'custom'
			},
			{
				name: 'resizeImage:100',
				label: '100px',
				value: '100'
			},
			{
				name: 'resizeImage:200',
				label: '200px',
				value: '200'
			}
		]
	},
	language: 'ko',
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	placeholder: '내용을 입력하세요',
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	},
	translations: [translations]
};

ClassicEditor.create(document.querySelector('#editor'), editorConfig)
	.then(editor =>{
		window.currentEditor = editor;
	});
