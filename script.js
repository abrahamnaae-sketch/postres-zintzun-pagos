(() => {
  const c = window.ZINTZUN_CONFIG;
  const wa = (msg) => `https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  document.getElementById("waTop").href = wa(c.whatsappMessage);
  document.getElementById("waContact").href = wa(c.whatsappMessage);
  document.getElementById("waReceipt").href = wa(c.receiptMessage);

  document.querySelectorAll(".copy").forEach(btn => {
    btn.addEventListener("click", async () => {
      const value = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
        const old = btn.textContent;
        btn.textContent = "Copiado";
        setTimeout(() => btn.textContent = old, 1400);
      } catch {
        window.prompt("Copia este dato:", value);
      }
    });
  });
})();