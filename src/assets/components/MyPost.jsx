import { useState } from "react";
import axios from "axios";

const MyPost = () => {
  const [form, setForm] = useState({
    author: "",
    title: "",
    body: "",
    pubblic: false,
  });

  function handleFormData(e) {
    const { name, value } = e.target;
    setForm((currentFormData) => ({ ...currentFormData, [name]: value }));
  }

  function handleCheckbox(e) {
    const { name, checked } = e.target;
    setForm((currentFormData) => ({ ...currentFormData, [name]: checked }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.pubblic) {
      alert("Il post è stato inviato ed è con privacy pubblic");
    } else {
      alert("Il post è stato inviato ed è con privacy private");
    }

    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", form)
      .then((res) =>
        console.log("I tuoi dati sono stati inviati correttamente", res.data)
      )
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="postContainer">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="formCainter"
              placeholder="Author"
              type="text"
              name="author"
              value={form.author}
              onChange={handleFormData}
            />
          </div>
          <div>
            {" "}
            <input
              className="formCainter"
              placeholder="Title"
              type="text"
              name="title"
              value={form.title}
              onChange={handleFormData}
            />
          </div>
          <div>
            {" "}
            <textarea
              rows="10"
              cols="100"
              className="formCainter"
              placeholder="Body"
              type="text"
              name="body"
              value={form.body}
              onChange={handleFormData}
            />
          </div>
          <div>
            <label>
              Pubblico
              <input
                className="inputCheck"
                type="checkbox"
                name="pubblic"
                checked={form.pubblic}
                onChange={handleCheckbox}
              />
            </label>
          </div>
          <button type="submit">Invia</button>
        </form>
      </div>
    </>
  );
};

export default MyPost;
