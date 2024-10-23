import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importando Link para navegação
import styleCidUser from "./CidUser.module.css";

export default function CidUser() {
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

    return (
        <div className={styleCidUser.page}>
            <div className={styleCidUser.backButtonContainer}>
                <Link to="/CidCad" className={styleCidUser.backButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 .708 0" />
                    </svg>
                </Link>
            </div>

            <div className={styleCidUser.container}>
                <div className={styleCidUser.header}>
                    <h1>CID</h1>
                    <div className={styleCidUser.addCid}>
                        <Link to="/CidCad">Adicionar CID</Link> {/* Direcionando para a página CidCad */}
                    </div>
                </div>

                <div className={styleCidUser.searchContainer}>
                    <div className={styleCidUser.inputWrapper}>
                        <input
                            type="text"
                            placeholder="A00"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <svg className={styleCidUser.searchIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.44.856a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
                        </svg>
                    </div>
                </div>
                <div className={styleCidUser.cidList}>
                    {filteredCids.map((cid, index) => (
                        <div key={cid.code} className={styleCidUser.cidItem}>
                            <span className={styleCidUser.cidCode}>{cid.code}</span>
                            <span className={styleCidUser.cidDescription}>{cid.description}</span>
                            <button
                                className={styleCidUser.favoriteButton}
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
