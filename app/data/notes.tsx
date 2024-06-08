// app/data/notes.ts
export interface Note {
	id: number;
	title: string;
	content: string;
  }
  
  export const notes: Note[] = [
	{ 
		id: 1, 
		title: 'OpenGLでglGetErrorエラー', 
		content: 'おそらくこれに近い https://github.com/MPI-IS/mesh/issues/23' 
	},
	{ id: 2, title: 'メモ 2', content: 'これはメモ 2 の内容です。' },
	{ id: 3, title: 'メモ 3', content: 'これはメモ 3 の内容です。' },
  ];
  