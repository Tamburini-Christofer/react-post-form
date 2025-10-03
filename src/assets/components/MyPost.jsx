import { useState } from "react";

const MyPost = () => {
    const [form, setForm] = useState ({
        author: "",
        title: "",
        body: "",
        pubblic: false
    });

    function handleFormData(e) {

        const { name, value } = e.target;
        setForm((currentFormData) => ({ ...currentForm, [name]: value }));
    }

    const handleChange = (e) => {
        const { name, title, type} = e.target;

        if(type === "checkbox") {
            setData({...form, [name]: checked}
        } else {
            setData({...form, [name]: value}
        }
    };

   

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("https://**67c5b4f3351c081993fb1ab6**.mockapi.io**/api**/posts")
        .then(res => console.log("I tuoi dati sono stati inviati correttamente", res.data))
        .catch(error => console.log(error))
    }

    return(
        <>
            <div className="postContainer">
                <form action="">
                    <div>
                      <input
                            className="formCainter"
                            placeholder="author"
                            type="value"
                            value={form.author}
                            onChange={handleFormData}
                            title="author"
                        />
                      <input
                            className="formCainter"
                            placeholder="title"
                            type="value"
                            value={form.title}
                            onChange={handleFormData}
                            title="title"
                        />
                      <input
                            className="formCainter"
                            placeholder="body"
                            type="text"
                            value={form.body}
                            onChange={handleFormData}
                            title="bodyPost"
                        />
                      <input
                            className="formCainter"
                            placeholder="pubblic"
                            type="value"
                            value={form.pubblic}
                            onChange={handleFormData}
                            title="pubblic"
                        />
                    </div>
                
                </form>
                
            </div>
        
        
        
        
        
        </>
    )
}