import styleHeader from "./Header.module.css"


export default function Header() {
  return (
    <header className={styleHeader.header}>
      <div className={styleHeader.userIcon}>
        {/* Adicione a imagem do personagem aqui */}
        <img src="caminho/para/sua/imagem.png" alt="Personagem" />
      </div>
    </header>
  );
}