
// js/formValidation.js
export function validarFormulario(form) {
  const inputs = form.querySelectorAll('input, textarea, select');
  let valido = true;

  inputs.forEach(input => {
    const grupo = input.closest('.form-group') || input;
    grupo.classList.remove('erro');
    if (!input.value.trim()) {
      grupo.classList.add('erro');
      valido = false;
    }
  });

  if (!valido) {
    mostrarMensagem("Corrija os campos destacados", false);
  } else {
    mostrarMensagem("Formulário enviado com sucesso!", true);
    form.reset();
  }

  return valido;
}

function mostrarMensagem(texto, sucesso) {
  const existente = document.querySelector('.mensagem-flutuante');
  if (existente) existente.remove();

  const div = document.createElement('div');
  div.className = 'mensagem-flutuante';
  div.textContent = texto;
  div.style.background = sucesso ? 'rgba(0,150,0,0.9)' : 'rgba(200,0,0,0.9)';
  document.body.appendChild(div);

  setTimeout(() => {
    div.classList.add('fadeout');
    setTimeout(() => div.remove(), 1000);
  }, 3000);
}
