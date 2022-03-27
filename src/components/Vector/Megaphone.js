import * as React from "react";

const Megaphone = props => (
	<div className='c-megaphone'>
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 546 447.25' {...props}>
			<defs>
				<style>
					{
						".b{fill:#3c6fb6}.b,.c,.d{fill-rule:evenodd}.c{fill:#f0d548}.d{fill:#fff}"
					}
				</style>
			</defs>
			<path
				className='b'
				d='M427.92 40.78c-.39-.24-.75.35-.67.51-.49-.22-.69.25-1.12.04-1.16.6-2.67.82-3.52 1.21-.7.33-1 .77-1.98.62-.51-.08-1.61.42-1.41-.11-1.29.61-2.74.5-3.43.92-.56-.2-1.13-.4-1.94-.29-.71.23-.84.56-1.44.81-2.08.06-4.86 1.01-7.25 1.47-.47-1.07-2.24-.49-2.88-1.35.27-.34.48-.2.97-.37-.29-.66 1.04-1.07 1.29-1.64.61-.2 1.14-.3 1.64-.37.49-.51 1.08-.53 1.15-.95 1.11 0 3.32-1.57 5.02-1.91.44-.34.52-.74 1.1-1.06 1.93-.57 3.79-1.07 5.69-1.91 1.66-.73 3.29-1.74 5.01-2.42 6.05-2.38 13.08-5.07 19.72-7.37.38-.13.89-.49 1.3-.62.34-.11.72-.02 1.06-.15.79-.28 1.5-.75 2.27-.99.36-.11.73-.03 1.06-.15 5.94-2.01 12-4.97 18.51-7.55 1.63-.65 3.36-1.19 5.01-1.91 3.01-1.3 5.97-2.67 8.97-3.66 4.78-1.58 10.3-2.83 13.86-3.85 1.04-.3 2.08-.63 3.19-.95 2.21-.64 4.12-1.17 6.51-2.09 1.77-.69 3.39-1.29 5.31-1.76 2.72-.66 4.56-1.85 6.04-1.14C518.71 1.01 521 .7 522.8.21c1-.27 1.27-.25 2.18-.18.8 1.55-3.12 2.39-3.73 3.73-2.48.91-4.46 2-6.21 3.26-.27.17.04.12.24.04-.33.5-1.77.83-1.39 1.43-2.59 1.04-5.05 2.46-7.61 3.66-.59.28-1.32.43-1.93.73-.23.11-.62.48-.87.59-1.69.72-4.55 1.33-5.74 2.31-.89.73-6.37 2.39-9.06 3.44-2.18.85-4.23 1.76-6.32 2.53-1.62.6-3.37 1.05-4.58 1.87-1.46.18-4.48 1.42-5.89 1.98-.3.12-.43.43-.67.51-.23.08-.88.09-1.06.15-1.74.5-3.52 1.35-5.21 1.98-2.72 1.01-5.76 2.08-8.19 3.37-5.75 1.77-11.76 4.14-17.46 6.38-.88-.22-2.19.53-3.43.92-2.53.79-5.37.95-8.45 2.31.1-.16.28-.3.48-.44ZM441.02 73.86c-.21-.33-.51.14-.48.31-.28-.35-.46.06-.7-.26-.8.27-1.77.08-2.35.23-.48.13-.72.47-1.31.07-.31-.21-1.06-.02-.87-.48-.88.24-1.78-.25-2.26-.03-.33-.34-.66-.69-1.19-.79-.47.04-.59.31-1 .39-1.31-.49-3.16-.32-4.72-.51-.18-1.15-1.35-1.06-1.65-2.06.21-.26.32-.06.65-.1-.11-.71.78-.75 1-1.24.4-.03.75.01 1.07.08.36-.36.74-.23.83-.61.69.3 2.26-.63 3.37-.5.31-.21.41-.57.81-.73 1.28-.04 2.5-.03 3.79-.32 1.13-.26 2.26-.8 3.42-.99 4.07-.68 8.79-1.4 13.22-1.84.25-.03.62-.23.89-.25.22-.02.45.17.68.14.53-.06 1.03-.32 1.54-.35.24-.01.46.16.69.14 3.95-.35 8.1-1.59 12.48-2.34 1.1-.19 2.24-.26 3.36-.5 2.04-.45 4.05-.98 6.05-1.14 3.18-.25 6.79.02 9.14-.02l2.11-.07c1.46-.03 2.73-.02 4.32-.28 1.18-.19 2.22-.34 3.41-.31 1.69.04 2.78-.68 3.66.31 1.04-.38 2.38-.26 3.42-.48.57-.12.73-.08 1.3.1.79 1.57-1.63 1.92-1.98 3.08-1.58.49-2.89 1.11-4.11 1.93-.19.1.02.12.15.09-.25.41-1.21.39-1.01 1.06-1.78.38-3.52 1.09-5.26 1.57-.4.11-.88.07-1.29.19-.16.05-.44.3-.61.33-1.14.25-3.01.07-3.86.7-.64.47-4.27.61-6.08.9-1.46.23-2.86.56-4.25.75-1.09.15-2.23.12-3.09.58-.94-.22-2.97.18-3.92.34-.2.04-.32.3-.48.31-.16.02-.56-.14-.69-.14-1.15.01-2.36.36-3.49.52-1.82.25-3.85.47-5.53 1.06-3.81.18-7.85.85-11.69 1.49-.53-.44-1.43-.07-2.26-.03-1.68.09-3.48-.51-5.57-.02.08-.13.21-.21.35-.29ZM455.95 120.65c-.23-.36-.7.06-.69.24-.32-.39-.62 0-.9-.36-1.11.15-2.38-.19-3.17-.12-.66.05-1.03.36-1.76-.12-.38-.26-1.41-.18-1.08-.6-1.21.11-2.33-.49-3.01-.34-.39-.39-.78-.77-1.46-.95-.64-.03-.84.23-1.4.25-1.68-.68-4.18-.74-6.23-1.13-.06-1.17-1.65-1.23-1.9-2.26.32-.23.44-.02.88 0-.04-.72 1.16-.64 1.53-1.1.55.02 1.01.11 1.43.22.54-.31 1.02-.13 1.21-.49.89.38 3.14-.33 4.6-.04.46-.17.64-.51 1.21-.61 1.72.14 3.36.32 5.14.22 1.56-.09 3.18-.46 4.76-.47 5.58-.04 12.05 0 18.08.35.35.02.87-.12 1.24-.09.3.02.57.24.89.26.72.03 1.44-.14 2.12-.07.32.03.59.24.89.26 5.37.37 11.17-.06 17.18.1 1.51.03 3.06.21 4.61.2 2.82-.01 5.63-.11 8.33.18 4.31.45 9.06 1.53 12.21 2.05.92.14 1.85.28 2.83.43 1.95.31 3.63.63 5.83.78 1.63.11 3.11.22 4.77.6 2.35.53 4.23.23 5.09 1.49 1.65.04 3.52.72 5.1 1.04.87.18 1.07.31 1.74.75 0 1.74-3.33.84-4.32 1.8-2.25-.23-4.19-.07-6.02.35-.27.04-.02.12.17.13-.45.31-1.67.01-1.61.72-2.38-.15-4.81.14-7.23.18-.56.01-1.17-.15-1.76-.13-.22 0-.65.18-.89.18-1.57-.03-4-.64-5.27-.23-.95.29-5.79-.38-8.26-.5-1.99-.09-3.91-.07-5.8-.19-1.47-.1-2.99-.36-4.22-.09-1.2-.41-3.98-.45-5.27-.48-.28 0-.49.23-.7.21-.21-.01-.72-.25-.88-.27-1.53-.21-3.21-.12-4.75-.19-2.47-.1-5.21-.28-7.55 0-5.1-.53-10.6-.58-15.82-.58-.62-.52-1.89-.31-3-.4-2.25-.19-4.54-1.05-7.41-.9.13-.11.31-.18.52-.24ZM502.84 161.22c.15.35.42-.1.41-.27.2.37.37-.02.55.32.66-.2 1.43.08 1.9-.02.39-.08.6-.41 1.06.03.24.23.85.1.67.54.72-.17 1.42.38 1.81.2.25.37.5.74.92.88.38 0 .49-.27.82-.32.52.29 1.15.42 1.82.52.33.04.67.09 1 .13.3.05.71.08 1.21.2 0 .58.35.9.65 1.29.32.38.48.88.14 1.27-.27.07-.17-.12-.39-.21-.24.65-.61.54-.82 1.01-.23 0-.55-.07-.8-.16-.31.33-.61.18-.7.55-.55-.35-1.88.48-2.78.28-.27.19-.36.54-.7.66-1.05-.06-2.05-.17-3.12.03-.94.17-1.91.6-2.87.7-3.38.32-7.31.57-10.99.49-.21 0-.53.16-.75.15-.18-.01-.35-.22-.54-.22-.44 0-.88.2-1.29.17-.2-.02-.36-.22-.54-.22-3.27-.15-6.8.54-10.48.62-.92.03-1.87-.08-2.82-.02-1.73.13-3.45.33-5.1.15-2.63-.28-5.51-1.19-7.41-1.59-.56-.11-1.12-.21-1.71-.32-1.18-.25-2.2-.51-3.54-.57-1-.04-1.9-.12-2.89-.44-1.41-.45-2.59-.08-3.03-1.32-.51.01-1.03-.14-1.55-.32-.26-.1-.52-.19-.77-.29l-.37-.14-.18-.06-.35-.09c-.54-.15-1.02-.36-1.5-.77-.24-.2-.5-.48-.74-.87s-.47-.97-.47-1.59c.41-.25.72.33 1.32.78.62.46 1.22.52 1.64.51.47 0 .71-.09 1.01-.17.28-.09.53-.23.7-.47a7.3 7.3 0 0 0 3.69-.54c.17-.05.02-.12-.1-.13.29-.32 1.02-.07 1.03-.77 1.44.06 2.93-.29 4.39-.43.34-.03.7.11 1.06.06.13-.02.41-.21.55-.21.95-.02 2.38.49 3.17.04.59-.33 3.47.16 4.96.19 1.2.02 2.35-.08 3.48-.04.88.04 1.79.24 2.53-.08.71.36 2.38.29 3.15.26.17 0 .3-.25.42-.24.13 0 .43.22.52.24.91.15 1.92 0 2.84-.01 1.48 0 3.12.07 4.52-.32 3.05.31 6.34.11 9.45-.13.38.49 1.14.23 1.8.26 1.34.07 2.74.85 4.45.55-.07.12-.18.2-.3.26ZM481.7 261.57c-.25.28.25.27.41.18-.24.33.17.28-.06.57.44.42.48 1.15.74 1.49.22.28.59.33.34.88-.14.28.18.74-.29.75.38.54.05 1.3.32 1.58-.29.32-.57.63-.63 1.01.08.32.36.34.48.61-.37 1.01-.13 2.26-.37 3.35-1.15.16-1.12.92-2.14 1.09-.25-.13-.04-.19-.06-.39-.72.07-.7-.44-1.19-.54-.02-.23.03-.43.11-.62-.34-.17-.23-.4-.6-.4.3-.44-.66-1.16-.61-1.78-.22-.13-.57-.09-.76-.26-.13-.68-.25-1.35-.7-1.94-.39-.52-1.07-.91-1.44-1.43-1.31-1.85-3.08-3.88-4.7-5.86-.09-.11-.37-.17-.46-.29-.08-.1 0-.32-.09-.42-.2-.23-.56-.32-.72-.56-.08-.11-.02-.32-.1-.42-1.47-1.75-3.79-2.88-5.86-4.27-.51-.36-.99-.8-1.56-1.1-1.05-.56-2.17-.96-3.04-1.64-1.38-1.09-2.74-2.66-3.78-3.5-.3-.25-.63-.46-.96-.7-.66-.5-1.22-.95-2.09-1.27-.64-.25-1.21-.47-1.78-.92-.8-.66-1.71-.46-1.66-1.69-.7-.12-1.3-.83-1.9-1.18-.33-.19-.38-.32-.55-.77.48-1.66 1.73-.69 2.48-1.55.97.31 1.9.3 2.9.04.14-.02.05-.11-.03-.14.32-.25.78.13 1-.53 1.07.32 2.31.32 3.46.58.27.06.49.27.77.33.11.02.38-.08.49-.04.72.24 1.58 1.12 2.35.97.29-.06.92.25 1.59.67.67.42 1.4.92 1.92 1.21.83.49 1.71.84 2.47 1.36.59.41 1.1.96 1.79 1.03.26.63 1.44 1.31 1.95 1.68.11.08.34-.05.42.02.08.07.14.39.19.45.5.56 1.25.95 1.82 1.44.94.77 1.88 1.73 2.98 2.26 1.58 1.98 3.5 3.88 5.27 5.82-.21.55.39.91.68 1.39.59 1 .58 2.41 1.54 3.57-.13 0-.25-.05-.36-.11Z'
			/>
			<path
				className='c'
				d='M104.26 145.16c1.6-.1 4.73.2 6.07-.04 3.87-.69 8.42-.98 12.82-1.59 3.04-.42 4.38-.26 6.62-.34 1.71-.06 3.49-.72 5.16-.94 3.51-.47 7.14-.57 10.76-.99 32.03-3.83 61-9.84 89.35-17.57 1.27-.56 1.68-1.38 3.53-1.81 2.52-.11 5.11-.74 7.84-1.68 2.73-.96 5.63-2.14 8.81-3.24 2.81-1.04 5.76-2.08 8.78-3.12 3-1.11 6.05-2.25 9.09-3.38 6.06-2.3 12.12-4.88 17.33-7.82 1.19-.65 2.17-1.68 3.28-2.37 2.5-1.61 5.11-3.19 7.48-4.91 2.38-1.71 4.48-3.64 5.95-5.67 1.88-1.6 3.74-3.34 5.41-5.21 1.67-1.86 3.17-3.8 4.51-5.72 2.69-3.84 4.8-7.57 6.5-10.88 2.23-1.45 3.23-4 4.6-5.68.75-.89 1.36-1.54 1.98-2.15.64-.6 1.26-1.18 1.98-2.02 3.58-3.92 7.62-7.21 11.67-10.15 4.06-2.95 8.16-5.54 12.04-8.14 1.27-.19 2.95-.88 4.14-1.73.19-1.72.55-3.44 3.89-5.01.22-1.33.26-1.6.42-2.58 2.61-.46 3.59-2.29 3.29-3.61-5.5 2.39-11.67 5.82-16.3 5.76-1.47.55-1.63 1.11-2.73 1.66-3.81.63-8.59 2.48-13.28 5.12-4.7 2.61-9.27 6.1-12.72 9.45-1.05 1.47-2.16 2.82-3.23 4.22-1.1 1.36-2.2 2.73-3.27 4.1-2.15 2.73-4.26 5.52-6.34 8.52-.39 2.86-3.18 5.19-5.06 7.38-1.46 1.76-3 4.37-4.93 6.21-2.67 2.51-4.82 3.45-6.25 5.71-1.3.35-1.24.78-2.92 1.43-.76.83-1.71 1.63-2.69 2.25-7.62 4.88-17.74 8.26-24.95 12.01-.66-.15-2.11.43-3.39.8-3.35 1.59-7 2.73-9.63 3.73-2.1.78-3.73.84-5.86 1.51-2.73.89-5.6 2.14-8.31 2.99-10.68 3.3-23.26 6.38-30.34 7.91-4.19.92-8.21 1.81-12.19 2.68-4 .8-7.95 1.65-12.03 2.31-6.88 1.16-11.83 2.39-17.81 3.32-3.17.47-6.43.56-9.64 1.01-5 .66-9.96 2.37-15.84 2.24-1.39.36-2.66.78-4.15 1.11-15.93 1.81-31.29 4.76-51.25 6.37-1.81.18.99.71-.59.78-5.13 1.04-9.47.94-14.35 1.72-.94.15.22.35-.56.53-1.69.4-4.49.48-6.21 1.26-1.16.52-.29 1.3-2.18 1.4-1.96.03-2.54.65-4.62.64-1.27 1.56-4.2 1.47-7.31 2.08-2.07.4-4.59 1.37-6.78 1.79-3.52.68-6.35.42-8.73 1.24-.28.61.87.45.38 1.18 4.35.74 9.13.83 11.58.46 3.12-.47 6.6.26 11.21-.73 1.43-.12-1.29.78.96.4.99-.01 1.05-.42 1.59-.62.08 1.28 7.53.22 8.65-.5-.6.01-1.45.17-1.51-.11 1.62-.11 7.88-.91 10.19-.63-1.79.57-3.42-.12-5.13.68 4.84-.21 8.24-.21 11.71-.77.19-.81-4.17.31-5.53-.25 3.24-.38 7.99-.53 9.69-.83 1.23.18-1.35 1.12.92.89 6.72-.36 12.61-1.69 18.43-2.07Zm-15.29 1.08c-2.21.37 3.98-.66 0 0Zm15.35-1.57c-.42.76-1.07-.14-2.05.18.15-.61 1.74-.22 2.05-.18Zm-5.59.24 3.06-.26c-.14.37-3.44 1.27-3.06.26Zm-36.28 3.36c-.12.55-2.18.29-3.09.51.12-.55 2.18-.29 3.09-.51ZM60.91 247.57c-.81-.06-2.4-.68-3.08-.57-1.96.3-4.26.13-6.48.29-1.53.11-2.22-.19-3.35-.34-.86-.12-1.77.36-2.59.4-1.72.09-3.36-.24-4.77-.38-1.57-.14-2.85-.41-3.83-.78-.97-.38-1.87-.88-2.81-1.59-1.87-1.44-3.78-3.73-5.6-6.44-1.79-2.69-3.69-5.94-5.41-8.95-1.72-3.04-3.25-6.07-4.53-9.12-.44-.49-1.15-.49-1.37-1.32.32-2.49-1.36-4.53-2.22-7.32-.76-2.47-1.21-5.2-1.33-7.89-.02-.68-.05-1.35-.07-2.02-.04-.67.03-1.34.03-1.99-.02-1.31.1-2.59.13-3.82 0-.55-.33-1.16-.29-1.71.05-1.24.3-2.47.57-3.65.12-.59.21-1.18.24-1.76.05-.58.04-1.15-.08-1.72 1.5-3.87 3.1-7.98 3.64-11.74 1.43-.69 1.32-2.23 1.78-3.27.5-1.11 1.03-1.55 1.46-2.62 2.13-5.13 5.06-9.42 6.93-13.81.71-.28 1.39-.94 1.61-1.67-.4-.5-.79-1.01-1-1.55l-.06-3.58c-.76-.02-1.45-.34-1.95-1.28l-2.17.5c-.03-1.5-1.49-1.57-2.68-.98.76 1.54 1.75 3.13 2.31 4.76l-.04-2.26c-.96.92-2.04 1.61-3.36 1.8-.62.52-.39.91-.77 1.39-4.25 1.58-8.33 6.58-10.65 10.58-.64 3.52-2.68 6.03-4.25 9.71.63 1.77-.95 3.24-1.69 4.82-.52 1.28-.65 3.21-1.08 4.82-.31 1.1-.71 1.95-.94 2.75-.2.81-.26 1.57.06 2.42-.6.66-.3.84-.84 1.83.17.71.23 1.48.16 2.17-.16 1.34-.25 2.75-.37 4.15-.15 1.42-.14 2.86-.17 4.25 0 2.8.31 5.52 1.1 7.73-.32.37-.17 1.25-.13 2.02.37 1.01.67 2.03.89 3 .27.96.47 1.87.75 2.61.45 1.17.25 2.14.65 3.32.24.77.61 1.52 1 2.24.38.74.78 1.45 1.1 2.16 2.39 5.61 5.67 11.6 7.53 14.86 2.19 3.81 4.43 7.36 7.27 11.17 2.46 3.21 5.03 5.15 8.34 7.18 1.75 1.06 3.64 2.31 5.75 2.87 1.62.44 3.27.43 4.87.42 1.59-.01 3.15-.04 4.76.37.77-.2 1.46-.47 2.23-.64 8.11-.16 15.84-1.57 25.95-1.16.92 0-.51-.81.29-.71 2.59-.52 4.79.02 7.26-.27.48-.06-.12-.37.28-.47.85-.23 2.27-.03 3.14-.63.58-.4.13-1.26 1.09-1.17.99.16 1.28-.39 2.34-.17.63-1.42 2.11-1.04 3.69-1.34 1.05-.19 2.31-.9 3.42-1.1 1.78-.33 3.21.22 4.41-.35.13-.57-.45-.53-.2-1.21-2.21-1.17-4.64-1.74-5.87-1.62-1.58.16-3.35-.92-5.68-.4-.72-.03.65-.64-.49-.5-.5-.09-.53.31-.8.46-.05-1.28-3.82-.97-4.38-.37.3.05.74-.02.77.26-.82-.05-3.99.11-5.16-.39.9-.38 1.74.46 2.6-.16-2.45-.27-4.18-.62-5.93-.41-.09.79 2.11.11 2.8.8-1.64.06-4.05-.27-4.91-.14-.63-.3.67-.98-.47-.97-3.4-.31-6.38.42-9.33.21Zm7.74.46c1.12-.15-2.01.26 0 0Zm-7.77.02c.21-.71.54.24 1.04.03-.07.59-.88.04-1.04-.03Zm2.83.32-1.55-.04c.07-.35 1.73-.91 1.55.04Zm18.36.3c.06-.53 1.1-.07 1.56-.2-.06.53-1.1.07-1.56.2ZM291.08 232.35c.95.24 2.29.75 3.59 1.25 1.3.5 2.58.94 3.38 1.13 4.67.99 9.86 2.86 14.91 4.62 3.48 1.23 4.81 2.15 7.19 3.36 1.8.94 3.99 1.46 5.81 2.32 1.88.94 3.78 1.92 5.58 3.06.91.56 1.83 1.1 2.74 1.67.89.59 1.8 1.17 2.71 1.73 3.99 2.55 7.85 5.19 11.39 8.11l1.35 1.07 1.29 1.13 2.58 2.25c1.78 1.65 3.56 3.28 5.32 4.91 3.7 3.36 7.74 6.9 12.92 9.74 2.58 1.4 5.46 2.62 8.59 3.34 3.13.7 6.45.92 9.72.52 3.25-.4 6.34-1.36 9.12-2.69 2.78-1.34 5.28-3.02 7.51-4.92 2.23-1.91 4.19-4.03 5.91-6.34a40.88 40.88 0 0 0 2.37-3.57c.71-1.19 1.35-2.41 1.93-3.64 2.35-4.92 3.77-9.94 4.8-14.77 1.02-4.86 1.67-9.49 2.2-14.1 0-1.76-.55-2.6-.17-4.98.47-1.51.89-3.09 1.1-4.76.21-1.67.34-3.43.43-5.26.17-3.66.28-7.6.26-11.85.37-15.08.08-33.04-2.16-47.31-.11-.81-.3-1.61-.5-2.4-.23-.78-.47-1.56-.62-2.33-.68-3.5-1.16-7.09-1.71-10.49-.65-3.39-1.44-6.58-2.52-9.28-.24-1.42-.48-2.85-.72-4.29-.3-1.42-.62-2.85-.95-4.27-.65-2.84-1.34-5.67-2.06-8.43-.79-2.74-1.69-5.39-2.57-7.94-.45-1.27-.9-2.51-1.35-3.72-.23-.6-.46-1.19-.69-1.78l-.77-1.69c-.11-3.4-1.98-6.61-2.99-9.42-.53-1.52-.93-2.68-1.32-3.81s-.78-2.24-1.38-3.64c-2.75-6.74-5.76-13.05-8.51-19.13-3.07-5.93-5.83-11.69-9.18-16.76-.35-1.58-1.29-3.76-2.37-5.31-1.83-.43-3.73-1-6.04-5.06-1.45-.31-1.75-.37-2.82-.6-.98-3.13-3.11-4.35-4.42-4 1.78 3.29 3.86 6.79 5.55 10.14.88 1.65 1.5 3.37 2.02 4.94.5 1.59.83 3.08.9 4.43.68 1.77 1.28 2.02 1.93 3.36.46 2.23 1.01 4.85 1.84 7.57.4 1.37.85 2.77 1.34 4.19.25.71.5 1.43.75 2.15.23.73.47 1.47.7 2.21.96 2.96 2.02 5.93 3.09 8.77.57 1.41 1 2.85 1.48 4.21.49 1.36.95 2.68 1.4 3.93.96 1.75 1.81 3.5 2.58 5.29.7 1.81 1.33 3.64 1.94 5.52.59 1.88 1.2 3.79 1.82 5.78.6 1.99 1.1 4.08 1.74 6.24 2.11 2.69 2.51 7.21 3.22 11.04.31 1.49.85 3.23 1.43 5.04s1.2 3.7 1.52 5.52c.96 4.98 1.08 8.16 2.64 11.31-.18 1.75.21 1.96.21 4.35.5 1.4.93 2.98 1.21 4.49.59 2.92.89 5.98 1.24 9.04l.51 4.6c.08.77.17 1.53.25 2.29l.15 2.29c.21 3.04.43 6.01.71 8.86l.21 2.11.15 2.06c.11 1.35.23 2.66.39 3.92-.35.71-.32 2.66-.36 4.33.3 2.31.25 4.65.22 6.86s-.09 4.28-.07 6.03c.08 2.81-.58 4.73-.77 7.51-.14 1.79-.17 3.66-.19 5.52-.02.93 0 1.87-.05 2.78-.06.92-.13 1.82-.23 2.7-.38 3.46-.74 7.07-1.18 10.64-.49 3.56-1.08 7.01-1.84 10.18s-1.72 6.05-2.82 8.5c-1.1 2.45-2.32 4.47-3.45 5.97-2.71 3.61-6.2 6.43-9.9 7.87-1.85.71-3.75 1.08-5.62 1.06-1.91-.04-3.84-.44-5.76-1.22-3.25-1.34-6.07-3.22-8.77-5.28-2.7-2.06-5.25-4.33-8.07-6.95-1.52-1.44-3.04-2.88-4.58-4.33-1.53-1.5-3.18-2.86-4.86-4.2-5.31-4.08-11.52-6.91-17.78-11.26-1.72-.77-3.4-1.26-5.22-2.03-9.38-4.64-19.17-7.97-29.7-10.62-10.54-2.68-21.87-4.61-34.59-6.33-2.31-.26 1.06.94-.95.61-6.69-.23-12.11-1.21-18.41-1.3-1.22-.01.21.38-.81.43-2.2.11-5.74-.26-8.04.26-1.55.35-.6 1.23-2.98 1.07-2.46-.23-3.3.28-5.89.01-1.85 1.39-5.49.94-9.48 1.2-2.65.17-5.94.86-8.73 1.06-4.49.32-7.98-.21-11.07.37-.43.58 1.02.53.3 1.21 5.32 1.15 11.26 1.73 14.36 1.62 3.96-.14 8.17.96 14.04.57 1.79.06-1.73.61 1.13.52 1.23.11 1.37-.28 2.07-.41-.12 1.26 9.26 1.26 10.78.77-.74-.09-1.82-.07-1.84-.35 1.01.06 3.48.19 6.05.34 2.56.2 5.22.45 6.59.82-2.31.19-4.17-.75-6.43-.28 5.98.63 10.11 1.37 14.46 1.58.42-.74-5.13-.63-6.67-1.42 2.03.12 4.49.45 6.72.72 2.22.3 4.2.59 5.26.64 1.44.49-1.92.74.87 1.1 8.16 1.37 15.53 1.96 22.42 3.79Zm-18.37-3.93c-2.75-.26 4.95.49 0 0Zm18.62 3.5c-.77.56-1.19-.52-2.45-.6.39-.52 2.11.44 2.45.6Zm-6.62-1.77c1.22.27 2.46.52 3.68.81-.29.28-4.46.02-3.68-.81Zm-44.81-5.19c-.25.53-2.74-.05-3.91.06.25-.53 2.75.02 3.91-.06ZM176.11 200.39c-.03-.37.39-1.27.23-1.53-.47-.73-.54-1.77-.89-2.65-.24-.61-.03-1.01 0-1.54.03-.41-.49-.61-.61-.95-.25-.71-.14-1.58-.32-2.33-1.62-6.61-4.2-11.94-5.17-17.5-.26-.22-.91-.21-.88-.59 1.04-1.15-.02-2.06-.31-3.32-.54-2.24-.26-4.91-.56-7-.03-.24-.44-.49-.5-.72-.28-1.07.38-2.09-.62-3.04.56-1.67.83-3.37.12-5.03 1.08-.24.47-.92.55-1.39.07-.49.41-.67.45-1.17.2-2.41 1.32-4.84 1.01-7.54.5-.26.8-.76.64-1.2-1.39-.42-2.68-.79-2.5-1.72-1.08-.2-1.29-.23-2.09-.35.79-.61-.44-.94-1.73-.84-.27 1.15-.26 2.61-2.72 2.94-.3.22.08.36-.03.55-1.49.37-2.59.92-3.45 1.67-.86.75-1.48 1.71-1.87 2.67.56 1.74-.53 3.12-.92 4.97 1.12.9.03 1.62-.23 2.41-.21.62.27 1.56.17 2.31-.1 1.03-.72 1.64.24 2.39-.46.32-.1.39-.49.85.27.31.43.65.48.95.27 2.38-.19 5.07 1.02 6.95-.36.17-.32.55-.36.88.5.86.45 1.79.68 2.44.17.52-.21.96-.13 1.5.09.69.65 1.36.82 2.01.65 2.6 1.41 5.55 1.87 7.18.54 1.93 1.29 3.61 1.78 5.45.42 1.56 1.18 2.51 1.59 3.83.22.69.08 1.54.29 2.24.32 1.11 1.61 1.83 1.2 3.41.26.24.58.43.82.7.47 1.75 1.23 3.33 1.95 5.04.73 1.72 1.38 3.49 1.77 5.85.11.42.68-.54.69-.14.78.97.58 2.19 1.21 3.23.12.2.31-.21.47-.07.34.3.39 1.05 1.07 1.18.46.09 1.13-.51 1.22-.04.04.53.56.4.57.99 1.35-.42 1.3.42 1.88.96.39.36 1.25.5 1.66.84.67.54.63 1.48 1.39 1.59.46-.33.28-.53.85-.88.3-1.62.31-2.84-.02-3.24-.43-.52.17-1.76-.6-2.39-.08-.29.65-.08.36-.44 0-.23-.34-.05-.51-.08 1.09-.65.35-1.92-.24-1.89 0 .14.1.28-.14.42-.06-.35-.58-1.54-.24-2.23.44.2-.22.89.44.97-.04-1.08.11-1.92-.26-2.55-.73.27.11.9-.44 1.46-.23-.64-.17-1.76-.37-2.07.21-.37.97-.09.85-.57-.04-1.52-1.01-2.53-1.12-3.87Zm.34 3.47c.24.42-.44-.75 0 0Zm-.79-3.3c.68-.17-.17.32.08.46-.56.19-.13-.36-.08-.46Zm-.01 1.33-.11-.68c.33-.1 1.02.41.11.68Zm1.68 7.67c.48-.23.2.4.38.52-.48.23-.21-.4-.38-.52Z'
			/>
			<path
				className='c'
				d='M45.5 185.29c.09-.15.78-.54.71-.62-.2-.26.1-.68.06-1.02-.01-.25.32-.39.54-.59.17-.15-.24-.26-.23-.4.01-.29.43-.62.53-.92.42-1.32.5-2.75.51-4.11.02-1.36-.02-2.7.2-4.01-.19-.15-.83-.28-.71-.44 1.27-.29.47-.91.43-1.54-.07-1.11.6-2.3.48-3.38-.01-.12-.39-.32-.43-.45-.19-.58.51-.96-.46-1.63.59-.74.78-1.59-.04-2.6 1.01.04.38-.42.39-.66.02-.25.31-.29.28-.54-.16-1.2.46-2.05.13-3.16h.02l-.93-4.68c.24-.4.27-.69.03-.67-1.11.9-2.16 1.72-2.3 1.32-.84.68-1.01.81-1.63 1.31.41-.75-.57-.07-1.55.8.13.7.7 1.14-.55 2.89l-.78-3.91-.26-.04c-.3.07.06.25-.06.35-2.89-.24-4.3.82-4.81 1.74.76 1.04-.09 1.5-.34 2.33 1.16.64.12.79-.1 1.12-.17.26.28.79.19 1.13-.11.46-.72.63.17 1.17-.47.06-.12.16-.52.3.25.2.4.39.41.54.11 1.16-.69 2.29.17 3.4-.37 0-.4.18-.5.32.33.49.11.9.2 1.24.07.27-.39.39-.44.65-.06.33.33.75.34 1.07 0 1.3-.1 2.78-.17 3.61-.08.98.09 1.89-.06 2.83-.14.8.26 1.38.17 2.07-.04.37-.46.76-.52 1.15-.09.62.87 1.18-.06 1.95.17.17.4.31.53.49-.16 1.01.05 2 .23 3.08.19 1.09.35 2.25.26 3.82.02.27.76-.41.68-.14.54.58.11 1.42.52 2.06.08.12.33-.19.44-.11.25.15.16.67.76.65.4-.02 1.12-.55 1.1-.24-.07.36.41.17.32.56 1.27-.57 1.04.01 1.43.26.26.16.94.05 1.2.19.42.21.19.91.74.82.43-.37.34-.47.85-.88.62-1.3.93-2.09.77-2.27-.22-.22.59-1.17.11-1.32 0-.15.56-.22.41-.35.06-.13-.28.07-.41.09 1.09-.68.81-1.14.28-.99-.04.08.02.13-.23.26.05-.18-.11-.7.37-1.1.33.01-.43.49.13.39.25-.54.63-.97.46-1.18-.74.26-.14.39-.79.78-.04-.28.31-.82.22-.93.3-.2.91-.2.93-.39.39-.64-.19-.95.14-1.5Zm-.74 1.44c.11.15-.18-.28 0 0Zm.27-1.34c.69-.12-.26.14-.07.18-.57.12 0-.14.07-.18Zm-.43.57.11-.28c.34-.06.81.09-.11.28Zm-.58 3.41c.47-.24.08.17.19.19-.46.25-.08-.17-.19-.19ZM56.34 238.73c.04-.18.54-.78.44-.85-.28-.19-.17-.68-.34-.99-.11-.22.15-.49.27-.76.1-.21-.32-.13-.37-.26-.1-.26.15-.72.11-1.02-.3-2.64-1.86-4.35-2.51-6.51-.23-.02-.86.16-.82-.01 1.03-.78.07-.88-.23-1.33-.51-.8-.41-1.96-.96-2.71-.06-.09-.48-.07-.57-.15-.41-.35.03-.92-1.1-1.01.22-.8 0-1.5-1.15-1.9.93-.39.16-.47.07-.65-.1-.19.15-.34 0-.51-.65-.82-.51-1.7-1.28-2.38.44-.16.65-.33.45-.43-1.42.09-2.76.14-2.62-.19-1.08.05-1.29.05-2.09.09.78-.3-.41-.33-1.72-.24-.33.59-.13 1.2-2.43 1.87-.24.18.16.17.1.29-2.68 1.03-3.45 2.43-3.51 3.34 1.15.46.6 1.17.72 1.9 1.31-.01.46.54.4.88-.04.27.59.47.66.77.09.4-.39.79.65.81-.4.24-.04.17-.33.45.3.04.52.12.6.23.58.83.36 2.02 1.58 2.48-.33.16-.28.31-.32.46.5.23.48.63.69.85.17.18-.19.47-.12.68.08.28.6.42.73.67.56.97 1.01 2.16 1.3 2.81.32.78.82 1.4 1.05 2.19.19.67.74.95.95 1.5.1.3-.13.77-.04 1.09.13.49 1.18.5.6 1.46.2.05.46.05.63.13.16.81.62 1.44 1.04 2.14.4.72.79 1.49.83 2.66.04.19.65-.55.61-.33.53.25.2 1 .55 1.35.07.07.3-.23.4-.21.23.04.13.45.66.28.36-.11 1.03-.7 1-.46-.09.29.37.03.24.37 1.18-.71.95-.2 1.26-.06.21.09.83-.08 1.05 0 .34.15 0 .76.5.65.46-.33.4-.42.94-.78.81-1.14 1.16-1.94 1.01-2.1-.19-.2.59-1.17.09-1.29 0-.15.54-.26.38-.38.05-.14-.27.08-.4.12 1.03-.76.66-1.26.16-1.02-.03.08.04.12-.19.29.02-.18-.22-.67.16-1.17.34-.05-.32.57.22.38.15-.6.38-1.1.17-1.31-.66.42-.04.45-.59.96-.1-.27.12-.89-.01-.98.23-.28.83-.41.8-.62.19-.78-.5-.91-.37-1.56Zm-.23 1.64c.15.12-.26-.22 0 0Zm-.18-1.39c.61-.34-.2.22 0 .2-.5.3-.05-.14 0-.2Zm-.22.68v-.3c.31-.17.81-.17 0 .3Zm.26 3.52c.44-.3.09.16.21.17-.43.3-.1-.16-.21-.17ZM382.48 255.13c-1.47.08-1.28-1.74-2.55-2.63-.87-4.55-2.18-8.81-3.63-13.16-.74-2.24-1.34-4.39-2.15-7.08-.37-1.24-1.21-2.34-1.56-3.53-.2-.66 0-1.57-.17-2.24-.21-.89-.95-1.62-1.24-2.49-.42-1.25-.29-2.71-.7-4.08-.28-.95-1.05-1.87-1.31-2.76-.23-.79-.04-1.67-.22-2.51-.37-1.7-1.2-4.55-1.87-6.6-.23-.68-.7-1.05-.98-1.72-.62-1.52-.87-3.39-1.38-5.04-1.61-5.24-4.64-13.63-6.95-20.7-1.99-6.04-2.79-12.45-4.17-18.66-.23-1.1-.8-2.07-1.06-3.2-.71-2.96-.79-6.21-1.31-9.38-.25-1.65-.51-3.33-.77-5-.24-1.67-.43-3.34-.59-4.94-.18-1.73.05-3.59-.11-5.32-.09-.99-.49-2.03-.56-3.03-.04-.77.29-1.49.3-2.27 0-1.31-.15-2.88-.27-4.59-.11-1.71-.21-3.57-.17-5.45.12-2.65.02-6.13.21-8.66.06-.87-.33-2.95-.29-4.46.01-.46.44-1.09.5-1.67.16-1.62.41-3.24.55-4.73.08-.76-.28-1.66-.14-2.51.06-.39.51-.72.53-1.09.09-2.29-.19-4.89-.04-7.54.13-2.79 1.17-5.6.03-8.15 1.04-1.2.25-3.13.37-4.76.08-1.36.32-2.69.55-4.06.23-1.37.42-2.79.52-4.32.24-2.54.96-5.27 1.34-7.79.13-.93.02-1.95.17-2.86.26-1.78 1.07-3.62 1.78-5.52.69-1.91 1.41-3.85 1.59-5.9 1.47-2.16 2.51-5.12 4.45-6.54.67-.49 1.07-.66 1.91-1.09 2.81 1.61 2.62 3.7 5.02 5.28.58 1.19.03 2.41.02 3.66 0 1.15.32 2.3.21 3.39-.26 2.29-1.26 4.76-1.76 7.17-.31 1.47-.08 2.9-.28 4.26-.62 4.32-2.14 9.25-3.35 13.85-.32 1.22-.96 2.44-1.21 3.58-.19.88-.23 1.76-.27 2.64-.02.88 0 1.77-.1 2.67-.12 1.08-.28 2.16-.45 3.25-.16 1.09-.32 2.19-.49 3.3-.17 1.11-.35 2.22-.53 3.33l-.43 3.35c-.32 2.45-.8 5.41-.9 7.49-.1 1.9-.32 3.14-.46 4.57-.43 4.58-.22 9.4-.17 14.04 0 1.68.1 3.34.15 4.97.05 1.63.12 3.23.19 4.78.07 1.59-.17 3.11.02 4.63.26 2.03.55 4.05.86 6.07.33 2.02.6 4.03.79 6.04.06.62-.27 1.31-.17 1.95.29 1.77 1.02 3.5 1.38 5.28.43 2.21.53 4.52 1.01 6.73.33 1.53 1.05 2.91 1.37 4.44.48 2.2.41 4.48.96 6.75.22.9.61 1.72.84 2.61.5 1.96.48 4.15.96 6.2.48 2.09 1.57 4.03 1.97 5.97.57 2.85 1 5.88 1.57 8.88.92 4.67 1.87 8.81 3.41 14.06.62 2.14.98 5.03 1.52 6.95.78 2.85 1.39 6.53 2.66 10.61.65 2.07 1.42 4.21 1.9 6.27.28 1.21.08 2.47.36 3.61.32 1.33 1.18 2.6 1.47 3.84.34 1.48.31 3.24.76 5.25.12.55.49.98.56 1.56.04.37-.25.55-.17.94.2 1.06 1.54 2.92.17 3.81ZM107.17 274.36c.04-.2.55-.81.44-.9-.3-.27-.2-.82-.39-1.2-.13-.27.12-.54.23-.85.08-.23-.35-.2-.41-.35-.13-.32.1-.83.03-1.2-.62-3.22-2.48-5.1-3.2-7.24-.23-.02-.85.19-.81.01 1-.81.04-.87-.26-1.3-.52-.77-.39-1.9-.91-2.64-.06-.09-.48-.09-.57-.16-.39-.36.09-.9-1.05-1.05.26-.78.12-1.49-1.01-1.99.96-.31.19-.46.13-.65-.08-.2.19-.33.06-.51-.57-.9-.29-1.76-.97-2.56.46-.09.69-.23.51-.36-1.42-.13-2.75-.29-2.55-.61-1.07-.13-1.28-.16-2.08-.26.82-.19-.35-.42-1.65-.55-.44.58-.34 1.27-2.71 1.65-.26.16.13.21.06.34-2.8.72-3.74 2.24-3.88 3.28 1.09.69.48 1.42.57 2.29 1.32.14.42.67.35 1.06-.05.3.58.61.63.95.09.47-.4.87.64.99-.4.25-.04.2-.34.49.31.08.52.18.6.31.59.99.38 2.35 1.64 2.93-.33.17-.27.34-.3.51.53.27.51.74.75.99.18.2-.16.52-.08.77.11.31.64.48.8.76.62 1.1 1.22 2.35 1.55 3.05.39.82.95 1.45 1.22 2.26.23.68.82.94 1.03 1.51.11.3-.11.78-.02 1.09.14.48 1.19.48.59 1.44.2.05.46.05.62.13.3 1.59 1.71 2.54 1.55 4.82.02.19.7-.48.64-.27.51.3.08 1 .38 1.38.06.07.32-.19.42-.16.22.07.07.45.62.36.37-.07 1.11-.55 1.06-.32-.12.28.37.08.2.4 1.27-.53.96-.05 1.25.14.19.13.84.06 1.04.2.32.22-.12.76.4.75.51-.24.46-.34 1.06-.6.98-1 1.44-1.76 1.31-1.96-.17-.25.74-1.12.24-1.36 0-.16.58-.16.43-.33.07-.14-.29.04-.42.05 1.12-.6.78-1.24.24-1.08-.04.08.03.14-.22.28.03-.19-.18-.77.24-1.25.36 0-.37.57.2.46.19-.63.46-1.15.24-1.42-.7.35-.05.49-.65.95-.08-.31.16-.96.03-1.08.25-.27.88-.31.85-.55.21-.85-.5-1.12-.37-1.83Zm-.25 1.81c.15.16-.27-.3 0 0Zm-.17-1.6c.63-.29-.2.22 0 .23-.53.26-.06-.16 0-.23Zm-.23.73v-.34c.32-.15.85-.07 0 .34Zm.11 3.93c.47-.24.09.19.21.23-.47.23-.09-.19-.21-.23Z'
			/>
			<path
				className='d'
				d='M119.32 385.06c-.03-.56 1.46-2.36 1.17-2.65-.38.22-.74.73-1.07 1.3-.31.58-.6 1.22-.87 1.72-1.12 2.16-2.27 4.42-3.18 7.78-.62 2.38-.92 4.75-.84 7.13.08 2.37.46 4.72 1.07 7.05 1.22 4.66 3.25 9.2 5.63 13.95.36.88.23 1.27.6 2.15.97 1.96 1.54 2.19 2.13 3.86-.35.6-1.39-.93-2.48-2.7-1.1-1.76-2.22-3.76-2.93-4.04-1.11-2.03-2.31-4.64-3.27-6.93-.5-1.14-.89-2.21-1.29-3.05-.35-.86-.69-1.49-.99-1.79-1.21-4.44-1.74-8.96-1.16-13.35.57-4.38 2.09-8.5 4.04-12.24 3.85-7.55 9.09-13.85 12.87-21.2 1.1-2.56 1.88-5.07 1.53-7.27-.31-2.26-1.65-4.49-3.21-6.72-1.58-2.22-3.36-4.66-4.78-7.17-.77-1.23-1.4-2.54-2.09-3.81-.62-1.3-1.27-2.6-1.81-3.93-1.23-2.81-2.24-5.73-3.14-8.65-.82-2.95-1.52-5.92-1.88-8.88-.17-1.03.02-1.76-.08-2.67-.6-6.98-.71-14.22 1.28-22.73.55-2.18 1.13-4.17 1.9-6.16.77-1.99 1.73-4 3.17-6.11 1.77-2.58 4.34-5.48 7.86-7.76 1.77-1.12 3.76-2.12 5.95-2.74 2.18-.65 4.59-.89 6.84-.78 2.22.09 4.35.51 6.37.91 2.01.41 4 .81 5.97 1.12.85.13 1.76.09 2.59.22.83.14 1.26.33 2.26.55.68.15 1.47.14 2.13.35.72.23 1.49.55 2.28.99.79.44 1.62 1.01 2.38 1.88.76.85 1.4 2.1 1.54 3.4.15 1.25-.12 2.59-.68 3.64-.66 1.25-1.56 2.11-2.43 2.78-.88.67-1.77 1.17-2.64 1.59-1.63.76-3.25 1.45-4.85 1.94-2.17.69-4.67 1.3-7.65 1.6-.94.1-1.83-.02-2.73-.02-.73.03-1.95.19-2.7.19-1.82-.06-3.36-.31-4.96-.61-1.6-.27-3.23-.61-5.3-.84-.61-.22-1.13-.46-1.68-.69-.54-.25-1.12-.5-1.87-.74.56-.39 1.83-.26 3.14-.25.1-.42-1.57-1.03-.85-1.15 3.56.44 6.58 1.27 9.64 1.08 2.42-.16 4.21-.95 6.74-1.13 1.05-.28 1.32-.72 2.33-1.04 2.18-.36 4.38-1.08 6.56-2.04 1.08-.5 2.25-1.01 3.1-1.57.89-.56 1.53-1.26 1.63-1.65.09-.24.14-.52.1-.79-.07-.28-.39-.74-.95-1.1-.48-.28-.62-.09-.84-.18-.35-.14-1.29-.54-2.5-.81-.56-.13-1.33-.26-2.05-.4a1816.427 1816.427 0 0 1-8.45-1.6c-2.54-.49-5.16-.92-7.3-.87-4.11.05-7.82 1.87-10.84 4.52-3.04 2.67-5.37 6.18-7.23 10.5-.51 1.86-1.28 4.27-1.85 6.9-.29 1.31-.54 2.67-.71 4.01-.21 1.33-.29 2.65-.33 3.88-.18 4.49-.29 11.08.82 16.62.55 2.91 1.35 5.75 2.26 8.54.96 2.77 2.07 5.47 3.36 8.08 1.33 2.58 2.73 5.13 4.41 7.5 1.58 2.4 3.64 4.82 5.1 8.02.72 1.59 1.24 3.43 1.3 5.35.05 1.94-.38 3.75-.93 5.36-1.17 3.17-2.66 5.96-4.34 8.69-3.33 5.43-7.24 10.33-10.32 15.66ZM170.83 250.98c.1-.3.92-.1.88-.51-.32-.36-.83 0-1.2.09-.8.19-1.63.37-2.8.71-3.3.97-6.23 2.24-9.72 3.17-.33.02-.52-.24-.85-.23-.73.14-.76.56-1.41.46-.61-1.08 2.18-1.29 2.22-2.36 1.42-.63 3.67-1.17 3.89-2.09 2.89-.99 5.51-2.15 8.22-3.03 2.71-.86 5.55-1.46 8.59-1.13 4.06-.47 8.15.32 11.9 1.79 2 .78 4.04 1.66 5.73 2.97.3.23.36.53.63.76.5.44 1.17.98 1.66 1.95.5 1.01.51 2.08.38 2.92-.14.87-.38 1.56-.7 2.31-.32.73-.74 1.44-1.24 2.1-1.03 1.34-1.86 2.43-3.23 3.47-1.67 1.24-3.91 2.98-6.45 4.43-1.24.72-2.67 1.11-3.91 1.76-.27.13-.48.44-.75.57-.27.13-.48.07-.77.18-.2.08-.34.37-.52.45-.83.38-1.9.65-2.84.98-1.12.39-2.28.83-3.37 1.05-.75.13-1.59.29-2.6.3-.32 0-.65-.17-.96-.2-.25-.01-.64.14-.89.14-1.24-.04-2.17-.7-3.52-.33-.45-.16-.77-.45-1.3-.52.12-.51.53-.77.94-1.02-.03-.43-.64-.64-.43-.93 1.17-.4 2.25.01 3.24-.31.78-.26 1.29-.99 2.16-.95.34-.18.38-.55.7-.74 1.51-.08 2.95-.91 4.6-1.43.54-.19 1.19-.13 1.75-.34.23-.08.16-.3.25-.35.29-.15 1.49-.57 2.18-.86.93-.38 2.83-1.15 4.17-1.9 1.32-.71 2.45-1.55 3.57-2.44 1.14-.89 2.23-1.77 3.34-2.67.27-.56.76-1.08 1.17-1.65.42-.55.77-1.21.79-1.74v-.39c.27-.02.51-.08.59-.11 0 0-.13.06-.26.13l-.21.14v-.02c0-.08-.22-.34-.59-.63-.35-.28-.69-.58-1.07-.8-3.1-1.95-6.65-3.05-10.36-3.51-3.72-.48-7.58-.29-11.64.38ZM177.94 414.41c-.05-.48 1.22-1.94.9-2.21-.68.34-1.16 1.66-1.61 2.47-.98 1.76-2.04 3.57-3.46 6.18-4.02 7.39-7.42 14.33-11.58 21.9-.43.64-.8.71-1.23 1.34-.88 1.52-.71 2.04-1.62 3.15-1.34-.05 2.21-5.5 1.74-6.77 1.58-3.35 4.33-8.15 4.16-9.54 6.76-12.89 11.58-24.28 19.53-35.66 4.55-8.08 9.74-15.56 14.9-22.9 2.74-3.91 5.41-7.94 8.24-11.63.49-.65.99-.96 1.42-1.53 1.67-2.17 3.28-4.38 4.81-6.78 1.52-2.4 2.99-4.97 4.14-7.89.59-1.5.96-2.91 1.2-4.36.21-1.45.4-2.98.12-4.09-.19-.67-.43-1.06-1.21-1.53-.39-.22-.88-.42-1.45-.59-.56-.17-1.25-.27-1.9-.41-1.33-.19-2.74-.26-4.19-.19-1.45.1-2.93.33-4.42.67-2.9.69-5.96 1.59-8.67 3.01-.58.31-1.11.79-1.67 1.12-.56.31-.97.38-1.56.71-.42.23-.75.68-1.14.92-1.71 1.06-3.85 2.27-5.79 3.48-2.29 1.44-4.69 2.99-7.05 4.15-1.61.79-3.47 1.63-5.78 2.32-.73.22-1.47.23-2.19.37-.58.14-1.52.48-2.12.59-1.54.25-2.91.18-4.3-.03-1.39-.23-2.84-.47-4.65-1.26-.97-.78-1.47-1.6-2.11-2.85.64.11 1.41.84 2.38 1.2.13-.19-.06-.49-.14-.78-.09-.28-.12-.48.14-.44.92.66 1.99 1.05 3.13 1.29 1.14.23 2.34.25 3.47-.01.89-.2 1.65-.64 2.44-1.01.78-.4 1.57-.76 2.55-1.02.77-.4.88-.87 1.62-1.29 3.36-1.21 6.53-3.54 10.26-5.83 1.22-.74 2.64-1.33 3.93-2.1.53-.31.44-.52.65-.67.67-.47 3.56-2.08 5.35-2.93 1.18-.58 3.01-1.41 5.09-2.15 2.07-.75 4.4-1.38 6.45-1.73 4-.68 7.96-.77 11.98.4 1.04.33 2.17.8 3.24 1.67 1.08.85 1.97 2.23 2.32 3.55.38 1.33.38 2.58.28 3.73-.05.58-.14 1.12-.24 1.65-.09.54-.21 1.08-.36 1.61-.19 1.82-.95 4.1-2 6.29-1.04 2.2-2.34 4.32-3.4 6.16-1.95 3.46-5.63 7.55-8.32 11.32-11.48 15.93-21.77 31.44-32.29 48.93Z'
			/>
			<path
				className='d'
				d='M155.95 361.59c.32.12.19 1.06.6.98.32-.39-.08-.92-.19-1.34l-.25-1.41c-.05-.5-.13-1.07-.18-1.72-.26-3.7.13-7.07 1.34-10.5.18-.28.5-.29.68-.56.31-.66 0-.94.46-1.39 1.21.17-.24 2.48.64 3.12-.29 1.46-.89 3.62-.15 4.21-.38 2.84 0 5.52.83 7.77.85 2.27 2.07 4.01 3.58 5.78 2.66 1.64 5.75 2.63 8.96 2.67 1.72 0 3.46-.41 5.17-.71.3-.05.55.11.82.06 2.06-.39 4.03-1.35 6.51-2.29 1.28-.48 2.24-1.1 3.63-1.61 1.71-.62 3.98-1.79 6.23-2.99 1.1-.59 2.36-.97 3.37-1.66.22-.15.36-.45.56-.61.21-.15.41-.11.64-.25.16-.1.21-.4.35-.5.63-.46 1.45-.91 2.13-1.43.39-.32.78-.65 1.17-.98.37-.34.74-.67 1.11-.95.52-.37 1.06-.84 1.8-1.29.23-.15.56-.16.8-.29.19-.11.36-.43.55-.55.46-.29.9-.48 1.37-.72.46-.23.88-.54 1.14-1.12.39-.19.8-.23 1.18-.55.33.4.28.85.2 1.32.34.27.9-.06.99.29-.46 1.2-1.57 1.67-2.1 2.56-.44.7-.44 1.61-1.21 2.1-.2.34-.03.68-.24 1.03-1.3.93-2.35 2.3-3.86 3.43-.49.36-1.17.5-1.68.85-.21.14-.1.34-.18.41-.26.22-1.43.91-2.12 1.29-.92.52-2.85 1.47-4.3 2.14-2.8 1.32-5.13 2.86-8.31 3.76-1.12.86-3.3 1.18-4.84 1.95-1.41.72-3.76.99-5.74 1.38-4.15.88-8.77.84-12.95-.99-2.08-.91-4.07-2.3-5.58-4.2-1.51-1.87-2.5-4.16-2.94-6.49ZM210.22 308.9c-.17.28-1.07 0-1.06.42.33.39.91.06 1.34.05.9-.04 1.98.02 3.32.38 1.92.53 3.65 1.45 5.09 2.89.7.74 1.32 1.61 1.76 2.64.43 1.03.62 2.23.5 3.42-.06.21-.17.34-.28.46l-.08.09-.04.05v.02l-1.17-.17h.04c.09.02.19.02.32 0 .31-.04.46-.11.44-.1l-.12.07s-.18.1-.25.17c-.2.14-.42.37-.52.57-.05.08-.02.18-.04.12 0-.02-.13-.14-.34-.2-.08-.01-.03-.02.1.04.07.04.15.09.2.12.03.04.04.05.04.05.01.03 0 0 0-.02 0 0 .01-.09.04-.12a.76.76 0 0 1 .12-.19c.05-.08.12-.14.19-.21.06-.07.18-.15.14-.12-.04.01-.1-.04-.15-.09-.05-.06-.07-.09-.1-.09-.01-.19-.04-.37-.07-.53-.06-.33-.23-.57-.49-.65-.09-1.51-1.27-3.53-2.2-3.25-.88-.97-2.06-1.57-3.21-1.89-1.18-.31-2.28-.29-3.38-.08-2.22.43-4.18 1.41-6.57 2.3-1.38 1-2.79 1.99-4.26 2.95-1.47.94-2.93 1.88-4.38 2.81-1.53 1.01-2.96 2.2-4.47 3.16-.26.17-.56.11-.79.26-1.79 1.12-3.37 2.61-5.42 4.18-1.06.81-1.78 1.66-2.96 2.52-1.44 1.05-3.31 2.75-5.23 4.4-.91.78-1.93 1.34-2.41 2.14-.1.17-.05.44-.12.6-.08.16-.23.16-.31.31-.06.11.11.31.09.4-.11.43-.26.94-.17 1.26.09.38.38.49.54.7.14.13.39.32.92.55.17.07.33.32.53.4.17.06.44-.04.62-.02.86.16 1.73.77 2.78.2.4.08.75.29 1.22.23.06.51-.22.87-.55 1.2.12.42.76.47.64.8-1.08.7-2.24.43-3.25.75-.8.24-1.51.92-2.53.6-.45.04-.66.4-1.18.37-.96-.37-2.06-.84-3.01-1.71-.25-.21-.46-.44-.66-.7-.21-.24-.4-.52-.57-.82-.33-.6-.55-1.26-.64-1.93-.11-.89.19-1.75.37-2.52.07-.32-.14-.39-.11-.53.03-.22.2-.75.47-1.32.28-.58.64-1.13.93-1.5.38-.51 1.01-1.21 1.71-1.82.7-.62 1.44-1.19 2.04-1.65 2.31-1.82 4.05-3.83 6.74-5.52.78-1.11 2.74-2 3.89-3.15 1.06-1.06 3.05-1.97 4.54-3.04 3.15-2.24 6.29-4.33 9.53-6.34 1.64-1.01 3.37-2.03 5.33-2.86 1.95-.83 4.16-1.48 6.57-1.51Z'
			/>
			<path
				className='d'
				d='M155.75 332.91c.29.03-.02.33.39.3.4-.13.11-.29.09-.42-.04-.28-.08-.56-.12-.97-.15-1.15-.24-2.37.43-3.49.12-.07.42.02.55-.04.19-.18-.14-.4.22-.44 1.11.48.14.94 1.06 1.41-.03.43-.33 1.02.46 1.3-.05.76.39 1.47.79 2.01.41.57.75.98.65 1.63.72.54.93 1.14 1.41 1.68.27.28.67.37.93.64.05.04-.03.25.02.29.34.34.89.29 1.41.42.28.07.55-.11.82-.03.35.11.87-.05 1.32-.17.21-.06.51.15.73 0 .05-.03.04-.24.08-.27.04-.03.11.09.16.08.04-.01 0-.24.02-.26.12-.1.32-.08.45-.17.16-.12.27-.31.45-.37.12-.04.26-.07.5-.04.08.01.26.16.35.18.08.02.07-.11.13-.1.31.03.98.44 1 .05.2.06.49.21.64.18.37.34.48.57.57.81.33.29.63.31.8.55 0 .51-.63.38-.72.72-.08.27.17.9-.19.92-.03.16.16.48.13.65-.56.13-.82.79-1.41 1.09-.19.09-.5-.04-.69.03-.08.03 0 .24-.03.27-.09.09-.56.21-.83.27-.36.09-1.14.15-1.7.18-1.07.06-2.13.51-3.25-.03-.58.29-1.21-.37-1.84-.39-.62 0-1.16-.76-1.72-1.13a8.53 8.53 0 0 1-2.93-3.18c-.69-1.28-1.05-2.7-1.1-4.17ZM173.73 274.32c-.15.45-1.84 1.2-1.66 1.58.74 0 1.63-1 2.39-1.46 1.62-1.03 3.32-2.08 5.92-3.26.9-.45 1.84-.8 2.77-1.16.92-.37 1.88-.69 2.86-.96 1.96-.52 4.02-.87 6.2-.73 1.09.07 2.2.26 3.3.62 1.08.36 2.16.87 3.18 1.67 1.95 1.58 3.25 3.78 3.62 6.36.03.94-.26 1.23-.42 2.12-.14 1.03-.33 1.68-.52 2.26-.22.57-.5 1.1-1.19 1.66-.69-.17.53-1.49.74-3.29.3-1.78-.34-3.62-.98-3.82-.61-1.61-1.98-3.41-3.66-4.2-1.65-.82-3.23-.84-3.76-.5-3.16-.31-6.23.6-8.98 1.84-2.78 1.21-5.31 2.74-7.65 4.46-4.66 3.51-8.67 7.61-12.95 12.07-2.52 3.28-4.96 6.58-7.36 9.9-2.4 3.35-4.89 6.54-6.32 9.95-.75 1.82-1.19 3.7-1.09 5.49.08 1.81.6 3.58 1.45 4.99.15.25.23.48.34.69.09.22.2.43.37.61 1.3 1.44 3.27 2.06 5.44 1.76 1.08-.14 2.2-.49 3.28-1.03 1.08-.52 2.14-1.26 3.21-2.16 2.21-1.86 3.62-3.97 6.06-6.51 2.95-3.1 7.11-7.48 11.71-11.52 2.25-1.99 4.81-3.73 7.1-5.59.49-.4.9-.96 1.39-1.35.48-.38.88-.5 1.4-.87.37-.27.63-.74.98-1 1.51-1.12 3.45-2.47 5.65-3.55 1.29-.63 2.8-1.17 4.43-1.34a9.72 9.72 0 0 1 4.77.71c1.91.82 3.86 2.27 5.14 4.68.42.76.49 1.59.68 2.38.13.65.44 1.73.39 2.41-.06 1.64-.65 2.91-1.32 4.07-.7 1.16-1.54 2.23-2.72 3.47-.94.55-1.73.7-2.92 1.07.15-.6.92-1.17 1.5-1.93-.26-.32-1.37.1-1.14-.38.87-.75 1.63-1.47 2.23-2.33.6-.84 1.04-1.79 1.07-2.78.03-.78-.2-1.45-.47-2.04-.29-.59-.61-1.13-.91-1.82-.45-.48-.86-.41-1.35-.75-.79-.96-2.07-1.61-3.33-1.71-1.22-.11-2.6.32-4.1 1.08-.98.49-2.18.97-3.27 1.72-.44.31-.34.51-.51.66-.57.45-2.93 2.1-4.29 3.12-1.83 1.34-5.49 4.15-8.1 6.43-2.54 2.21-4.78 4.47-7.01 6.81-1.1 1.18-2.22 2.37-3.36 3.6-1.14 1.22-2.3 2.5-3.67 3.84-.93 1.27-2.45 2.78-4.38 4.12-1.93 1.36-4.33 2.4-6.55 2.92-1.03.25-2.24.38-3.56.25-1.31-.12-2.74-.51-4.04-1.24-1.31-.71-2.45-1.74-3.33-2.87-.88-1.14-1.52-2.38-1.98-3.59a15.29 15.29 0 0 1-.75-7.91c.44-2.55 1.4-4.89 2.54-6.99 1.14-2.1 2.46-4 3.76-5.81 1.3-1.8 2.61-3.6 3.96-5.38 2.71-3.56 5.59-7.07 8.8-10.41 3.23-3.32 6.83-6.46 10.95-9.13ZM159.59 265.14c-.04-.28.23 0 .13-.4-.16-.38-.22-.09-.3-.05-.18.08-.37.14-.62.27-.73.36-1.35.87-2.2.87-.09-.07-.19-.36-.29-.43-.18-.05-.12.34-.33.08-.36-1.16.41-.66.23-1.65.3-.23.85-.21.74-1.03 1.28-.56 1.97-2.43 3.4-2.13.72-.68 1.63-.75 2.57-.9.49-.08.99-.34 1.52-.3.09 0 .17.21.25.23.61.07 1.25-.22 2.08-.14.42.04.82-.12 1.29.05.61.22 1.55.43 2.34.95.39.25.56.76.92 1.02.08.06.3 0 .37.07s.01.19.07.28c.04.06.27-.02.32.03.23.21.35.59.54.88.22.35.51.73.59 1.15.04.29.08.62-.04 1.03-.04.13-.26.26-.33.37-.05.09.05.24 0 .33-.23.47-1.02.63-.89 1.1-.23.08-.55.08-.69.18-.46-.22-.65-.39-.83-.54-.42-.11-.68-.1-.94-.22-.26-.23.28-.26.1-.44-.14-.14-.78-.15-.59-.25-.12-.02-.47.03-.6.03.2-.17-.26-.18-.33-.3-.03-.04.16-.23.12-.29-.02-.03-.2.1-.22.1-.06 0-.1-.14-.15-.22-.06-.1-.17-.36-.32-.49-.14-.14-.36-.11-.53-.09-.15.04-.33.03-.54-.16-.24.36-.5-.12-.78.12-.23.22-.61-.18-.96-.11-.73.12-1.5.29-2.36.48-.86.19-1.8.37-2.75.53Z'
			/>
			<path
				className='b'
				d='M464.82 208.08c-.09-.38-.46 0-.47.19-.15-.4-.39-.04-.51-.41-.72.07-1.46-.3-1.96-.27-.41.04-.65.35-1.07-.15-.22-.27-.85-.17-.63-.6-.74.1-1.42-.46-1.83-.29-.25-.38-.5-.75-.93-.88-.39.01-.5.27-.84.34-1.09-.54-2.62-.31-3.94-.31-.35-1.11-1.35-.83-1.87-1.74.13-.29.29-.12.57-.21-.25-.67.57-.89.71-1.39.39-.08.73-.08 1.05-.05.31-.41.7-.28.76-.67.69.24 2.23-.74 3.33-.53.32-.19.44-.56.86-.68 1.28.08 2.48.24 3.77.2 1.14-.06 2.35-.32 3.49-.22 4.03.35 8.47 1.28 12.41 2.21.23.06.61-.03.85.03.2.05.34.3.55.34.47.11.99 0 1.44.14.21.06.35.29.55.34 3.54.86 7.51.89 11.51 1.34 1.01.12 2.02.35 3.05.4 1.89.1 3.77.05 5.53.36 2.81.48 5.91 1.48 7.98 1.86.61.12 1.22.2 1.87.3 1.29.21 2.4.44 3.86.4 1.08 0 2.05-.01 3.16.19 1.57.31 2.77-.22 3.44.93 1.08-.15 2.37.26 3.44.34.59.05.73.15 1.23.49.23 1.72-2.1 1.32-2.66 2.4-1.54.09-2.84.46-4.07 1.08-.19.07 0 .12.13.11-.29.35-1.15.18-1.07.87-1.66.11-3.35.57-5.05.78-.39.05-.83-.07-1.24-.02-.16.02-.46.22-.62.23-1.11.06-2.81-.44-3.72 0-.69.35-4.08-.25-5.81-.38-1.4-.11-2.76-.1-4.08-.27-1.03-.13-2.07-.43-2.96-.21-.8-.46-2.75-.6-3.64-.71-.19-.02-.37.2-.52.17-.15-.03-.47-.29-.58-.32-1.04-.29-2.23-.32-3.29-.49-1.71-.28-3.59-.67-5.26-.61-3.44-.97-7.25-1.62-10.77-2.21-.31-.58-1.2-.51-1.9-.71-1.43-.41-2.77-1.49-4.61-1.52.09-.1.22-.16.36-.2Z'
			/>
		</svg>
	</div>
);

export default Megaphone;