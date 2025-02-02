import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthProvider";

const Chatbot = () => {
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth && auth.id) { // Verifica si el usuario está autenticado
      const script1 = document.createElement("script");
      script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
      script1.async = true;

      const script2 = document.createElement("script");
      script2.src = "https://files.bpcontent.cloud/2025/01/23/01/20250123012617-O1GA5PKN.js";
      script2.async = true;

      document.body.appendChild(script1);
      document.body.appendChild(script2);

      return () => {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    }
  }, [auth]);

  return null; // No renderiza nada en pantalla
};

export default Chatbot;
