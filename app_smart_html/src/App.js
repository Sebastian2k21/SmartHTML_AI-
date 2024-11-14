
import './App.css';
import OpenAI from "openai";
import {useState} from "react";

const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;


function App() {
    const [text, setText] = useState(null);
    const [template, setTemplate] = useState(null);
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [insertResult, setInsertResult] = useState(null);

    const openai = new OpenAI({
      apiKey:openaiApiKey,
      dangerouslyAllowBrowser: true});

  const readFile = async (e, name) => {
      e.preventDefault()
      const reader = new FileReader()
      reader.onload = async (e) => { 
        const tt = (e.target.result)
        console.log(tt)
        switch(name) {
          case "text":
            setText(tt)
            break;
          case "article":
            setArticle(tt)
            break;
          case "template":
            setTemplate(tt)
            break;
        }
      };
      reader.readAsText(e.target.files[0])
    }

    const saveFile = async (text, filename) => {
      const blob = new Blob([text], {type : 'application/text'});
      const a = document.createElement('a');
      a.download = filename;
      a.href = URL.createObjectURL(blob);
      a.addEventListener('click', (e) => {
        setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
      });
      a.click();
    };

    const onDownload = async (e) => {
      e.preventDefault();
      saveFile(result, "artykul.html");
    }

    const onDownload2 = async (e) => {
      e.preventDefault();
      saveFile(insertResult, "podglad.html");
    }

  const onSubmitForm = async (e) => {
    e.preventDefault();


    setLoading(true);
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
              role: "user",
              content: "Dokonaj strukturyzacji tekstu do html, miejsca gdzie warto wstawić grafiki oznacz jako img wraz z src='image_placeholder.jpg', dodaj atrybut alt do każdego obrazka z promptem który może służyć do generowania grafiki. dodaj też podpisy pod grafikami używając odpowiednich tagów html, nic nie pisz, podaj od razu HTML jedynie z wnętrza body (nie dodawaj znaczników body html head), tutaj znajduje się tekst: " + text
          },
      ],
  });
  
  setLoading(false);
  console.log(completion.choices[0].message);
  setResult(completion.choices[0].message.content.replace("```html\n", "").replace("```", ""));
  }

  const onSubmitInsertForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
              role: "user",
              content: "Chce tylko HTML, nic wiecej nie pisz. Wstaw artykuł do szablonu do body, artykuł: " + article + " szablon: " + template
          },
      ],
  })
  setLoading(false);
  setInsertResult(completion.choices[0].message.content.replace("```html\n", "").replace("```", ""));
}


  return (
    <div className='App'>
      <div className='App-header'>

      {loading ? <div className="loader"></div> :
      <>
      <form onSubmit={onSubmitForm}>
                <h3>Insert article to HTML</h3>
          <input type="file" onChange={e => readFile(e, "text")}></input>
          {text && 
          <button className='button-65' type="submit">Request AI</button>}
  
      </form>
      {result && !loading && <button onClick={onDownload} className='button-65'>Download file</button>}


      <form onSubmit={onSubmitInsertForm}>
        <h3>Insert article into template</h3>
        <label>Article html file</label>
        <input type="file" onChange={e => readFile(e, "article")}></input>
        <label>Template html file</label>
        <input type="file" onChange={e => readFile(e, "template")}></input>
        {template && article && 
          <button className='button-65' type="submit">Submit</button>}
        
        {insertResult && <button type="button" onClick={onDownload2} className='button-65'>Download file</button>}
      </form>
      </>}
      
      </div>
    </div>
  );
}

export default App;
