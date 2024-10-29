import styleMedCid from "./MedCid.module.css"
import styleMedCidCad from "./MedCidCad.module.css"
import { FiXCircle  } from "react-icons/fi";

import { useState } from "react";

export default function MedCid() {
  const [openTrue, setOpenTrue] = useState(false)


    const [searchTerm, setSearchTerm] = useState("");
    const [cids, setCids] = useState([
        { code: "A00.0", description: "Cólera devido a Vibrio cholerae 01, biótipo cholerae", isFavorite: false },
        { code: "A00.1", description: "Cólera devido a Vibrio cholerae 01, biótipo El Tor", isFavorite: true }
    ]);

    // Handle search filtering
    const filteredCids = cids
        .filter((cid) =>
            cid.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cid.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0)); // Sort by favorite

    // Toggle favorite status
    const toggleFavorite = (index) => {
        const updatedCids = [...cids];
        const cidToToggle = updatedCids[index];
        cidToToggle.isFavorite = !cidToToggle.isFavorite;

        // If favoriting, move it to the top
        if (cidToToggle.isFavorite) {
            updatedCids.splice(index, 1); // Remove from current position
            updatedCids.unshift(cidToToggle); // Add to the top
        }
        setCids(updatedCids);
    };

    const openCadCid = () => {
        setOpenTrue(true);
        console.log("teste")
    }

    const closeCadCid = () => {
        setOpenTrue(false);
    };



    return (
        <div className={styleMedCid.page}>


            <div className={styleMedCid.container}>
                <div className={styleMedCid.header}>
                    <h1>CID</h1>
                    <div className={styleMedCid.addCid}>
                        <button onClick={openCadCid}>Adicionar CID</button> 
                    </div>
                </div>
                {openTrue && (
                            <div className={styleMedCidCad.pageModal}>
                              
                                <div className={styleMedCidCad.containerModal}>
                                <div className={styleMedCidCad.backButtonContainerModal}>
                                   <FiXCircle  onClick = {closeCadCid} className = {styleMedCidCad.closeModal}/>
                                </div>
                                    <h1>Cadastrar CID</h1>
                                    <form className={styleMedCidCad.formModal}>
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

                        )}
                <div className={styleMedCid.searchContainer}>
                    <div className={styleMedCid.inputWrapper}>
                        <input
                            type="text"
                            placeholder="A00"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <svg className={styleMedCid.searchIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.44.856a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
                        </svg>
                    </div>
                </div>
                <div className={styleMedCid.cidList}>
                    {filteredCids.map((cid, index) => (
                        <div key={cid.code} className={styleMedCid.cidItem}>
                            <span className={styleMedCid.cidCode}>{cid.code}</span>
                            <span className={styleMedCid.cidDescription}>{cid.description}</span>
                            <button
                                className={styleMedCid.favoriteButton}
                                onClick={() => toggleFavorite(index)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 1.5l1.224 3.773h3.973l-3.208 2.327 1.224 3.773L8 9.272l-3.213 2.327 1.224-3.773L2.803 5.273h3.973L8 1.5z" fill={cid.isFavorite ? "gold" : "black"} />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}