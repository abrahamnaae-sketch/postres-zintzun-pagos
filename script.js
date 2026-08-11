(() => {
  const c = window.ZINTZUN_CONFIG;
  const wa = (msg) => `https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(msg)}`;

  ["waTop","waContact"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = wa(c.whatsappMessage);
  });

  const receipt = document.getElementById("waReceipt");
  if (receipt) receipt.href = wa(c.receiptMessage);

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      const value = btn.dataset.copy;
      try{
        await navigator.clipboard.writeText(value);
        const original = btn.textContent;
        btn.textContent = "Copiado";
        setTimeout(() => btn.textContent = original, 1400);
      }catch{
        window.prompt("Copia este dato:", value);
      }
    });
  });
})();