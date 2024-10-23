import styleCidCad from "./CidCad.module.css";

export default function CidUser() {
    return (
        <div className={styleCidCad.page}>
            <div className={styleCidCad.backButtonContainer}>
                <a href="/CidUser.js" onClick={() => window.history.back()} className={styleCidCad.backButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg>
                </a>
            </div>
            <div className={styleCidCad.container}>
                <h1>Cadastrar CID</h1>
                <form>
                    <label htmlFor="codigo">Código</label>
                    <input type="text" id="codigo" name="codigo" placeholder="Insira o código" />
                    <label htmlFor="cid10">CID</label>
                    <input type="text" id="cid10" name="cid10" placeholder="Insira o CID" />
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" name="descricao" placeholder="Descrição"></textarea>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}