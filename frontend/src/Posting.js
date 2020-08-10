import React from 'react';

export default function App() {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      title: ${title}
      author: ${author}
      Accepted Terms: ${content}
    `);

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <label>
      <div>
        <p>제목:</p>
        <input
          name="title"
          type="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required />
      </div>
      </label>

      <label>
        <div>
        <p>글쓴이:</p>
        <input
          name="author"
          type="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required />
          </div>
      </label>

      <label>
        <div>
        <p>내용:</p>
        <textarea // 나중에 서머노트로 구현해주세요. 죄송합니다...
          name="content"
          type="textarea"
          value={content}
          onChange={e => setContent(e.target.value)}
          required />
        <p>Don't use bad words</p>
        </div>
      </label>

      <button>Submit</button>
    </form>
  );
}