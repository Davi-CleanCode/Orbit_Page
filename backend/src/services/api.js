/**
 * CONFIGURAÇÃO DE API EXTERNA
 * -------------------------------------
 * Arquivo para chamadas a APIs externas, se necessário.
 * Julia só mexer se precisarmos consumir novos serviços externos.
 */

const API_URL = "https://orbit-page-backend.vercel.app/api";

export async function sendForm(data) {
  const res = await fetch(`${API_URL}/form`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function subscribeNewsletter(email) {
  const res = await fetch(`${API_URL}/newsletter/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });
  return res.json();
}

export async function loginUser(credentials) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials)
  });
  return res.json();
}
