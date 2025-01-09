import React from 'react'
import './ContatoComponente.css'
import contatoimage from "../../assets/contatoimage.png";
import instagramimage from "../../assets/instagramicon.png";
import linkedinimage from "../../assets/linkedinicon.png";
import gmailimage from "../../assets/gmailicon.png";
import loading from "../../assets/loadingicon.gif";

const ContatoComponente = () => {
  
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("<h1>Enviando...</h1> Aguardando resposta do servidor...");
    const formData = new FormData(event.target);

    // formData.append("access_key", "15d9a11c-1005-49d3-907b-6424c6e494d3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sua mensagem foi enviada com sucesso!");
      event.target.reset();
    } else {
      console.log("Erro", data);
      setResult(data.message);
    }
  };

    return (
    <div className="contato">
        <div className="contato-coluna">
            <h3>Meus Contatos<img src={contatoimage} alt="contatoimage" /></h3>
            <p>
            Sinta-se à vontade para entrar em contato através do formulário ou acessar minhas informações de contato abaixo.
            </p>
            <ul>
                <li><img src={gmailimage} alt="gmailimage" /><a href="https://criarmeulink.com.br/u/1736439014">mail.lfellipe@gmail.com</a></li>
                <li><img src={instagramimage} alt="instagramimage" /><a href="https://www.instagram.com/lfellipestudio/">@lfellipestudio</a></li>
                <li><img src={linkedinimage} alt="linkedinimage" /><a href="https://www.linkedin.com/in/lfellipeonline">linkedin.com/in/lfellipeonline</a></li>
            </ul>
        </div>
        <div className="contato-coluna">
            <form onSubmit={onSubmit}>
                <label>Nome</label>
                <input type="text" name='name' placeholder='Digite seu nome'
                required/>
                <label>Telefone</label>
                <input type="tel" name='phone' placeholder='Digite seu telefone'
                required/>
                <label>Mensagem (Opcional)</label>
                <textarea name="message" rows="6" placeholder='Escreva sua mensagem'></textarea>
                <button type='submit' className='default-white-button'>Enviar</button>
            </form>
            <span dangerouslySetInnerHTML={{ __html: result }}></span>
        </div>
    </div>
  )
}

export default ContatoComponente