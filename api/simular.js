

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      erro: "Método não permitido"
    });
  }

  
const { ideia } = req.body;


const accountId = process.env.CLOUDFLARE_ACCOUNT_ID?.trim();

const apiToken = process.env.CLOUDFLARE_API_TOKEN;

console.log("Account ID configurado:", Boolean(accountId));
console.log("API Token configurado:", Boolean(apiToken));

if (!accountId || !apiToken) {
  return res.status(500).json({
    sucesso: false,
    mensagem: "Credenciais da Cloudflare não configuradas."
  });
}



const aiUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`;

const prompt = `Create a professional website design mockup.
Website description: ${ideia}.
Modern interface, beautiful typography,
realistic web layout, high quality.`;

const aiBody = {
  prompt: prompt,
  num_steps: 20
};
try {
const aiResponse = await fetch(aiUrl, {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${apiToken}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(aiBody)
});


if (!aiResponse.ok) {
  const erroCloudflare = await aiResponse.text();

  console.error("Status da Cloudflare:", aiResponse.status);
  console.error("Detalhes do erro:", erroCloudflare);

  return res.status(502).json({
    sucesso: false,
    mensagem: "A Cloudflare não conseguiu gerar a imagem."
  });

}

const imageBuffer = Buffer.from(
  await aiResponse.arrayBuffer()
);

const imageBase64 = imageBuffer.toString("base64");


return res.status(200).json({
  sucesso: true,
  imagem: `data:image/png;base64,${imageBase64}`,
  mensagem: "Imagem gerada com sucesso!"
});


} catch (erro) {
  console.error("Falha ao gerar imagem:", erro.message);

  return res.status(500).json({
    sucesso: false,
    mensagem: "Ocorreu um erro ao gerar a imagem. Tente novamente."
  });
}

}
